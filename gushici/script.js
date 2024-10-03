// script.js

// 获取URL参数
const urlParams = new URLSearchParams(window.location.search);
const poemIdParam = urlParams.get('poemId');
const poemId = poemIdParam ? parseInt(poemIdParam) : null;

// 获取诗词数据
const poem = poemId ? poems.find(p => p.id === poemId) : null;

// 显示诗词标题
if (document.getElementById('poem-title') && poem) {
  document.getElementById('poem-title').innerText = poem.title;
}

// 在诗词内容中标注古今异义词
if (document.getElementById('poem-content') && poem) {
  document.getElementById('poem-content').innerHTML = highlightWords(poem.content, poem.words);
}

function highlightWords(content, words) {
  words.forEach(wordObj => {
    const regex = new RegExp(wordObj.word, 'g');
    content = content.replace(regex, `<span class="highlight" onclick="startWordLearning()">${wordObj.word}</span>`);
  });
  return content;
}

// 绑定“开始单词学习”按钮的点击事件
if (document.getElementById('start-word-learning')) {
  document.getElementById('start-word-learning').addEventListener('click', () => {
    if (poemId) {
      window.location.href = `words.html?poemId=${poemId}`;
    } else {
      alert('无法获取诗词ID');
    }
  });
}

// 单词学习部分
let currentWordIndex = 0;

if (document.getElementById('word-learning')) {
  if (poem) {
    loadWords();
  } else {
    alert('未找到对应的诗词数据');
  }
}

// 为“下一组单词”按钮绑定点击事件
if (document.getElementById('next-words-btn')) {
  document.getElementById('next-words-btn').addEventListener('click', nextWords);
}

function loadWords() {
  const wordButtons = document.getElementById('word-buttons');
  wordButtons.innerHTML = '';

  const wordsGroup = poem.words.slice(currentWordIndex, currentWordIndex + 5);

  // 检查是否还有单词可供加载
  if (wordsGroup.length === 0) {
    alert('已学完所有单词！');
    window.location.href = `content.html?poemId=${poemId}`;
    return;
  }

  wordsGroup.forEach(wordObj => {
      const buttonWrapper = document.createElement('div');
      buttonWrapper.classList.add('word-button-wrapper');
      buttonWrapper.style.width = '100%';
      buttonWrapper.style.textAlign = 'center';

      const button = document.createElement('button');
      button.innerText = wordObj.word;
      button.classList.add('btn', 'btn-outline-primary', 'word-button');
      button.wordText = wordObj.word; // 保存单词文本
      button.clickCount = 0; // 初始化点击计数

      const meaning = document.createElement('div');
      meaning.classList.add('word-meaning');
      meaning.style.display = 'none'; // 初始不显示释义
      meaning.innerText = wordObj.meaning;

      const audio = new Audio(wordObj.audio);

      button.addEventListener('click', () => {
          // 重置其他单词的计数和释义显示
          resetOtherWords(wordButtons, buttonWrapper);

          button.clickCount++;
          if (button.clickCount === 1) {
              // 显示释义并播放语音
              meaning.style.display = 'block';
              audio.play();
          } else if (button.clickCount === 2) {
              // 只播放语音，不显示释义
              meaning.style.display = 'none';
              audio.play();
          } else if (button.clickCount === 3) {
              // 只播放语音，不显示释义和单词
              meaning.style.display = 'none';
              button.innerHTML = '&nbsp;'; // 添加不可见的空格字符
              audio.play();
          } else {
              // 重新显示单词并播放语音
              button.innerText = button.wordText; // 恢复单词文本
              audio.play();
              button.clickCount = 0; // 重置计数
          }
      });

      buttonWrapper.appendChild(button);
      buttonWrapper.appendChild(meaning);
      wordButtons.appendChild(buttonWrapper);
  });
}

function resetOtherWords(wordButtons, currentWrapper) {
  const wrappers = wordButtons.getElementsByClassName('word-button-wrapper');
  for (let wrapper of wrappers) {
      if (wrapper !== currentWrapper) {
          const btn = wrapper.querySelector('.word-button');
          const meaning = wrapper.querySelector('.word-meaning');
          btn.innerText = btn.wordText; // 恢复单词文本
          meaning.style.display = 'none';
          btn.clickCount = 0; // 重置点击计数
      }
  }
}

function nextWords() {
  currentWordIndex += 5;
    loadWords();
}

// 绑定“开始全文背诵”按钮的点击事件
if (document.getElementById('start-recitation')) {
  document.getElementById('start-recitation').addEventListener('click', () => {
    if (poemId) {
      window.location.href = `recite.html?poemId=${poemId}`;
    } else {
      alert('无法获取诗词ID');
    }
  });
}

// 全文背诵部分
if (document.getElementById('recitation')) {
  if (poem) {
    startRecitation();
  } else {
    alert('未找到对应的诗词数据');
  }
}

function startRecitation() {
  const recitationContent = document.getElementById('recitation-content');
  const nextSentenceBtn = document.getElementById('next-sentence-btn');

  const sentences = poem.sentences;
  let index = -1; // 初始化为 -1，表示还未开始

  // 首先显示整首诗词，让用户先背诵一遍
  showFullPoem();

  function showFullPoem() {
    let fullContent = '';
    sentences.forEach(sentence => {
      fullContent += sentence.text + '\n';
    });
    recitationContent.innerHTML = `<pre class="full-poem">${fullContent}</pre>`;
    nextSentenceBtn.innerText = '开始背诵';
    nextSentenceBtn.onclick = showNextSentence;
  }

  function showNextSentence() {
    index++;
    if (index < sentences.length) {
      const sentenceObj = sentences[index];
      recitationContent.innerHTML = `<p class="current-sentence">${sentenceObj.text}</p>`;
      nextSentenceBtn.innerText = '下一句';

      // 点击句子播放语音
      const currentSentence = document.querySelector('.current-sentence');
      currentSentence.addEventListener('click', () => {
        const audio = new Audio(sentenceObj.audio);
        audio.play();
      });
    } else if (index === sentences.length) {
      recitationContent.innerHTML = '<p>请开始背诵全文！</p>';
      nextSentenceBtn.style.display = 'none'; // 隐藏“下一句”按钮
    }
  }
}