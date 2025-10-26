const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const fileName = document.getElementById('fileName');

uploadArea.addEventListener('click', () => {
  fileInput.click();
});

// 选择文件后显示文件名
fileInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    fileName.textContent = e.target.files[0].name;
  } else {
    fileName.textContent = 'No file selected';
  }
});