// =====================================================
// 📝 FILE CÂU HỎI - CHỈNH SỬA Ở ĐÂY ĐỂ CẬP NHẬT NỘI DUNG
// Tổng: 40+ câu trắc nghiệm, 30+ câu điền từ, 10 câu kéo thả,
//       25 câu đúng/sai, 25+ câu nhìn hình, 40 động từ bất quy tắc
// =====================================================

// Danh sách câu hỏi trắc nghiệm
export const MULTIPLE_CHOICE_QUESTIONS = [
  // === NHÓM 1: Câu với "every day / every morning / every night" ===
  {
    question: 'I ___ to school every day.',
    options: ['go', 'went', 'going'],
    correct: 0,
    explanation: '"Every day" = mỗi ngày → thì hiện tại "go"'
  },
  {
    question: 'My cat ___ milk every morning.',
    options: ['drinks', 'drank', 'drinking'],
    correct: 0,
    explanation: '"Every morning" = mỗi sáng → hiện tại "drinks"'
  },
  {
    question: 'He ___ his homework every day.',
    options: ['did', 'does', 'doing'],
    correct: 1,
    explanation: '"Every day" = mỗi ngày → hiện tại "does"'
  },
  {
    question: 'Mom ___ dinner every evening.',
    options: ['cooked', 'cooks', 'cooking'],
    correct: 1,
    explanation: '"Every evening" = mỗi tối → hiện tại "cooks"'
  },
  {
    question: 'She ___ her teeth every night.',
    options: ['brush', 'brushes', 'brushed'],
    correct: 1,
    explanation: '"Every night" = mỗi tối → hiện tại "brushes" (she + es)'
  },
  {
    question: 'Dad ___ to work every morning.',
    options: ['drive', 'drives', 'drove'],
    correct: 1,
    explanation: '"Every morning" = mỗi sáng → hiện tại "drives"'
  },
  {
    question: 'The baby ___ a lot every day.',
    options: ['cry', 'cries', 'cried'],
    correct: 1,
    explanation: '"Every day" = mỗi ngày → hiện tại "cries" (y → ies)'
  },
  {
    question: 'My brother ___ video games every weekend.',
    options: ['plays', 'played', 'play'],
    correct: 0,
    explanation: '"Every weekend" = mỗi cuối tuần → hiện tại "plays"'
  },

  // === NHÓM 2: Câu với "yesterday / last night / last week" ===
  {
    question: 'She ___ a book yesterday.',
    options: ['reads', 'read', 'reading'],
    correct: 1,
    explanation: '"Yesterday" = hôm qua → thì quá khứ "read"'
  },
  {
    question: 'They ___ football last Sunday.',
    options: ['play', 'played', 'plays'],
    correct: 1,
    explanation: '"Last Sunday" = Chủ nhật tuần trước → quá khứ "played"'
  },
  {
    question: 'We ___ a movie last night.',
    options: ['watch', 'watched', 'watches'],
    correct: 1,
    explanation: '"Last night" = tối qua → quá khứ "watched"'
  },
  {
    question: 'I ___ my grandma last weekend.',
    options: ['visit', 'visited', 'visits'],
    correct: 1,
    explanation: '"Last weekend" = cuối tuần trước → quá khứ "visited"'
  },
  {
    question: 'We ___ to the zoo last month.',
    options: ['go', 'went', 'goes'],
    correct: 1,
    explanation: '"Last month" = tháng trước → quá khứ "went"'
  },
  {
    question: 'She ___ a cake yesterday.',
    options: ['makes', 'make', 'made'],
    correct: 2,
    explanation: '"Yesterday" = hôm qua → quá khứ "made" (make → made)'
  },
  {
    question: 'Tom ___ his bike last week.',
    options: ['rides', 'ride', 'rode'],
    correct: 2,
    explanation: '"Last week" = tuần trước → quá khứ "rode" (ride → rode)'
  },
  {
    question: 'I ___ a new toy yesterday.',
    options: ['buy', 'bought', 'buys'],
    correct: 1,
    explanation: '"Yesterday" = hôm qua → quá khứ "bought" (buy → bought)'
  },
  {
    question: 'They ___ to music last night.',
    options: ['listen', 'listened', 'listens'],
    correct: 1,
    explanation: '"Last night" = tối qua → quá khứ "listened"'
  },
  {
    question: 'Dad ___ the car yesterday.',
    options: ['washes', 'wash', 'washed'],
    correct: 2,
    explanation: '"Yesterday" = hôm qua → quá khứ "washed"'
  },
  {
    question: 'My sister ___ a letter last Monday.',
    options: ['writes', 'wrote', 'write'],
    correct: 1,
    explanation: '"Last Monday" = thứ Hai tuần trước → quá khứ "wrote"'
  },

  // === NHÓM 3: Câu với "always / usually / often / sometimes" ===
  {
    question: 'Birds ___ in the sky.',
    options: ['fly', 'flew', 'flying'],
    correct: 0,
    explanation: 'Sự thật hiển nhiên → hiện tại "fly"'
  },
  {
    question: 'I always ___ breakfast at 7 AM.',
    options: ['eat', 'ate', 'eats'],
    correct: 0,
    explanation: '"Always" = luôn luôn → hiện tại "eat"'
  },
  {
    question: 'She usually ___ to bed early.',
    options: ['go', 'goes', 'went'],
    correct: 1,
    explanation: '"Usually" = thường thường → hiện tại "goes" (she + es)'
  },
  {
    question: 'They often ___ in the park.',
    options: ['run', 'runs', 'ran'],
    correct: 0,
    explanation: '"Often" = thường xuyên → hiện tại "run"'
  },
  {
    question: 'He sometimes ___ his room.',
    options: ['clean', 'cleans', 'cleaned'],
    correct: 1,
    explanation: '"Sometimes" = đôi khi → hiện tại "cleans" (he + s)'
  },
  {
    question: 'The sun ___ in the East.',
    options: ['rise', 'rises', 'rose'],
    correct: 1,
    explanation: 'Sự thật tự nhiên → hiện tại "rises"'
  },
  {
    question: 'Water ___ at 100 degrees.',
    options: ['boil', 'boils', 'boiled'],
    correct: 1,
    explanation: 'Sự thật khoa học → hiện tại "boils"'
  },
  {
    question: 'Dogs ___ bones.',
    options: ['like', 'likes', 'liked'],
    correct: 0,
    explanation: 'Sự thật chung → hiện tại "like" (dogs = they)'
  },

  // === NHÓM 4: Câu với "ago / this morning / in 2023" ===
  {
    question: 'I ___ a sandwich two hours ago.',
    options: ['eat', 'ate', 'eats'],
    correct: 1,
    explanation: '"Ago" = trước đây → quá khứ "ate"'
  },
  {
    question: 'She ___ her keys three days ago.',
    options: ['loses', 'lose', 'lost'],
    correct: 2,
    explanation: '"Ago" = trước đây → quá khứ "lost" (lose → lost)'
  },
  {
    question: 'We ___ to London in 2022.',
    options: ['travel', 'traveled', 'travels'],
    correct: 1,
    explanation: '"In 2022" = năm cụ thể trong quá khứ → "traveled"'
  },
  {
    question: 'Tom ___ his first word a year ago.',
    options: ['say', 'says', 'said'],
    correct: 2,
    explanation: '"A year ago" = một năm trước → quá khứ "said"'
  },
  {
    question: 'I ___ breakfast this morning.',
    options: ['have', 'has', 'had'],
    correct: 2,
    explanation: '"This morning" (đã qua) → quá khứ "had"'
  },
  {
    question: 'The movie ___ at 8 PM yesterday.',
    options: ['start', 'starts', 'started'],
    correct: 2,
    explanation: '"Yesterday" = hôm qua → quá khứ "started"'
  },

  // === NHÓM 5: Động từ bất quy tắc phổ biến ===
  {
    question: 'I ___ a strange dream last night.',
    options: ['have', 'has', 'had'],
    correct: 2,
    explanation: '"Last night" → quá khứ "had" (have → had)'
  },
  {
    question: 'She ___ me a gift yesterday.',
    options: ['give', 'gives', 'gave'],
    correct: 2,
    explanation: '"Yesterday" → quá khứ "gave" (give → gave)'
  },
  {
    question: 'We ___ a bird in the garden this morning.',
    options: ['see', 'sees', 'saw'],
    correct: 2,
    explanation: '"This morning" (đã qua) → quá khứ "saw" (see → saw)'
  },
  {
    question: 'He ___ home late last night.',
    options: ['come', 'comes', 'came'],
    correct: 2,
    explanation: '"Last night" → quá khứ "came" (come → came)'
  },
  {
    question: 'I ___ my phone yesterday.',
    options: ['find', 'found', 'finds'],
    correct: 1,
    explanation: '"Yesterday" → quá khứ "found" (find → found)'
  },
  {
    question: 'The children ___ in the pool last summer.',
    options: ['swim', 'swam', 'swims'],
    correct: 1,
    explanation: '"Last summer" → quá khứ "swam" (swim → swam)'
  },
  {
    question: 'Mom ___ us a story yesterday.',
    options: ['tell', 'told', 'tells'],
    correct: 1,
    explanation: '"Yesterday" → quá khứ "told" (tell → told)'
  },
  {
    question: 'I ___ a glass of water an hour ago.',
    options: ['drink', 'drank', 'drinks'],
    correct: 1,
    explanation: '"An hour ago" → quá khứ "drank" (drink → drank)'
  },
  {
    question: 'She ___ a beautiful song last night.',
    options: ['sing', 'sang', 'sings'],
    correct: 1,
    explanation: '"Last night" → quá khứ "sang" (sing → sang)'
  },
  {
    question: 'Dad ___ the newspaper every morning.',
    options: ['read', 'reads', 'reading'],
    correct: 1,
    explanation: '"Every morning" → hiện tại "reads" (he + s)'
  },
];

// Danh sách câu hỏi điền từ
export const FILL_IN_QUESTIONS = [
  // === Quá khứ đơn - Động từ có quy tắc ===
  {
    sentence: 'They ___ (play) games yesterday.',
    answer: 'played',
    hint: '"Yesterday" = hôm qua! Thêm -ed',
  },
  {
    sentence: 'She ___ (watch) TV last night.',
    answer: 'watched',
    hint: '"Last night" = tối qua! Thêm -ed',
  },
  {
    sentence: 'I ___ (walk) to school yesterday.',
    answer: 'walked',
    hint: '"Yesterday" = hôm qua! Thêm -ed',
  },
  {
    sentence: 'Mom ___ (cook) dinner last evening.',
    answer: 'cooked',
    hint: '"Last evening" = tối hôm qua!',
  },
  {
    sentence: 'We ___ (visit) grandma last weekend.',
    answer: 'visited',
    hint: '"Last weekend" = cuối tuần trước!',
  },
  {
    sentence: 'He ___ (help) his mom yesterday.',
    answer: 'helped',
    hint: '"Yesterday" = hôm qua!',
  },
  {
    sentence: 'The baby ___ (cry) a lot yesterday.',
    answer: 'cried',
    hint: '"Yesterday"! cry → cried (y → ied)',
  },
  {
    sentence: 'She ___ (study) English last year.',
    answer: 'studied',
    hint: '"Last year"! study → studied (y → ied)',
  },
  {
    sentence: 'They ___ (dance) at the party last night.',
    answer: 'danced',
    hint: '"Last night"! dance → danced',
  },
  {
    sentence: 'I ___ (clean) my room yesterday.',
    answer: 'cleaned',
    hint: '"Yesterday"! Thêm -ed',
  },

  // === Quá khứ đơn - Động từ bất quy tắc ===
  {
    sentence: 'I ___ (eat) breakfast this morning.',
    answer: 'ate',
    hint: '"This morning" đã qua! eat → ate',
  },
  {
    sentence: 'We ___ (see) a rainbow last week.',
    answer: 'saw',
    hint: '"Last week"! see → saw',
  },
  {
    sentence: 'She ___ (go) to the park yesterday.',
    answer: 'went',
    hint: '"Yesterday"! go → went',
  },
  {
    sentence: 'I ___ (have) a good dream last night.',
    answer: 'had',
    hint: '"Last night"! have → had',
  },
  {
    sentence: 'He ___ (come) home late yesterday.',
    answer: 'came',
    hint: '"Yesterday"! come → came',
  },
  {
    sentence: 'Mom ___ (make) a cake last Sunday.',
    answer: 'made',
    hint: '"Last Sunday"! make → made',
  },
  {
    sentence: 'We ___ (take) many photos last holiday.',
    answer: 'took',
    hint: '"Last holiday"! take → took',
  },
  {
    sentence: 'I ___ (get) a new bike last month.',
    answer: 'got',
    hint: '"Last month"! get → got',
  },
  {
    sentence: 'The children ___ (run) in the park yesterday.',
    answer: 'ran',
    hint: '"Yesterday"! run → ran',
  },
  {
    sentence: 'She ___ (swim) in the sea last summer.',
    answer: 'swam',
    hint: '"Last summer"! swim → swam',
  },
  {
    sentence: 'Dad ___ (drive) to work yesterday.',
    answer: 'drove',
    hint: '"Yesterday"! drive → drove',
  },
  {
    sentence: 'I ___ (write) a letter last week.',
    answer: 'wrote',
    hint: '"Last week"! write → wrote',
  },
  {
    sentence: 'She ___ (sing) a song at the party.',
    answer: 'sang',
    hint: 'Party đã kết thúc! sing → sang',
  },
  {
    sentence: 'We ___ (drink) juice this morning.',
    answer: 'drank',
    hint: '"This morning" đã qua! drink → drank',
  },
  {
    sentence: 'He ___ (give) me a present yesterday.',
    answer: 'gave',
    hint: '"Yesterday"! give → gave',
  },

  // === Hiện tại đơn ===
  {
    sentence: 'She ___ (go) to school every day.',
    answer: 'goes',
    hint: '"Every day"! she → goes (thêm es)',
  },
  {
    sentence: 'My dog ___ (like) bones.',
    answer: 'likes',
    hint: 'Sự thật luôn đúng! Thêm -s',
  },
  {
    sentence: 'He ___ (drink) water every day.',
    answer: 'drinks',
    hint: '"Every day"! he → drinks (thêm s)',
  },
  {
    sentence: 'The sun ___ (rise) in the East.',
    answer: 'rises',
    hint: 'Sự thật tự nhiên! Thêm -s',
  },
  {
    sentence: 'She ___ (brush) her teeth every night.',
    answer: 'brushes',
    hint: '"Every night"! brush → brushes (thêm es)',
  },
  {
    sentence: 'My mom ___ (cook) dinner every day.',
    answer: 'cooks',
    hint: '"Every day"! Thêm -s',
  },
  {
    sentence: 'He ___ (watch) TV every evening.',
    answer: 'watches',
    hint: '"Every evening"! watch → watches (thêm es)',
  },
  {
    sentence: 'She ___ (study) English every day.',
    answer: 'studies',
    hint: '"Every day"! study → studies (y → ies)',
  },
  {
    sentence: 'The baby ___ (cry) every night.',
    answer: 'cries',
    hint: '"Every night"! cry → cries (y → ies)',
  },
  {
    sentence: 'He always ___ (do) his homework.',
    answer: 'does',
    hint: '"Always"! he → does',
  },
];

// Danh sách câu hỏi kéo thả phân loại
export const SORT_QUESTIONS = [
  {
    instruction: 'Kéo các từ thời gian vào đúng cột!',
    words: ['yesterday', 'every day', 'last week', 'always', 'ago', 'now'],
    presentWords: ['every day', 'always', 'now'],
    pastWords: ['yesterday', 'last week', 'ago']
  },
  {
    instruction: 'Phân loại các động từ!',
    words: ['played', 'eat', 'went', 'like', 'watched', 'run'],
    presentWords: ['eat', 'like', 'run'],
    pastWords: ['played', 'went', 'watched']
  },
  {
    instruction: 'Kéo từ vào đúng thì!',
    words: ['usually', 'last year', 'often', 'two days ago', 'sometimes', 'last Monday'],
    presentWords: ['usually', 'often', 'sometimes'],
    pastWords: ['last year', 'two days ago', 'last Monday']
  },
  {
    instruction: 'Phân loại từ thời gian!',
    words: ['every morning', 'last night', 'every week', 'yesterday', 'last month', 'every evening'],
    presentWords: ['every morning', 'every week', 'every evening'],
    pastWords: ['last night', 'yesterday', 'last month']
  },
  {
    instruction: 'Động từ nào ở thì nào?',
    words: ['sang', 'drink', 'ate', 'sleep', 'came', 'walk'],
    presentWords: ['drink', 'sleep', 'walk'],
    pastWords: ['sang', 'ate', 'came']
  },
  {
    instruction: 'Phân loại các từ!',
    words: ['last summer', 'every night', 'a week ago', 'always', 'in 2020', 'usually'],
    presentWords: ['every night', 'always', 'usually'],
    pastWords: ['last summer', 'a week ago', 'in 2020']
  },
  {
    instruction: 'Kéo động từ vào đúng cột!',
    words: ['made', 'make', 'took', 'take', 'gave', 'give'],
    presentWords: ['make', 'take', 'give'],
    pastWords: ['made', 'took', 'gave']
  },
  {
    instruction: 'Phân loại động từ!',
    words: ['wrote', 'write', 'saw', 'see', 'had', 'have'],
    presentWords: ['write', 'see', 'have'],
    pastWords: ['wrote', 'saw', 'had']
  },
  {
    instruction: 'Từ nào thuộc thì nào?',
    words: ['last Friday', 'every Sunday', 'three years ago', 'often', 'yesterday morning', 'sometimes'],
    presentWords: ['every Sunday', 'often', 'sometimes'],
    pastWords: ['last Friday', 'three years ago', 'yesterday morning']
  },
  {
    instruction: 'Phân loại động từ quá khứ và hiện tại!',
    words: ['swam', 'swim', 'ran', 'run', 'drank', 'drink'],
    presentWords: ['swim', 'run', 'drink'],
    pastWords: ['swam', 'ran', 'drank']
  },
];

// Danh sách câu hỏi đúng/sai
export const TRUE_FALSE_QUESTIONS = [
  // === Về từ nhận biết thì ===
  {
    statement: '"Yesterday" dùng với thì quá khứ',
    correct: true,
    explanation: 'Đúng rồi! "Yesterday" = hôm qua → luôn dùng quá khứ'
  },
  {
    statement: '"Every day" dùng với thì quá khứ',
    correct: false,
    explanation: 'Sai rồi! "Every day" = mỗi ngày → dùng hiện tại'
  },
  {
    statement: '"Last night" dùng với thì hiện tại',
    correct: false,
    explanation: 'Sai! "Last night" = tối qua → quá khứ'
  },
  {
    statement: '"Always" dùng với thì hiện tại',
    correct: true,
    explanation: 'Đúng! "Always" = luôn luôn → hiện tại'
  },
  {
    statement: '"Ago" là từ nhận biết thì quá khứ',
    correct: true,
    explanation: 'Đúng! "Ago" = trước đây → luôn đi với quá khứ'
  },
  {
    statement: '"Usually" dùng với thì quá khứ',
    correct: false,
    explanation: 'Sai! "Usually" = thường thường → hiện tại'
  },
  {
    statement: '"Last week" dùng với thì quá khứ',
    correct: true,
    explanation: 'Đúng! "Last week" = tuần trước → quá khứ'
  },
  {
    statement: '"Every morning" dùng với thì hiện tại',
    correct: true,
    explanation: 'Đúng! "Every morning" = mỗi sáng → hiện tại'
  },
  {
    statement: '"Sometimes" là từ nhận biết thì quá khứ',
    correct: false,
    explanation: 'Sai! "Sometimes" = đôi khi → hiện tại'
  },
  {
    statement: '"In 2020" dùng với thì quá khứ',
    correct: true,
    explanation: 'Đúng! Năm cụ thể trong quá khứ → quá khứ'
  },

  // === Về cách chia động từ ===
  {
    statement: '"Played" là dạng quá khứ của "play"',
    correct: true,
    explanation: 'Đúng! Thêm -ed vào cuối → played'
  },
  {
    statement: '"Go - went" là động từ bất quy tắc',
    correct: true,
    explanation: 'Đúng! Go không thêm -ed mà đổi thành went'
  },
  {
    statement: 'Thêm -ed vào "eat" thành "eated"',
    correct: false,
    explanation: 'Sai! "Eat" là động từ bất quy tắc → "ate"'
  },
  {
    statement: '"Watched" là dạng quá khứ của "watch"',
    correct: true,
    explanation: 'Đúng! watch + ed = watched'
  },
  {
    statement: '"See - saw" là động từ bất quy tắc',
    correct: true,
    explanation: 'Đúng! See → saw (không thêm -ed)'
  },
  {
    statement: 'Quá khứ của "have" là "haved"',
    correct: false,
    explanation: 'Sai! "Have" là động từ bất quy tắc → "had"'
  },
  {
    statement: 'Quá khứ của "make" là "made"',
    correct: true,
    explanation: 'Đúng! Make → made'
  },
  {
    statement: 'Quá khứ của "come" là "comed"',
    correct: false,
    explanation: 'Sai! Come là động từ bất quy tắc → came'
  },
  {
    statement: '"Studied" là dạng quá khứ của "study"',
    correct: true,
    explanation: 'Đúng! study → studied (y → ied)'
  },
  {
    statement: 'Quá khứ của "swim" là "swimmed"',
    correct: false,
    explanation: 'Sai! Swim là động từ bất quy tắc → swam'
  },

  // === Về quy tắc thì ===
  {
    statement: 'Thì hiện tại dùng để nói về thói quen',
    correct: true,
    explanation: 'Đúng! Thói quen, việc lặp đi lặp lại → hiện tại'
  },
  {
    statement: 'Thì quá khứ dùng để nói về việc xảy ra hôm qua',
    correct: true,
    explanation: 'Đúng! Việc đã xảy ra và kết thúc → quá khứ'
  },
  {
    statement: 'Sự thật khoa học dùng thì quá khứ',
    correct: false,
    explanation: 'Sai! Sự thật khoa học luôn đúng → hiện tại'
  },
  {
    statement: 'Với "she/he", động từ hiện tại thêm -s hoặc -es',
    correct: true,
    explanation: 'Đúng! She goes, He watches, It runs...'
  },
  {
    statement: 'Động từ quá khứ có quy tắc thêm -ed',
    correct: true,
    explanation: 'Đúng! play → played, watch → watched'
  },
];

// Danh sách câu hỏi nhìn hình
export const PICTURE_QUESTIONS = [
  // === Thiên nhiên & Sự thật ===
  {
    image: '🌅',
    question: 'Chọn câu đúng cho hình này:',
    options: ['The sun rises every day.', 'The sun rised yesterday.'],
    correct: 0,
    explanation: 'Mặt trời mọc mỗi ngày → sự thật → hiện tại!'
  },
  {
    image: '🌙',
    question: 'Mặt trăng xuất hiện mỗi đêm:',
    options: ['The moon appears every night.', 'The moon appeared every night.'],
    correct: 0,
    explanation: '"Mỗi đêm" → sự thật → hiện tại!'
  },
  {
    image: '🌧️',
    question: 'Hôm qua trời mưa:',
    options: ['It rains yesterday.', 'It rained yesterday.'],
    correct: 1,
    explanation: '"Hôm qua" → quá khứ → rained!'
  },

  // === Sinh hoạt hằng ngày ===
  {
    image: '📚',
    question: 'Lisa đọc sách mỗi tối:',
    options: ['Lisa reads books every night.', 'Lisa read books every night.'],
    correct: 0,
    explanation: '"Mỗi tối" → thói quen → hiện tại reads!'
  },
  {
    image: '🦷',
    question: 'Tom đánh răng mỗi sáng:',
    options: ['Tom brushes his teeth every morning.', 'Tom brushed his teeth every morning.'],
    correct: 0,
    explanation: '"Mỗi sáng" → thói quen → hiện tại!'
  },
  {
    image: '🛏️',
    question: 'Bé ngủ lúc 9 giờ mỗi tối:',
    options: ['The baby sleeps at 9 PM every night.', 'The baby slept at 9 PM every night.'],
    correct: 0,
    explanation: '"Mỗi tối" → thói quen → hiện tại!'
  },

  // === Sự kiện quá khứ ===
  {
    image: '🎂',
    question: 'Hôm qua là sinh nhật Tom:',
    options: ['Tom has a party.', 'Tom had a party.'],
    correct: 1,
    explanation: '"Hôm qua" → quá khứ → had!'
  },
  {
    image: '🏊',
    question: 'Tuần trước Tom đi bơi:',
    options: ['Tom swims last week.', 'Tom swam last week.'],
    correct: 1,
    explanation: '"Last week" → quá khứ, swim → swam!'
  },
  {
    image: '🎁',
    question: 'Hôm qua mẹ tặng quà cho bé:',
    options: ['Mom gives a gift yesterday.', 'Mom gave a gift yesterday.'],
    correct: 1,
    explanation: '"Yesterday" → quá khứ, give → gave!'
  },
  {
    image: '✈️',
    question: 'Năm ngoái gia đình đi du lịch:',
    options: ['The family travels last year.', 'The family traveled last year.'],
    correct: 1,
    explanation: '"Last year" → quá khứ!'
  },
  {
    image: '🎬',
    question: 'Tối qua chúng tôi xem phim:',
    options: ['We watch a movie last night.', 'We watched a movie last night.'],
    correct: 1,
    explanation: '"Last night" → quá khứ!'
  },

  // === Thói quen ===
  {
    image: '🍎',
    question: 'Mary ăn táo mỗi ngày:',
    options: ['Mary eats an apple every day.', 'Mary ate an apple every day.'],
    correct: 0,
    explanation: '"Every day" → thói quen → hiện tại eats!'
  },
  {
    image: '🚌',
    question: 'Học sinh đi xe buýt mỗi ngày:',
    options: ['Students take the bus every day.', 'Students took the bus every day.'],
    correct: 0,
    explanation: '"Every day" → thói quen → hiện tại!'
  },
  {
    image: '🏃',
    question: 'Bố chạy bộ mỗi sáng:',
    options: ['Dad runs every morning.', 'Dad ran every morning.'],
    correct: 0,
    explanation: '"Every morning" → thói quen → hiện tại!'
  },
  {
    image: '🎮',
    question: 'Anh trai chơi game mỗi cuối tuần:',
    options: ['My brother plays games every weekend.', 'My brother played games every weekend.'],
    correct: 0,
    explanation: '"Every weekend" → thói quen → hiện tại!'
  },

  // === Động vật ===
  {
    image: '🐕',
    question: 'Con chó sủa mỗi đêm:',
    options: ['The dog barks every night.', 'The dog barked every night.'],
    correct: 0,
    explanation: '"Every night" → thói quen → hiện tại!'
  },
  {
    image: '🐱',
    question: 'Hôm qua con mèo bắt được chuột:',
    options: ['The cat catches a mouse yesterday.', 'The cat caught a mouse yesterday.'],
    correct: 1,
    explanation: '"Yesterday" → quá khứ, catch → caught!'
  },
  {
    image: '🐦',
    question: 'Chim hót mỗi sáng:',
    options: ['Birds sing every morning.', 'Birds sang every morning.'],
    correct: 0,
    explanation: '"Every morning" → thói quen → hiện tại!'
  },
  {
    image: '🐟',
    question: 'Cá bơi trong nước:',
    options: ['Fish swim in water.', 'Fish swam in water.'],
    correct: 0,
    explanation: 'Sự thật tự nhiên → hiện tại!'
  },

  // === Bữa ăn ===
  {
    image: '🍳',
    question: 'Mẹ nấu bữa sáng mỗi ngày:',
    options: ['Mom cooks breakfast every day.', 'Mom cooked breakfast every day.'],
    correct: 0,
    explanation: '"Every day" → thói quen → hiện tại!'
  },
  {
    image: '🍕',
    question: 'Tối qua chúng tôi ăn pizza:',
    options: ['We eat pizza last night.', 'We ate pizza last night.'],
    correct: 1,
    explanation: '"Last night" → quá khứ, eat → ate!'
  },
  {
    image: '🍦',
    question: 'Hôm qua bé ăn kem:',
    options: ['The baby eats ice cream yesterday.', 'The baby ate ice cream yesterday.'],
    correct: 1,
    explanation: '"Yesterday" → quá khứ!'
  },

  // === Học tập ===
  {
    image: '✏️',
    question: 'Học sinh viết bài mỗi ngày:',
    options: ['Students write every day.', 'Students wrote every day.'],
    correct: 0,
    explanation: '"Every day" → thói quen → hiện tại!'
  },
  {
    image: '📝',
    question: 'Hôm qua tôi làm bài kiểm tra:',
    options: ['I take a test yesterday.', 'I took a test yesterday.'],
    correct: 1,
    explanation: '"Yesterday" → quá khứ, take → took!'
  },
  {
    image: '🎒',
    question: 'Em bé đi học mỗi ngày:',
    options: ['The child goes to school every day.', 'The child went to school every day.'],
    correct: 0,
    explanation: '"Every day" → thói quen → hiện tại!'
  },
];

// Danh sách từ nhận biết thì
export const TIME_SIGNALS = {
  present: ['every day', 'always', 'usually', 'sometimes', 'often', 'now', 'every week', 'every morning', 'every night', 'every Sunday', 'every month'],
  past: ['yesterday', 'last week', 'last night', 'ago', 'last year', 'last Sunday', 'last month', 'last Monday', 'in 2020', 'this morning', 'yesterday morning']
};

// Danh sách động từ bất quy tắc
export const IRREGULAR_VERBS = [
  { base: 'go', past: 'went' },
  { base: 'eat', past: 'ate' },
  { base: 'see', past: 'saw' },
  { base: 'have', past: 'had' },
  { base: 'come', past: 'came' },
  { base: 'make', past: 'made' },
  { base: 'take', past: 'took' },
  { base: 'get', past: 'got' },
  { base: 'run', past: 'ran' },
  { base: 'swim', past: 'swam' },
  { base: 'drink', past: 'drank' },
  { base: 'sing', past: 'sang' },
  { base: 'write', past: 'wrote' },
  { base: 'read', past: 'read' },
  { base: 'give', past: 'gave' },
  { base: 'find', past: 'found' },
  { base: 'tell', past: 'told' },
  { base: 'say', past: 'said' },
  { base: 'buy', past: 'bought' },
  { base: 'bring', past: 'brought' },
  { base: 'think', past: 'thought' },
  { base: 'catch', past: 'caught' },
  { base: 'teach', past: 'taught' },
  { base: 'sit', past: 'sat' },
  { base: 'stand', past: 'stood' },
  { base: 'sleep', past: 'slept' },
  { base: 'keep', past: 'kept' },
  { base: 'leave', past: 'left' },
  { base: 'lose', past: 'lost' },
  { base: 'drive', past: 'drove' },
  { base: 'ride', past: 'rode' },
  { base: 'fly', past: 'flew' },
  { base: 'grow', past: 'grew' },
  { base: 'know', past: 'knew' },
  { base: 'throw', past: 'threw' },
  { base: 'begin', past: 'began' },
  { base: 'break', past: 'broke' },
  { base: 'choose', past: 'chose' },
  { base: 'speak', past: 'spoke' },
  { base: 'wear', past: 'wore' },
];

// =====================================================
// 💡 HƯỚNG DẪN THÊM CÂU HỎI MỚI:
// 
// 1. Câu trắc nghiệm: Thêm vào MULTIPLE_CHOICE_QUESTIONS
//    {
//      question: 'Câu hỏi có chỗ trống ___',
//      options: ['đáp án 1', 'đáp án 2', 'đáp án 3'],
//      correct: 0,  // 0 = đáp án 1, 1 = đáp án 2, 2 = đáp án 3
//      explanation: 'Giải thích'
//    }
//
// 2. Câu điền từ: Thêm vào FILL_IN_QUESTIONS
//    {
//      sentence: 'Câu có chỗ trống ___ (động từ gốc)',
//      answer: 'đáp án đúng',
//      hint: 'Gợi ý cho bé'
//    }
//
// 3. Câu đúng/sai: Thêm vào TRUE_FALSE_QUESTIONS
//    {
//      statement: 'Phát biểu cần kiểm tra',
//      correct: true hoặc false,
//      explanation: 'Giải thích'
//    }
//
// 4. Câu kéo thả: Thêm vào SORT_QUESTIONS
//    {
//      instruction: 'Hướng dẫn',
//      words: ['từ 1', 'từ 2', 'từ 3', 'từ 4', 'từ 5', 'từ 6'],
//      presentWords: ['từ thuộc hiện tại'],
//      pastWords: ['từ thuộc quá khứ']
//    }
//
// 5. Câu nhìn hình: Thêm vào PICTURE_QUESTIONS
//    {
//      image: '🎨',  // emoji
//      question: 'Câu hỏi về hình',
//      options: ['Câu 1', 'Câu 2'],
//      correct: 0,  // 0 hoặc 1
//      explanation: 'Giải thích'
//    }
// =====================================================
