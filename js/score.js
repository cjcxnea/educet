// score.js - 成绩页面渲染与交互逻辑

// 页面加载时从 sessionStorage 读取数据并渲染
window.addEventListener('DOMContentLoaded', function() {
  // 从 sessionStorage 获取数据
  const subject = sessionStorage.getItem('subject');
  const uname = sessionStorage.getItem('uname');
  const idCardl = sessionStorage.getItem('idCardl');
  const school = sessionStorage.getItem('school');
  const scoreRoport = sessionStorage.getItem('scoreRoport');
  const writtenExamNum = sessionStorage.getItem('writtenExamNum');
  const writtenTotal = sessionStorage.getItem('writtenTotal');
  const writtenListening = sessionStorage.getItem('writtenListening');
  const writtenReading = sessionStorage.getItem('writtenReading');
  const writtenWriting = sessionStorage.getItem('writtenWriting');
  const oralExamNum = sessionStorage.getItem('oralExamNum');
  const oralLevel = sessionStorage.getItem('oralLevel');
  const noticeTime = sessionStorage.getItem('noticeTime');

  // 如果没有数据，跳转回首页
  if (!subject) {
    window.location.href = 'index.html';
    return;
  }

  // 渲染考试科目到 exam-type 标签
  const examTypeEl = document.querySelector('.exam-type');
  if (examTypeEl) {
    examTypeEl.textContent = subject;
  }

  // 渲染考生信息（姓名和身份证号脱敏处理）
  const nameValueEl = document.querySelector('.score-user-name-value');
  if (nameValueEl) {
    // 姓名脱敏：第1个字保留，从第2个字开始用 * 代替
    const maskedName = uname.charAt(0) + '*'.repeat(uname.length - 1);
    nameValueEl.textContent = maskedName;
  }

  const idCardValueEl = document.querySelector('.score-id-card-value');
  if (idCardValueEl) {
    // 身份证号脱敏：前2位和后3位保留，中间13位用 * 代替
    const maskedIdCard = idCardl.substring(0, 2) + '*'.repeat(13) + idCardl.substring(idCardl.length - 3);
    idCardValueEl.textContent = maskedIdCard;
  }

  const schoolValueEl = document.querySelector('.score-school-name-value');
  if (schoolValueEl) {
    schoolValueEl.textContent = school;
  }

  const scoreReportValueEl = document.querySelector('.score-score-report-value');
  if (scoreReportValueEl) {
    scoreReportValueEl.textContent = scoreRoport;
  }

  // 渲染笔试成绩
  const writtenExamNumEl = document.querySelector('.written-exam-num-value');
  if (writtenExamNumEl) {
    writtenExamNumEl.textContent = writtenExamNum;
  }

  const writtenTotalEl = document.querySelector('.score-total-value');
  if (writtenTotalEl) {
    writtenTotalEl.textContent = writtenTotal;
  }

  const writtenListeningEl = document.querySelector('.score-listening-value');
  if (writtenListeningEl) {
    writtenListeningEl.textContent = writtenListening;
  }

  const writtenReadingEl = document.querySelector('.score-reading-value');
  if (writtenReadingEl) {
    writtenReadingEl.textContent = writtenReading;
  }

  const writtenWritingEl = document.querySelector('.score-writing-value');
  if (writtenWritingEl) {
    writtenWritingEl.textContent = writtenWriting;
  }

  // 渲染口试成绩
  const oralExamNumEl = document.querySelector('.oral-exam-num-value');
  if (oralExamNumEl) {
    oralExamNumEl.textContent = oralExamNum;
  }

  const oralLevelEl = document.querySelector('.oral-level-value');
  if (oralLevelEl) {
    oralLevelEl.textContent = oralLevel;
  }

  // 渲染通知时间
  const noticeTimeEl = document.querySelector('.notice-time');
  if (noticeTimeEl) {
    noticeTimeEl.textContent = noticeTime;
  }

  // 根据 scoreRoport 值控制显示/隐藏
  // scoreRoport 为 0 时：隐藏"成绩报告单编号"所在 li，显示"不"字
  // scoreRoport 不为 0 时：隐藏"不"字，显示"成绩报告单编号"所在 li
  const scoreRoportNum = Number(scoreRoport);
  const scoreReportLi = document.querySelector('.score-score-report-value');
  const isScoreReportEl = document.querySelector('.is-score-report');

  if (scoreRoportNum === 0) {
    // scoreRoport 为 0：隐藏成绩报告单编号所在 li
    if (scoreReportLi) {
      scoreReportLi.closest('li').style.display = 'none';
    }
  } else {
    // scoreRoport 不为 0：隐藏"不"字
    if (isScoreReportEl) {
      isScoreReportEl.style.display = 'none';
    }
  }
});

// 返回按钮点击事件
const btnBack = document.querySelector('.btn-back');
if (btnBack) {
  btnBack.addEventListener('click', function() {
    window.location.href = 'index.html';
  });
}
