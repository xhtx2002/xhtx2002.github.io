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

// 单词学习部分
let currentWordIndex = 0;

if (document.getElementById('word-learning')) {
  if (poem) {
    loadWords();
  } else {
    alert('未找到对应的诗词数据');
  }
}

function loadWords() {
  const wordButtons = document.getElementById('word-buttons');
  wordButtons.innerHTML = '';

  const wordsGroup = poem.words.slice(currentWordIndex, currentWordIndex + 5);

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
  if (currentWordIndex >= poem.words.length) {
    alert('已学完所有单词！');
    // 返回到诗词页面或其他操作
    window.location.href = `content.html?poemId=${poemId}`;
  } else {
    loadWords();
  }
}

// 全文背诵部分
function startRecitation() {
  const recitationContent = document.getElementById('recitation-content');
  recitationContent.innerHTML = '';

  const sentences = poem.content.split('\n');
  let index = 0;

  function showSentence() {
    if (index < sentences.length) {
      const sentence = sentences[index];
      recitationContent.innerHTML = `<p class="current-sentence">${sentence}</p>`;
      // 播放句子语音
      const audio = new Audio(`audio/sentence${index + 1}.mp3`);
      audio.play();

      index++;
    } else {
      recitationContent.innerHTML = '<p>请开始背诵全文！</p>';
    }
  }

  // 初次显示第一句
  showSentence();

  // 点击当前句子，显示下一句
  recitationContent.addEventListener('click', showSentence);
}

// 绑定按钮点击事件
if (document.getElementById('start-word-learning')) {
  document.getElementById('start-word-learning').addEventListener('click', () => {
    window.location.href = `words.html?poemId=${poemId}`;
  });
}

if (document.getElementById('start-recitation')) {
  document.getElementById('start-recitation').addEventListener('click', () => {
    window.location.href = `recite.html?poemId=${poemId}`;
  });
}