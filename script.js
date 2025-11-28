// script.js - Simple quiz logic (easy to read for grade 8 students)

const questions = [
  { text: 'Do you like writing stories or reading books?', options: [
      {text: 'Yes, I love it', cat: 'Linguistik'},
      {text: 'Sometimes', cat: 'Intrapersonal'},
      {text: 'Not really', cat: 'Kinestetik'}
    ]
  },
  { text: 'Do you enjoy solving puzzles or logic problems?', options: [
      {text: 'Yes, very much', cat: 'Logika'},
      {text: 'A little', cat: 'Visual'},
      {text: 'Not really', cat: 'Interpersonal'}
    ]
  },
  { text: 'Do you like drawing or designing things?', options: [
      {text: 'Yes, I like drawing', cat: 'Visual'},
      {text: 'I like moving and building', cat: 'Kinestetik'},
      {text: 'I like talking with friends', cat: 'Interpersonal'}
    ]
  },
  { text: 'Do you prefer working alone and thinking deeply?', options: [
      {text: 'Yes, I like working alone', cat: 'Intrapersonal'},
      {text: 'I prefer team work', cat: 'Interpersonal'},
      {text: 'I like writing short stories', cat: 'Linguistik'}
    ]
  },
  { text: 'Do you enjoy sports or physical activities?', options: [
      {text: 'Yes, very much', cat: 'Kinestetik'},
      {text: 'I like experiments and tools', cat: 'Logika'},
      {text: 'I prefer visual arts', cat: 'Visual'}
    ]
  }
];

// categories and scores
const categories = { Linguistik:0, Logika:0, Visual:0, Interpersonal:0, Intrapersonal:0, Kinestetik:0 };
let current = 0;

const quizEl = document.getElementById('quiz-container');
const nextBtn = document.getElementById('next-btn');

function renderQuestion(){
  const q = questions[current];
  quizEl.innerHTML = '';

  const questionEl = document.createElement('div');
  questionEl.className = 'question';
  questionEl.textContent = `Question ${current+1}: ${q.text}`;
  quizEl.appendChild(questionEl);

  const optionsEl = document.createElement('div');
  optionsEl.className = 'options';

  q.options.forEach((opt)=>{
    const label = document.createElement('label');
    label.className = 'option';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answer';
    input.value = opt.cat;

    const span = document.createElement('span');
    span.textContent = opt.text;

    label.appendChild(input);
    label.appendChild(span);
    optionsEl.appendChild(label);
  });

  quizEl.appendChild(optionsEl);
  nextBtn.disabled = true;

  // enable next when option selected
  quizEl.querySelectorAll('input[name="answer"]').forEach(inp => {
    inp.addEventListener('change', () => nextBtn.disabled = false);
  });
}

nextBtn.addEventListener('click', ()=>{
  const selected = document.querySelector('input[name="answer"]:checked');
  if(!selected) return;

  const cat = selected.value;
  categories[cat] = (categories[cat] || 0) + 1;

  current++;
  if(current < questions.length){
    renderQuestion();
  } else {
    showResult();
  }
});

function showResult(){
  quizEl.innerHTML = '';
  nextBtn.disabled = true;

  // find highest score(s)
  let max = -1; let best = [];
  for(const k in categories){
    if(categories[k] > max){ max = categories[k]; best = [k]; }
    else if(categories[k] === max){ best.push(k); }
  }

  const title = document.createElement('div');
  title.className = 'question';
  title.textContent = 'Hasil Tes';

  const body = document.createElement('div');
  body.className = 'result';

  const top = document.createElement('h3');
  top.textContent = best.length === 1 ? best[0] : best.join(' & ');

  const para = document.createElement('p');
  para.className = 'small';
  para.textContent = getDescription(best[0]);

  body.appendChild(top);
  body.appendChild(para);

  // save top category to localStorage for Quest page
  try{ localStorage.setItem('fy_topCategory', best[0]); }catch(e){}

  const restart = document.createElement('button');
  restart.className = 'restart';
  restart.textContent = 'Mulai Ulang';
  restart.addEventListener('click', ()=>{
    for(const k in categories) categories[k]=0;
    current = 0;
    renderQuestion();
  });

  quizEl.appendChild(title);
  quizEl.appendChild(body);
  quizEl.appendChild(restart);
}

function getDescription(category){
  const desc = {
    Linguistik: 'Kamu suka bekerja dengan kata-kata: menulis, membaca, dan berbicara. Cocok untuk jurnalistik, bahasa, atau komunikasi.',
    Logika: 'Kamu suka berpikir teratur, memecahkan masalah dan angka. Cocok untuk sains, matematika, atau teknologi.',
    Visual: 'Kamu suka gambar, warna, desain, dan hal-hal tampak visual. Cocok untuk seni, desain, atau arsitektur.',
    Interpersonal: 'Kamu pandai berinteraksi dengan orang lain. Cocok untuk guru, psikologi, dan pekerjaan sosial.',
    Intrapersonal: 'Kamu tahu diri sendiri dan suka refleksi. Cocok untuk penulis, perencana, atau peneliti kecil.',
    Kinestetik: 'Kamu suka bergerak, olahraga, dan praktik. Cocok untuk olahraga, kerja tangan, atau teknik lapangan.'
  };
  return desc[category] || 'Coba lagi untuk menemukan minatmu.';
}

// start
renderQuestion();

