import './style.css'

// 游戏配置
const GRID_SIZE = 20;
const GAME_SPEED = 150;

// 获取游戏元素
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('highScore');

// 游戏状态
let snake = [
  { x: 10, y: 10 }
];
let food = generateFood();
let direction = 'right';
let score = 0;
let highScore = localStorage.getItem('snakeHighScore') || 0;
let gameLoop;

// 生成食物
function generateFood() {
  const x = Math.floor(Math.random() * (canvas.width / GRID_SIZE));
  const y = Math.floor(Math.random() * (canvas.height / GRID_SIZE));
  return { x, y };
}

// 绘制网格元素
function drawGridElement(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x * GRID_SIZE, y * GRID_SIZE, GRID_SIZE - 2, GRID_SIZE - 2);
}

// 更新游戏
function update() {
  const head = { ...snake[0] };

  switch (direction) {
    case 'up': head.y--; break;
    case 'down': head.y++; break;
    case 'left': head.x--; break;
    case 'right': head.x++; break;
  }

  // 检查碰撞
  if (head.x < 0 || head.x >= canvas.width / GRID_SIZE ||
      head.y < 0 || head.y >= canvas.height / GRID_SIZE ||
      snake.some(segment => segment.x === head.x && segment.y === head.y)) {
    gameOver();
    return;
  }

  snake.unshift(head);

  // 检查是否吃到食物
  if (head.x === food.x && head.y === food.y) {
    score += 10;
    scoreElement.textContent = score;
    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = highScore;
      localStorage.setItem('snakeHighScore', highScore);
    }
    food = generateFood();
  } else {
    snake.pop();
  }
}

// 绘制游戏
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // 绘制蛇
  snake.forEach((segment, index) => {
    drawGridElement(segment.x, segment.y, index === 0 ? '#646cff' : '#535bf2');
  });

  // 绘制食物
  drawGridElement(food.x, food.y, '#00ff00');
}

// 游戏循环
function gameLoopFunction() {
  update();
  draw();
}

// 游戏结束
function gameOver() {
  clearInterval(gameLoop);
  alert(`游戏结束！得分：${score}`);
  snake = [{ x: 10, y: 10 }];
  direction = 'right';
  score = 0;
  scoreElement.textContent = score;
  food = generateFood();
  startGame();
}

// 开始游戏
function startGame() {
  if (gameLoop) clearInterval(gameLoop);
  gameLoop = setInterval(() => {
    update();
    draw();
  }, GAME_SPEED);
}

// 键盘控制
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      if (direction !== 'down') direction = 'up';
      break;
    case 'ArrowDown':
      if (direction !== 'up') direction = 'down';
      break;
    case 'ArrowLeft':
      if (direction !== 'right') direction = 'left';
      break;
    case 'ArrowRight':
      if (direction !== 'left') direction = 'right';
      break;
  }
});

// 初始化游戏
highScoreElement.textContent = highScore;
startGame();
