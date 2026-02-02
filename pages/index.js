import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  MULTIPLE_CHOICE_QUESTIONS,
  FILL_IN_QUESTIONS,
  SORT_QUESTIONS,
  TRUE_FALSE_QUESTIONS,
  PICTURE_QUESTIONS,
  TIME_SIGNALS,
  IRREGULAR_VERBS
} from '../data/questions';

// Chuyển đổi dữ liệu thành format câu hỏi
function buildQuestions() {
  const questions = [];
  
  MULTIPLE_CHOICE_QUESTIONS.forEach(q => {
    questions.push({ ...q, type: 'multiple' });
  });
  
  FILL_IN_QUESTIONS.forEach(q => {
    questions.push({ ...q, type: 'fill' });
  });
  
  SORT_QUESTIONS.forEach(q => {
    questions.push({ ...q, type: 'sort' });
  });
  
  TRUE_FALSE_QUESTIONS.forEach(q => {
    questions.push({ ...q, type: 'truefalse' });
  });
  
  PICTURE_QUESTIONS.forEach(q => {
    questions.push({ ...q, type: 'picture' });
  });
  
  return questions;
}

export default function Home() {
  const [screen, setScreen] = useState('home');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [fillAnswer, setFillAnswer] = useState('');
  const [sortedPresent, setSortedPresent] = useState([]);
  const [sortedPast, setSortedPast] = useState([]);
  const [remainingWords, setRemainingWords] = useState([]);
  const [stars, setStars] = useState(0);
  const [gameQuestions, setGameQuestions] = useState([]);
  const [streak, setStreak] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [draggedWord, setDraggedWord] = useState(null);
  
  // States cho chế độ học động từ bất quy tắc
  const [verbMode, setVerbMode] = useState('menu'); // menu, flashcard, match, fill, test
  const [currentVerbIndex, setCurrentVerbIndex] = useState(0);
  const [showVerbAnswer, setShowVerbAnswer] = useState(false);
  const [verbScore, setVerbScore] = useState(0);
  const [verbTotal, setVerbTotal] = useState(0);
  const [matchPairs, setMatchPairs] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [verbFillAnswer, setVerbFillAnswer] = useState('');
  const [verbFillResult, setVerbFillResult] = useState(null);
  const [testVerbs, setTestVerbs] = useState([]);
  const [testIndex, setTestIndex] = useState(0);
  const [learnedVerbs, setLearnedVerbs] = useState([]);
  const [shuffledVerbs, setShuffledVerbs] = useState([]);

  const ALL_QUESTIONS = buildQuestions();
  
  // Khởi tạo shuffled verbs khi vào chế độ học
  useEffect(() => {
    if (screen === 'verbs') {
      setShuffledVerbs([...IRREGULAR_VERBS].sort(() => Math.random() - 0.5));
      setCurrentVerbIndex(0);
      setShowVerbAnswer(false);
      setVerbScore(0);
      setVerbTotal(0);
      setLearnedVerbs([]);
    }
  }, [screen]);
  
  // Khởi tạo game nối từ
  useEffect(() => {
    if (verbMode === 'match') {
      initMatchGame();
    }
  }, [verbMode]);
  
  // Khởi tạo bài test
  useEffect(() => {
    if (verbMode === 'test') {
      const testSet = [...IRREGULAR_VERBS].sort(() => Math.random() - 0.5).slice(0, 10);
      setTestVerbs(testSet);
      setTestIndex(0);
      setVerbScore(0);
      setVerbTotal(0);
      setVerbFillAnswer('');
      setVerbFillResult(null);
    }
  }, [verbMode]);
  
  const initMatchGame = () => {
    const selected = [...IRREGULAR_VERBS].sort(() => Math.random() - 0.5).slice(0, 6);
    const bases = selected.map((v, i) => ({ id: `base-${i}`, text: v.base, type: 'base', pairId: i }));
    const pasts = selected.map((v, i) => ({ id: `past-${i}`, text: v.past, type: 'past', pairId: i }));
    const allCards = [...bases, ...pasts].sort(() => Math.random() - 0.5);
    setMatchPairs(allCards);
    setSelectedMatch(null);
    setMatchedPairs([]);
  };
  
  const handleMatchClick = (card) => {
    if (matchedPairs.includes(card.pairId)) return;
    
    if (!selectedMatch) {
      setSelectedMatch(card);
    } else {
      if (selectedMatch.id === card.id) {
        setSelectedMatch(null);
        return;
      }
      
      if (selectedMatch.pairId === card.pairId && selectedMatch.type !== card.type) {
        // Đúng!
        setMatchedPairs([...matchedPairs, card.pairId]);
        setSelectedMatch(null);
        setVerbScore(prev => prev + 1);
        if (matchedPairs.length + 1 >= 6) {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 2000);
        }
      } else {
        // Sai - reset
        setTimeout(() => setSelectedMatch(null), 500);
      }
    }
  };
  
  const handleVerbFillSubmit = () => {
    const currentVerb = verbMode === 'test' ? testVerbs[testIndex] : shuffledVerbs[currentVerbIndex];
    const correct = verbFillAnswer.toLowerCase().trim() === currentVerb.past.toLowerCase();
    setVerbFillResult(correct);
    setVerbTotal(prev => prev + 1);
    if (correct) {
      setVerbScore(prev => prev + 1);
      if (!learnedVerbs.includes(currentVerb.base)) {
        setLearnedVerbs([...learnedVerbs, currentVerb.base]);
      }
    }
  };
  
  const nextVerbFill = () => {
    setVerbFillAnswer('');
    setVerbFillResult(null);
    if (verbMode === 'test') {
      if (testIndex < testVerbs.length - 1) {
        setTestIndex(prev => prev + 1);
      } else {
        setVerbMode('test-result');
      }
    } else {
      if (currentVerbIndex < shuffledVerbs.length - 1) {
        setCurrentVerbIndex(prev => prev + 1);
      } else {
        setCurrentVerbIndex(0);
        setShuffledVerbs([...IRREGULAR_VERBS].sort(() => Math.random() - 0.5));
      }
    }
  };
  
  const renderVerbLearning = () => {
    switch (verbMode) {
      case 'menu':
        return (
          <div className="verb-menu">
            <h2 className="verb-title">🔄 Học Động Từ Bất Quy Tắc</h2>
            <p className="verb-subtitle">Chọn cách học phù hợp với con!</p>
            
            <div className="verb-stats">
              <span>📚 Tổng: {IRREGULAR_VERBS.length} từ</span>
              {learnedVerbs.length > 0 && <span>✅ Đã thuộc: {learnedVerbs.length} từ</span>}
            </div>
            
            <div className="verb-mode-buttons">
              <button className="verb-mode-btn flashcard" onClick={() => setVerbMode('flashcard')}>
                <span className="mode-icon">🎴</span>
                <span className="mode-name">Flashcard</span>
                <span className="mode-desc">Lật thẻ ghi nhớ</span>
              </button>
              
              <button className="verb-mode-btn match" onClick={() => setVerbMode('match')}>
                <span className="mode-icon">🎯</span>
                <span className="mode-name">Nối từ</span>
                <span className="mode-desc">Ghép đôi đúng</span>
              </button>
              
              <button className="verb-mode-btn fill" onClick={() => setVerbMode('fill')}>
                <span className="mode-icon">✏️</span>
                <span className="mode-name">Điền từ</span>
                <span className="mode-desc">Viết dạng quá khứ</span>
              </button>
              
              <button className="verb-mode-btn test" onClick={() => setVerbMode('test')}>
                <span className="mode-icon">📝</span>
                <span className="mode-name">Kiểm tra</span>
                <span className="mode-desc">10 câu ngẫu nhiên</span>
              </button>
            </div>
            
            <button className="back-btn" onClick={() => setScreen('home')} style={{ marginTop: 30 }}>
              ← Về trang chủ
            </button>
          </div>
        );
        
      case 'flashcard':
        const currentVerb = shuffledVerbs[currentVerbIndex];
        if (!currentVerb) return null;
        return (
          <div className="flashcard-mode">
            <div className="flashcard-header">
              <button className="back-btn" onClick={() => setVerbMode('menu')}>← Về</button>
              <span className="flashcard-progress">{currentVerbIndex + 1} / {shuffledVerbs.length}</span>
            </div>
            
            <div 
              className={`flashcard ${showVerbAnswer ? 'flipped' : ''}`}
              onClick={() => setShowVerbAnswer(!showVerbAnswer)}
            >
              <div className="flashcard-inner">
                <div className="flashcard-front">
                  <span className="flashcard-label">Hiện tại</span>
                  <span className="flashcard-word">{currentVerb.base}</span>
                  <span className="flashcard-hint">👆 Chạm để lật</span>
                </div>
                <div className="flashcard-back">
                  <span className="flashcard-label">Quá khứ</span>
                  <span className="flashcard-word">{currentVerb.past}</span>
                  <span className="flashcard-pair">{currentVerb.base} → {currentVerb.past}</span>
                </div>
              </div>
            </div>
            
            <div className="flashcard-buttons">
              <button 
                className="flashcard-btn prev"
                onClick={() => {
                  setShowVerbAnswer(false);
                  setCurrentVerbIndex(prev => prev > 0 ? prev - 1 : shuffledVerbs.length - 1);
                }}
              >
                ← Trước
              </button>
              <button 
                className="flashcard-btn shuffle"
                onClick={() => {
                  setShuffledVerbs([...IRREGULAR_VERBS].sort(() => Math.random() - 0.5));
                  setCurrentVerbIndex(0);
                  setShowVerbAnswer(false);
                }}
              >
                🔀 Trộn
              </button>
              <button 
                className="flashcard-btn next"
                onClick={() => {
                  setShowVerbAnswer(false);
                  setCurrentVerbIndex(prev => prev < shuffledVerbs.length - 1 ? prev + 1 : 0);
                }}
              >
                Sau →
              </button>
            </div>
          </div>
        );
        
      case 'match':
        return (
          <div className="match-mode">
            <div className="match-header">
              <button className="back-btn" onClick={() => setVerbMode('menu')}>← Về</button>
              <span className="match-score">✅ {matchedPairs.length} / 6</span>
            </div>
            
            <h3 className="match-title">🎯 Nối từ hiện tại với quá khứ!</h3>
            
            <div className="match-grid">
              {matchPairs.map(card => (
                <button
                  key={card.id}
                  className={`match-card ${card.type} 
                    ${selectedMatch?.id === card.id ? 'selected' : ''} 
                    ${matchedPairs.includes(card.pairId) ? 'matched' : ''}`}
                  onClick={() => handleMatchClick(card)}
                  disabled={matchedPairs.includes(card.pairId)}
                >
                  {card.text}
                </button>
              ))}
            </div>
            
            {matchedPairs.length >= 6 && (
              <div className="match-complete">
                <p>🎉 Xuất sắc! Con đã nối đúng hết!</p>
                <button className="menu-btn play" onClick={initMatchGame}>
                  🔄 Chơi lại
                </button>
              </div>
            )}
          </div>
        );
        
      case 'fill':
        const fillVerb = shuffledVerbs[currentVerbIndex];
        if (!fillVerb) return null;
        return (
          <div className="verb-fill-mode">
            <div className="verb-fill-header">
              <button className="back-btn" onClick={() => setVerbMode('menu')}>← Về</button>
              <span className="verb-fill-score">✅ {verbScore} / {verbTotal}</span>
            </div>
            
            <div className="verb-fill-card">
              <h3>✏️ Viết dạng quá khứ của:</h3>
              <div className="verb-fill-word">{fillVerb.base}</div>
              
              <div className="verb-fill-input-container">
                <input
                  type="text"
                  value={verbFillAnswer}
                  onChange={(e) => setVerbFillAnswer(e.target.value)}
                  placeholder="Nhập dạng quá khứ..."
                  className="verb-fill-input"
                  disabled={verbFillResult !== null}
                  onKeyPress={(e) => e.key === 'Enter' && verbFillResult === null && handleVerbFillSubmit()}
                  autoFocus
                />
                {verbFillResult === null && (
                  <button className="submit-btn" onClick={handleVerbFillSubmit}>
                    Kiểm tra
                  </button>
                )}
              </div>
              
              {verbFillResult !== null && (
                <div className={`verb-fill-result ${verbFillResult ? 'correct' : 'wrong'}`}>
                  {verbFillResult ? (
                    <p>🎉 Đúng rồi! <strong>{fillVerb.base} → {fillVerb.past}</strong></p>
                  ) : (
                    <p>💡 Chưa đúng! Đáp án: <strong>{fillVerb.base} → {fillVerb.past}</strong></p>
                  )}
                  <button className="next-btn" onClick={nextVerbFill}>
                    Từ tiếp theo →
                  </button>
                </div>
              )}
            </div>
          </div>
        );
        
      case 'test':
        const testVerb = testVerbs[testIndex];
        if (!testVerb) return null;
        return (
          <div className="verb-fill-mode">
            <div className="verb-fill-header">
              <button className="back-btn" onClick={() => setVerbMode('menu')}>← Về</button>
              <span className="verb-fill-progress">Câu {testIndex + 1} / 10</span>
              <span className="verb-fill-score">✅ {verbScore}</span>
            </div>
            
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${((testIndex + 1) / 10) * 100}%` }} />
            </div>
            
            <div className="verb-fill-card">
              <h3>📝 Viết dạng quá khứ của:</h3>
              <div className="verb-fill-word">{testVerb.base}</div>
              
              <div className="verb-fill-input-container">
                <input
                  type="text"
                  value={verbFillAnswer}
                  onChange={(e) => setVerbFillAnswer(e.target.value)}
                  placeholder="Nhập dạng quá khứ..."
                  className="verb-fill-input"
                  disabled={verbFillResult !== null}
                  onKeyPress={(e) => e.key === 'Enter' && verbFillResult === null && handleVerbFillSubmit()}
                  autoFocus
                />
                {verbFillResult === null && (
                  <button className="submit-btn" onClick={handleVerbFillSubmit}>
                    Kiểm tra
                  </button>
                )}
              </div>
              
              {verbFillResult !== null && (
                <div className={`verb-fill-result ${verbFillResult ? 'correct' : 'wrong'}`}>
                  {verbFillResult ? (
                    <p>🎉 Đúng rồi!</p>
                  ) : (
                    <p>💡 Đáp án: <strong>{testVerb.base} → {testVerb.past}</strong></p>
                  )}
                  <button className="next-btn" onClick={nextVerbFill}>
                    {testIndex < 9 ? 'Câu tiếp theo →' : 'Xem kết quả 🏆'}
                  </button>
                </div>
              )}
            </div>
          </div>
        );
        
      case 'test-result':
        const percentage = Math.round((verbScore / 10) * 100);
        return (
          <div className="result-screen">
            <div className="result-card">
              <h2 className="result-title">📝 Kết quả kiểm tra</h2>
              <div className="result-emoji">
                {percentage >= 80 ? '🏆' : percentage >= 50 ? '🌟' : '💪'}
              </div>
              <div className="stars-display">
                {'⭐'.repeat(Math.min(3, Math.floor(percentage / 33)))}
                {'☆'.repeat(3 - Math.min(3, Math.floor(percentage / 33)))}
              </div>
              <p className="result-score">
                Điểm: <strong>{verbScore} / 10</strong> ({percentage}%)
              </p>
              <p className="result-message">
                {percentage >= 80 ? 'Xuất sắc! Con thuộc bài rồi! 🎊' : 
                 percentage >= 50 ? 'Tốt lắm! Cần ôn thêm một chút! 💪' : 
                 'Cần học lại flashcard nha con! 📚'}
              </p>
              <div className="result-buttons">
                <button className="menu-btn play" onClick={() => setVerbMode('test')}>
                  🔄 Thi lại
                </button>
                <button className="menu-btn learn" onClick={() => setVerbMode('flashcard')}>
                  🎴 Ôn Flashcard
                </button>
                <button className="menu-btn learn" onClick={() => setVerbMode('menu')}>
                  ← Về menu
                </button>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  useEffect(() => {
    if (screen === 'game') {
      const shuffled = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 10);
      setGameQuestions(shuffled);
      setCurrentQuestion(0);
      setScore(0);
      setTotalAnswered(0);
      setStreak(0);
    }
  }, [screen]);

  useEffect(() => {
    if (gameQuestions.length > 0 && gameQuestions[currentQuestion]?.type === 'sort') {
      setRemainingWords([...gameQuestions[currentQuestion].words].sort(() => Math.random() - 0.5));
      setSortedPresent([]);
      setSortedPast([]);
    }
  }, [currentQuestion, gameQuestions]);

  const handleAnswer = (answer, correctAnswer) => {
    const correct = answer === correctAnswer;
    setIsCorrect(correct);
    setSelectedAnswer(answer);
    setShowResult(true);
    setTotalAnswered(prev => prev + 1);
    
    if (correct) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
      if (streak + 1 >= 3) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
      }
    } else {
      setStreak(0);
    }
  };

  const handleFillSubmit = () => {
    const q = gameQuestions[currentQuestion];
    const correct = fillAnswer.toLowerCase().trim() === q.answer.toLowerCase();
    setIsCorrect(correct);
    setShowResult(true);
    setTotalAnswered(prev => prev + 1);
    
    if (correct) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleWordDrop = (word, target) => {
    if (target === 'present') {
      setSortedPresent(prev => [...prev, word]);
    } else {
      setSortedPast(prev => [...prev, word]);
    }
    setRemainingWords(prev => prev.filter(w => w !== word));
    setDraggedWord(null);
  };

  const handleWordClick = (word) => {
    if (draggedWord === word) {
      setDraggedWord(null);
    } else {
      setDraggedWord(word);
    }
  };

  const handleBoxClick = (target) => {
    if (draggedWord) {
      handleWordDrop(draggedWord, target);
    }
  };

  const checkSortAnswer = () => {
    const q = gameQuestions[currentQuestion];
    const presentCorrect = sortedPresent.every(w => q.presentWords.includes(w)) && 
                          sortedPresent.length === q.presentWords.length;
    const pastCorrect = sortedPast.every(w => q.pastWords.includes(w)) && 
                       sortedPast.length === q.pastWords.length;
    const correct = presentCorrect && pastCorrect;
    
    setIsCorrect(correct);
    setShowResult(true);
    setTotalAnswered(prev => prev + 1);
    
    if (correct) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer(null);
    setFillAnswer('');
    setIsCorrect(null);
    
    if (currentQuestion < gameQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      const earnedStars = Math.floor((score / gameQuestions.length) * 3);
      setStars(earnedStars);
      setScreen('result');
    }
  };

  const renderQuestion = () => {
    if (gameQuestions.length === 0) return null;
    const q = gameQuestions[currentQuestion];
    
    switch (q.type) {
      case 'multiple':
        return (
          <div className="question-card">
            <div className="question-type-badge">🎯 Chọn đáp án đúng</div>
            <h2 className="question-text">{q.question}</h2>
            <div className="options-grid">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  className={`option-btn ${selectedAnswer === i ? (isCorrect ? 'correct' : 'wrong') : ''} ${showResult && i === q.correct ? 'correct' : ''}`}
                  onClick={() => !showResult && handleAnswer(i, q.correct)}
                  disabled={showResult}
                >
                  {opt}
                </button>
              ))}
            </div>
            {showResult && (
              <div className={`explanation ${isCorrect ? 'correct' : 'wrong'}`}>
                {isCorrect ? '🎉 ' : '💡 '}{q.explanation}
              </div>
            )}
          </div>
        );
        
      case 'fill':
        return (
          <div className="question-card">
            <div className="question-type-badge">✏️ Điền vào chỗ trống</div>
            <h2 className="question-text">{q.sentence}</h2>
            <div className="hint-box">💡 Gợi ý: {q.hint}</div>
            <div className="fill-input-container">
              <input
                type="text"
                value={fillAnswer}
                onChange={(e) => setFillAnswer(e.target.value)}
                placeholder="Nhập đáp án..."
                className="fill-input"
                disabled={showResult}
                onKeyPress={(e) => e.key === 'Enter' && !showResult && handleFillSubmit()}
              />
              {!showResult && (
                <button className="submit-btn" onClick={handleFillSubmit}>
                  Kiểm tra
                </button>
              )}
            </div>
            {showResult && (
              <div className={`explanation ${isCorrect ? 'correct' : 'wrong'}`}>
                {isCorrect ? '🎉 Tuyệt vời!' : `💡 Đáp án đúng: ${q.answer}`}
              </div>
            )}
          </div>
        );
        
      case 'sort':
        return (
          <div className="question-card sort-card">
            <div className="question-type-badge">🎮 Phân loại từ</div>
            <h2 className="question-text">{q.instruction}</h2>
            <p className="sort-hint">👆 Chạm vào từ, rồi chạm vào ô để phân loại!</p>
            
            <div className="words-pool">
              {remainingWords.map((word, i) => (
                <div 
                  key={i} 
                  className={`draggable-word ${draggedWord === word ? 'selected' : ''}`}
                  onClick={() => handleWordClick(word)}
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.setData('word', word);
                    setDraggedWord(word);
                  }}
                >
                  {word}
                </div>
              ))}
            </div>
            
            <div className="sort-containers">
              <div 
                className={`sort-box present ${draggedWord ? 'active' : ''}`}
                onClick={() => handleBoxClick('present')}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  handleWordDrop(e.dataTransfer.getData('word'), 'present');
                }}
              >
                <h3>🌟 Hiện tại (Present)</h3>
                <div className="sorted-words">
                  {sortedPresent.map((w, i) => (
                    <span key={i} className={`sorted-word ${showResult ? (q.presentWords.includes(w) ? 'correct' : 'wrong') : ''}`}>{w}</span>
                  ))}
                </div>
              </div>
              
              <div 
                className={`sort-box past ${draggedWord ? 'active' : ''}`}
                onClick={() => handleBoxClick('past')}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  handleWordDrop(e.dataTransfer.getData('word'), 'past');
                }}
              >
                <h3>⏰ Quá khứ (Past)</h3>
                <div className="sorted-words">
                  {sortedPast.map((w, i) => (
                    <span key={i} className={`sorted-word ${showResult ? (q.pastWords.includes(w) ? 'correct' : 'wrong') : ''}`}>{w}</span>
                  ))}
                </div>
              </div>
            </div>
            
            {!showResult && remainingWords.length === 0 && (
              <button className="submit-btn" onClick={checkSortAnswer}>
                Kiểm tra
              </button>
            )}
            
            {showResult && (
              <div className={`explanation ${isCorrect ? 'correct' : 'wrong'}`}>
                {isCorrect ? '🎉 Xuất sắc!' : '💡 Hãy nhớ: yesterday, last..., ago → Quá khứ | every..., always, now → Hiện tại'}
              </div>
            )}
          </div>
        );
        
      case 'truefalse':
        return (
          <div className="question-card">
            <div className="question-type-badge">✅ Đúng hay Sai?</div>
            <h2 className="question-text">{q.statement}</h2>
            <div className="tf-buttons">
              <button
                className={`tf-btn true ${selectedAnswer === true ? (isCorrect ? 'correct' : 'wrong') : ''} ${showResult && q.correct === true ? 'correct' : ''}`}
                onClick={() => !showResult && handleAnswer(true, q.correct)}
                disabled={showResult}
              >
                ✓ Đúng
              </button>
              <button
                className={`tf-btn false ${selectedAnswer === false ? (isCorrect ? 'correct' : 'wrong') : ''} ${showResult && q.correct === false ? 'correct' : ''}`}
                onClick={() => !showResult && handleAnswer(false, q.correct)}
                disabled={showResult}
              >
                ✗ Sai
              </button>
            </div>
            {showResult && (
              <div className={`explanation ${isCorrect ? 'correct' : 'wrong'}`}>
                {isCorrect ? '🎉 ' : '💡 '}{q.explanation}
              </div>
            )}
          </div>
        );
        
      case 'picture':
        return (
          <div className="question-card">
            <div className="question-type-badge">🖼️ Nhìn hình chọn câu</div>
            <div className="picture-emoji">{q.image}</div>
            <h2 className="question-text">{q.question}</h2>
            <div className="options-grid vertical">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  className={`option-btn ${selectedAnswer === i ? (isCorrect ? 'correct' : 'wrong') : ''} ${showResult && i === q.correct ? 'correct' : ''}`}
                  onClick={() => !showResult && handleAnswer(i, q.correct)}
                  disabled={showResult}
                >
                  {opt}
                </button>
              ))}
            </div>
            {showResult && (
              <div className={`explanation ${isCorrect ? 'correct' : 'wrong'}`}>
                {isCorrect ? '🎉 ' : '💡 '}{q.explanation}
              </div>
            )}
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>English Tenses - Học Thì Tiếng Anh</title>
        <meta name="description" content="Ứng dụng học phân biệt thì hiện tại và quá khứ cho trẻ em" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦉</text></svg>" />
      </Head>

      <div className="app-container">
        <div className="floating-shapes">
          <span className="shape">📚</span>
          <span className="shape">✨</span>
          <span className="shape">🌟</span>
          <span className="shape">🎯</span>
          <span className="shape">🏆</span>
        </div>

        {showConfetti && (
          <div className="confetti-container">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  background: ['#f6d365', '#fda085', '#667eea', '#764ba2', '#84fab0'][Math.floor(Math.random() * 5)],
                  borderRadius: Math.random() > 0.5 ? '50%' : '0',
                  animationDelay: `${Math.random() * 0.5}s`
                }}
              />
            ))}
          </div>
        )}

        <div className="content">
          {screen === 'home' && (
            <div className="home-screen">
              <h1 className="app-title">🌈 English Tenses</h1>
              <p className="app-subtitle">Học phân biệt thì Hiện tại & Quá khứ</p>
              <div className="mascot">🦉</div>
              <div className="menu-buttons">
                <button className="menu-btn play" onClick={() => setScreen('game')}>
                  🎮 Chơi ngay!
                </button>
                <button className="menu-btn verbs" onClick={() => { setScreen('verbs'); setVerbMode('menu'); }}>
                  🔄 Học động từ BQT
                </button>
                <button className="menu-btn learn" onClick={() => setScreen('lesson')}>
                  📖 Học bài
                </button>
              </div>
            </div>
          )}

          {screen === 'game' && gameQuestions.length > 0 && (
            <>
              <div className="game-header">
                <button className="back-btn" onClick={() => setScreen('home')}>
                  ← Về
                </button>
                <div className="progress-info">
                  <span className="question-counter">
                    Câu {currentQuestion + 1}/{gameQuestions.length}
                  </span>
                  <span className="score-display">
                    ⭐ {score}
                  </span>
                  {streak >= 2 && (
                    <span className="streak-display">
                      🔥 {streak}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="progress-bar-container">
                <div 
                  className="progress-bar" 
                  style={{ width: `${((currentQuestion + 1) / gameQuestions.length) * 100}%` }}
                />
              </div>

              {renderQuestion()}

              {showResult && (
                <button className="next-btn" onClick={nextQuestion}>
                  {currentQuestion < gameQuestions.length - 1 ? 'Câu tiếp theo →' : 'Xem kết quả 🏆'}
                </button>
              )}
            </>
          )}

          {screen === 'verbs' && (
            <div className="verbs-screen">
              {renderVerbLearning()}
            </div>
          )}

          {screen === 'result' && (
            <div className="result-screen">
              <div className="result-card">
                <h2 className="result-title">🎉 Hoàn thành!</h2>
                <div className="result-emoji">
                  {score >= 8 ? '🏆' : score >= 5 ? '🌟' : '💪'}
                </div>
                <div className="stars-display">
                  {'⭐'.repeat(Math.min(3, Math.floor((score / gameQuestions.length) * 3)))}
                  {'☆'.repeat(3 - Math.min(3, Math.floor((score / gameQuestions.length) * 3)))}
                </div>
                <p className="result-score">
                  Điểm: <strong>{score}/{gameQuestions.length}</strong>
                </p>
                <p className="result-message">
                  {score >= 8 ? 'Xuất sắc! Con giỏi quá! 🎊' : 
                   score >= 5 ? 'Tốt lắm! Cố gắng thêm nhé! 💪' : 
                   'Cần ôn lại bài học nha! 📚'}
                </p>
                <div className="result-buttons">
                  <button className="menu-btn play" onClick={() => setScreen('game')}>
                    🔄 Chơi lại
                  </button>
                  <button className="menu-btn learn" onClick={() => setScreen('lesson')}>
                    📖 Ôn bài
                  </button>
                  <button className="menu-btn learn" onClick={() => setScreen('home')}>
                    🏠 Về nhà
                  </button>
                </div>
              </div>
            </div>
          )}

          {screen === 'lesson' && (
            <div className="lesson-screen">
              <button className="back-btn" onClick={() => setScreen('home')} style={{ marginBottom: 20 }}>
                ← Về trang chủ
              </button>
              
              <div className="lesson-card">
                <h2 className="lesson-title">📚 Bài học: Phân biệt Hiện tại & Quá khứ</h2>
                
                <div className="tense-box present">
                  <h3>🌟 Thì Hiện tại (Present Simple)</h3>
                  <p style={{ marginBottom: 15, color: '#4a5568' }}>
                    Dùng khi nói về <strong>thói quen, sự thật, việc lặp đi lặp lại</strong>
                  </p>
                  <p style={{ marginBottom: 10, fontWeight: 600 }}>Từ nhận biết:</p>
                  <div className="signal-words">
                    {TIME_SIGNALS.present.map((w, i) => (
                      <span key={i} className="signal-word present">{w}</span>
                    ))}
                  </div>
                  <div className="examples">
                    <p className="example-sentence">✓ I <strong>go</strong> to school every day.</p>
                    <p className="example-sentence">✓ She <strong>likes</strong> ice cream.</p>
                    <p className="example-sentence">✓ The sun <strong>rises</strong> in the East.</p>
                  </div>
                </div>
                
                <div className="tense-box past">
                  <h3>⏰ Thì Quá khứ (Past Simple)</h3>
                  <p style={{ marginBottom: 15, color: '#4a5568' }}>
                    Dùng khi nói về <strong>việc đã xảy ra và kết thúc trong quá khứ</strong>
                  </p>
                  <p style={{ marginBottom: 10, fontWeight: 600 }}>Từ nhận biết:</p>
                  <div className="signal-words">
                    {TIME_SIGNALS.past.map((w, i) => (
                      <span key={i} className="signal-word past">{w}</span>
                    ))}
                  </div>
                  <div className="examples">
                    <p className="example-sentence">✓ I <strong>went</strong> to the park yesterday.</p>
                    <p className="example-sentence">✓ She <strong>watched</strong> TV last night.</p>
                    <p className="example-sentence">✓ They <strong>played</strong> football last Sunday.</p>
                  </div>
                </div>
              </div>
              
              <div className="lesson-card">
                <h2 className="lesson-title">🔄 Động từ bất quy tắc</h2>
                <p style={{ marginBottom: 15, color: '#718096' }}>
                  Những động từ này không thêm -ed mà đổi hẳn sang dạng khác
                </p>
                <table className="irregular-table">
                  <thead>
                    <tr>
                      <th>Hiện tại</th>
                      <th>Quá khứ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {IRREGULAR_VERBS.map((v, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 600, color: '#38a169' }}>{v.base}</td>
                        <td style={{ fontWeight: 600, color: '#dd6b20' }}>{v.past}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <button className="menu-btn play" onClick={() => setScreen('game')} style={{ width: '100%', marginTop: 10 }}>
                🎮 Luyện tập ngay!
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
