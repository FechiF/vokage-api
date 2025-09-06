const questions = [
  {
    word: 'abate',
    question: "What does the word 'abate' most nearly mean?",
    choices: ['to lessen', 'to grow stronger', 'to celebrate', 'to delay'],
    answer: 'to lessen',
    explanation: 'Abate means to lessen or reduce.',
    clscore: 8,
  },
  {
    word: 'abhor',
    question: "'Abhor' is closest in meaning to:",
    choices: ['to hate', 'to respect', 'to allow', 'to admire'],
    answer: 'to hate',
    explanation: 'Abhor means to hate deeply.',
    clscore: 8,
  },
  {
    word: 'abominate',
    question:
      'Fill in the blank: She came to ___ the cruelty she once ignored.',
    choices: ['abominate', 'admire', 'welcome', 'respect'],
    answer: 'abominate',
    explanation: 'Abominate means to strongly hate or detest.',
    clscore: 6,
  },
  {
    word: 'aborigine',
    question: "What does 'aborigine' refer to?",
    choices: ['original inhabitant', 'visitor', 'tourist', 'settler'],
    answer: 'original inhabitant',
    explanation: 'Aborigine refers to the original inhabitant of a land.',
    clscore: 6,
  },
  {
    word: 'absolve',
    question: 'The judge decided to ___ him of all guilt.',
    choices: ['absolve', 'punish', 'accuse', 'blame'],
    answer: 'absolve',
    explanation: 'Absolve means to pardon or set free from guilt.',
    clscore: 6,
  },
  {
    word: 'accentuated',
    question: "'Accentuated' is best described as:",
    choices: ['emphasized', 'hidden', 'ignored', 'lessened'],
    answer: 'emphasized',
    explanation: 'Accentuated means highlighted or emphasized.',
    clscore: 6,
  },
  {
    word: 'accolade',
    question:
      'Which word best fits: The scientist received an ___ for her discoveries.',
    choices: ['accolade', 'insult', 'rejection', 'complaint'],
    answer: 'accolade',
    explanation: 'Accolade means an honor or award.',
    clscore: 8,
  },
  {
    word: 'admonish',
    question: "What does 'admonish' mean?",
    choices: ['to warn', 'to praise', 'to ignore', 'to assist'],
    answer: 'to warn',
    explanation: 'Admonish means to warn or caution.',
    clscore: 8,
  },
  {
    word: 'adroit',
    question: 'Fill in the blank: He was ___ at solving complex puzzles.',
    choices: ['adroit', 'clumsy', 'confused', 'awkward'],
    answer: 'adroit',
    explanation: 'Adroit means skillful and clever.',
    clscore: 8,
  },
  {
    word: 'adulation',
    question: "'Adulation' is best described as:",
    choices: ['praise', 'criticism', 'silence', 'punishment'],
    answer: 'praise',
    explanation: 'Adulation means excessive praise.',
    clscore: 6,
  },
  {
    word: 'adverse',
    question: "Which word best describes 'adverse' conditions?",
    choices: ['unfavorable', 'pleasant', 'calm', 'harmless'],
    answer: 'unfavorable',
    explanation: 'Adverse means unfavorable or harmful.',
    clscore: 8,
  },
  {
    word: 'advocate',
    question: "An 'advocate' is someone who:",
    choices: ['recommends', 'rejects', 'hates', 'ignores'],
    answer: 'recommends',
    explanation: 'Advocate means to recommend or support.',
    clscore: 8,
  },
  {
    word: 'affable',
    question: "'Affable' is best described as:",
    choices: ['easy to talk to', 'angry', 'arrogant', 'unfriendly'],
    answer: 'easy to talk to',
    explanation: 'Affable means friendly and pleasant to talk to.',
    clscore: 8,
  },
  {
    word: 'affinity',
    question: "What does 'affinity' mean?",
    choices: ['attraction', 'repulsion', 'hatred', 'distance'],
    answer: 'attraction',
    explanation: 'Affinity means a natural attraction or connection.',
    clscore: 8,
  },
  {
    word: 'affluence',
    question:
      'Fill in the blank: The family lived in ___, with a mansion and cars.',
    choices: ['affluence', 'poverty', 'simplicity', 'scarcity'],
    answer: 'affluence',
    explanation: 'Affluence means wealth.',
    clscore: 8,
  },
  {
    word: 'agnostic',
    question: "An 'agnostic' is someone who:",
    choices: [
      'believes God is unknowable',
      'denies all gods',
      'worships one god',
      'believes in many gods',
    ],
    answer: 'believes God is unknowable',
    explanation: 'An agnostic believes God is unknown or unknowable.',
    clscore: 8,
  },
  {
    word: 'agrarian',
    question: "'Agrarian' relates to:",
    choices: ['farming', 'politics', 'music', 'warfare'],
    answer: 'farming',
    explanation: 'Agrarian means related to farming.',
    clscore: 8,
  },
  {
    word: 'alimentary',
    question:
      'Fill in the blank: The doctor explained the ___ canal to the patient.',
    choices: ['alimentary', 'political', 'judicial', 'musical'],
    answer: 'alimentary',
    explanation: 'Alimentary means related to food or nutrition.',
    clscore: 6,
  },
  {
    word: 'allay',
    question: "What does 'allay' mean?",
    choices: ['to calm', 'to worsen', 'to hide', 'to complain'],
    answer: 'to calm',
    explanation: 'Allay means to calm or reduce intensity.',
    clscore: 6,
  },
  {
    word: 'allegory',
    question: 'Which term refers to a narrative with hidden meanings?',
    choices: ['allegory', 'poem', 'parable', 'myth'],
    answer: 'allegory',
    explanation:
      'Allegory is a story that uses figurative language to convey ideas.',
    clscore: 8,
  },
  {
    word: 'allocate',
    question: "What does 'allocate' mean?",
    choices: ['to set aside', 'to destroy', 'to mix', 'to ignore'],
    answer: 'to set aside',
    explanation: 'Allocate means to set aside or apportion.',
    clscore: 8,
  },
  {
    word: 'allude',
    question:
      'Fill in the blank: The teacher seemed to ___ to the test results.',
    choices: ['allude', 'state', 'ignore', 'shout'],
    answer: 'allude',
    explanation: 'Allude means to refer indirectly.',
    clscore: 8,
  },
  {
    word: 'altercation',
    question: "'Altercation' is closest in meaning to:",
    choices: ['noisy quarrel', 'agreement', 'silence', 'joke'],
    answer: 'noisy quarrel',
    explanation: 'Altercation means a dispute or noisy quarrel.',
    clscore: 8,
  },
  {
    word: 'ameliorate',
    question: "What does 'ameliorate' mean?",
    choices: ['to improve', 'to destroy', 'to worsen', 'to reduce'],
    answer: 'to improve',
    explanation: 'Ameliorate means to make something better.',
    clscore: 8,
  },
  {
    word: 'amiable',
    question: "Which sentence correctly uses the word 'amiable'?",
    choices: [
      'Her amiable personality made her well-liked by everyone.',
      'The amiable storm destroyed the town.',
      'He shouted in an amiable tone at his enemies.',
      'The desert is amiable with no plants.',
    ],
    answer: 'Her amiable personality made her well-liked by everyone.',
    explanation: 'Amiable means pleasant and kind.',
    clscore: 8,
  },
  {
    word: 'amnesty',
    question: "What does 'amnesty' mean?",
    choices: ['pardon', 'punishment', 'trial', 'sentence'],
    answer: 'pardon',
    explanation: 'Amnesty is a pardon, usually for political offenses.',
    clscore: 8,
  },
  {
    word: 'anarchy',
    question: 'Fill in the blank: Without laws, the country fell into ___.',
    choices: ['anarchy', 'order', 'peace', 'unity'],
    answer: 'anarchy',
    explanation: 'Anarchy means absence of government or law.',
    clscore: 8,
  },
  {
    word: 'animosity',
    question: "'Animosity' is best described as:",
    choices: ['hatred', 'friendship', 'calm', 'love'],
    answer: 'hatred',
    explanation: 'Animosity means strong dislike or hatred.',
    clscore: 8,
  },
  {
    word: 'annals',
    question: "What does 'annals' mean?",
    choices: ['historical records', 'novels', 'poems', 'maps'],
    answer: 'historical records',
    explanation: 'Annals are historical records.',
    clscore: 6,
  },
  {
    word: 'anomaly',
    question: "Which best defines 'anomaly'?",
    choices: ['irregularity', 'normality', 'pattern', 'routine'],
    answer: 'irregularity',
    explanation: 'An anomaly is something irregular or an exception.',
    clscore: 8,
  },
  {
    word: 'anthology',
    question: "An 'anthology' is:",
    choices: [
      'a collection of literary works',
      'a short story',
      'a single poem',
      'a speech',
    ],
    answer: 'a collection of literary works',
    explanation: 'Anthology means a collection of literary pieces.',
    clscore: 8,
  },
  {
    word: 'antipathy',
    question: 'Fill in the blank: He felt strong ___ toward his rival.',
    choices: ['antipathy', 'affection', 'respect', 'support'],
    answer: 'antipathy',
    explanation: 'Antipathy means dislike.',
    clscore: 8,
  },
  {
    word: 'antithesis',
    question: "'Antithesis' most nearly means:",
    choices: ['direct opposite', 'summary', 'example', 'story'],
    answer: 'direct opposite',
    explanation: 'Antithesis is the direct opposite of something.',
    clscore: 8,
  },
  {
    word: 'apathy',
    question: "What does 'apathy' mean?",
    choices: ['lack of interest', 'strong passion', 'joy', 'anger'],
    answer: 'lack of interest',
    explanation: 'Apathy means indifference or lack of interest.',
    clscore: 8,
  },
  {
    word: 'aplomb',
    question: 'Fill in the blank: She handled the tough situation with ___.',
    choices: ['aplomb', 'fear', 'anger', 'confusion'],
    answer: 'aplomb',
    explanation: 'Aplomb means self-confidence.',
    clscore: 8,
  },
  {
    word: 'archaic',
    question: "What does 'archaic' mean?",
    choices: ['old-fashioned', 'modern', 'useful', 'new'],
    answer: 'old-fashioned',
    explanation: 'Archaic means outdated or no longer in use.',
    clscore: 6,
  },
  {
    word: 'archives',
    question: "An 'archive' is a place where:",
    choices: [
      'records are kept',
      'food is stored',
      'money is saved',
      'weapons are kept',
    ],
    answer: 'records are kept',
    explanation: 'Archives are where records are stored.',
    clscore: 6,
  },
  {
    word: 'arduous',
    question: 'Fill in the blank: Climbing the mountain was an ___ task.',
    choices: ['arduous', 'easy', 'quick', 'pleasant'],
    answer: 'arduous',
    explanation: 'Arduous means difficult or requiring effort.',
    clscore: 8,
  },
  {
    word: 'arrears',
    question: "What does 'arrears' mean?",
    choices: ['unpaid debt', 'savings', 'profit', 'deposit'],
    answer: 'unpaid debt',
    explanation: 'Arrears refers to overdue or unpaid debts.',
    clscore: 6,
  },
  {
    word: 'ascendant',
    question: "'Ascendant' most nearly means:",
    choices: ['rising', 'falling', 'unchanging', 'sinking'],
    answer: 'rising',
    explanation: 'Ascendant means rising or gaining influence.',
    clscore: 6,
  },
  {
    word: 'assay',
    question: "To 'assay' something is to:",
    choices: ['test it', 'ignore it', 'hide it', 'destroy it'],
    answer: 'test it',
    explanation: 'Assay means to test or analyze.',
    clscore: 6,
  },
  {
    word: 'astral',
    question: "What does 'astral' relate to?",
    choices: ['stars', 'earth', 'oceans', 'forests'],
    answer: 'stars',
    explanation: 'Astral means relating to the stars.',
    clscore: 6,
  },
  {
    word: 'astute',
    question: 'Fill in the blank: The ___ student quickly solved the riddle.',
    choices: ['astute', 'foolish', 'sleepy', 'dull'],
    answer: 'astute',
    explanation: 'Astute means shrewd or clever.',
    clscore: 8,
  },
  {
    word: 'atheist',
    question: "An 'atheist' is a person who:",
    choices: [
      'denies the existence of God',
      'believes in God',
      'is unsure about God',
      'worships idols',
    ],
    answer: 'denies the existence of God',
    explanation: 'An atheist does not believe in God.',
    clscore: 8,
  },
  {
    word: 'atoll',
    question: "'Atoll' most nearly means:",
    choices: [
      'island with lagoon',
      'mountain peak',
      'desert plain',
      'river mouth',
    ],
    answer: 'island with lagoon',
    explanation: 'An atoll is a ring-shaped island enclosing a lagoon.',
    clscore: 6,
  },
  {
    word: 'atrophy',
    question:
      'Fill in the blank: His muscles began to ___ after months in bed.',
    choices: ['atrophy', 'grow', 'strengthen', 'expand'],
    answer: 'atrophy',
    explanation: 'Atrophy means to waste away or shrink.',
    clscore: 8,
  },
  {
    word: 'attest',
    question: "What does 'attest' mean?",
    choices: ['to confirm', 'to deny', 'to hide', 'to doubt'],
    answer: 'to confirm',
    explanation: 'Attest means to confirm something is true.',
    clscore: 8,
  },
  {
    word: 'audacious',
    question: "'Audacious' is best described as:",
    choices: [
      'bold or daring',
      'timid and shy',
      'quiet and thoughtful',
      'lazy and indifferent',
    ],
    answer: 'bold or daring',
    explanation: 'Audacious means bold or daring.',
    clscore: 8,
  },
  {
    word: 'augment',
    question: "What does 'augment' mean?",
    choices: ['to increase', 'to lessen', 'to hide', 'to waste'],
    answer: 'to increase',
    explanation: 'Augment means to increase or make greater.',
    clscore: 8,
  },
  {
    word: 'augur',
    question: 'Fill in the blank: Dark clouds ___ a coming storm.',
    choices: ['augur', 'ignore', 'clear', 'hide'],
    answer: 'augur',
    explanation: 'Augur means to predict or foretell.',
    clscore: 6,
  },
  {
    word: 'auspices',
    question: "'Auspices' most nearly means:",
    choices: ['protection', 'danger', 'attack', 'neglect'],
    answer: 'protection',
    explanation: 'Auspices means guidance or protection.',
    clscore: 6,
  },
  {
    word: 'auspicious',
    question: "Which event would be considered 'auspicious'?",
    choices: ['a favorable sign', 'a disaster', 'a loss', 'a failure'],
    answer: 'a favorable sign',
    explanation: 'Auspicious means favorable or promising success.',
    clscore: 8,
  },
  {
    word: 'austerity',
    question: "What does 'austerity' mean?",
    choices: ['strictness', 'luxury', 'joy', 'celebration'],
    answer: 'strictness',
    explanation: 'Austerity means strictness or severe discipline.',
    clscore: 7,
  },
  {
    word: 'authoritative',
    question: "'Authoritative' is best described as:",
    choices: ['commanding', 'weak', 'uncertain', 'timid'],
    answer: 'commanding',
    explanation: 'Authoritative means having authority or commanding.',
    clscore: 8,
  },
  {
    word: 'autocratic',
    question: "An 'autocratic' ruler is:",
    choices: ['arrogant', 'humble', 'democratic', 'weak'],
    answer: 'arrogant',
    explanation: 'Autocratic means arrogant or absolute in power.',
    clscore: 8,
  },
  {
    word: 'autonomy',
    question: 'Fill in the blank: The region fought for political ___.',
    choices: ['autonomy', 'slavery', 'chaos', 'poverty'],
    answer: 'autonomy',
    explanation: 'Autonomy means self-government.',
    clscore: 8,
  },
  {
    word: 'avarice',
    question: "'Avarice' most nearly means:",
    choices: ['greed', 'kindness', 'charity', 'wisdom'],
    answer: 'greed',
    explanation: 'Avarice means extreme greed.',
    clscore: 8,
  },
  {
    word: 'avow',
    question: "What does 'avow' mean?",
    choices: ['to declare openly', 'to hide', 'to deny', 'to avoid'],
    answer: 'to declare openly',
    explanation: 'Avow means to declare openly and without shame.',
    clscore: 8,
  },
  {
    word: 'balk',
    question:
      'Fill in the blank: He would often ___ at following the strict rules.',
    choices: ['balk', 'agree', 'obey', 'comply'],
    answer: 'balk',
    explanation: 'Balk means to stop short or refuse to continue.',
    clscore: 8,
  },
  {
    word: 'bane',
    question: "'Bane' most nearly means:",
    choices: ['a curse', 'a blessing', 'a gift', 'a reward'],
    answer: 'a curse',
    explanation: 'Bane means a curse or cause of harm.',
    clscore: 8,
  },
  {
    word: 'beatitude',
    question: "What does 'beatitude' mean?",
    choices: ['supreme happiness', 'sadness', 'fear', 'anger'],
    answer: 'supreme happiness',
    explanation: 'Beatitude means supreme blessedness or happiness.',
    clscore: 6,
  },
  {
    word: 'beguile',
    question: "'Beguile' most nearly means:",
    choices: ['to deceive', 'to honor', 'to respect', 'to support'],
    answer: 'to deceive',
    explanation: 'Beguile means to trick or deceive.',
    clscore: 8,
  },
  {
    word: 'benediction',
    question: "A 'benediction' is:",
    choices: ['a blessing', 'a curse', 'a story', 'a demand'],
    answer: 'a blessing',
    explanation: 'Benediction means a blessing.',
    clscore: 6,
  },
  {
    word: 'benign',
    question: "'Benign' most nearly means:",
    choices: ['harmless', 'dangerous', 'toxic', 'deadly'],
    answer: 'harmless',
    explanation: 'Benign means harmless or kindly.',
    clscore: 8,
  },
  {
    word: 'beset',
    question: 'Fill in the blank: The army was ___ on all sides.',
    choices: ['beset', 'praised', 'freed', 'ignored'],
    answer: 'beset',
    explanation: 'Beset means to attack from all sides.',
    clscore: 8,
  },
  {
    word: 'biennial',
    question: "What does 'biennial' mean?",
    choices: [
      'happening every two years',
      'happening daily',
      'happening yearly',
      'happening monthly',
    ],
    answer: 'happening every two years',
    explanation: 'Biennial means occurring every two years.',
    clscore: 6,
  },
  {
    word: 'blatant',
    question: "'Blatant' most nearly means:",
    choices: ['obviously loud', 'quiet', 'unclear', 'hidden'],
    answer: 'obviously loud',
    explanation: 'Blatant means offensively loud or obvious.',
    clscore: 8,
  },
  {
    word: 'bondage',
    question: 'Fill in the blank: The slaves lived in ___.',
    choices: ['bondage', 'freedom', 'wealth', 'luxury'],
    answer: 'bondage',
    explanation: 'Bondage means slavery.',
    clscore: 6,
  },
  {
    word: 'boorish',
    question: "'Boorish' is best described as:",
    choices: ['rude', 'polite', 'charming', 'respectful'],
    answer: 'rude',
    explanation: 'Boorish means rude or ill-mannered.',
    clscore: 6,
  },
  {
    word: 'bourgeois',
    question: "'Bourgeois' most nearly means:",
    choices: ['middle-class', 'royal', 'poor', 'elite'],
    answer: 'middle-class',
    explanation: 'Bourgeois refers to the middle class.',
    clscore: 6,
  },
  {
    word: 'bovine',
    question: "'Bovine' relates to:",
    choices: ['cows', 'horses', 'birds', 'sheep'],
    answer: 'cows',
    explanation: 'Bovine means related to cows or oxen.',
    clscore: 6,
  },
  {
    word: 'brusque',
    question: "'Brusque' is best described as:",
    choices: ['abrupt', 'polite', 'gentle', 'friendly'],
    answer: 'abrupt',
    explanation: 'Brusque means abrupt or blunt in manner.',
    clscore: 8,
  },
  {
    word: 'bureaucracy',
    question: "What does 'bureaucracy' mean?",
    choices: [
      'government through bureaus',
      'family rule',
      'dictatorship',
      'anarchy',
    ],
    answer: 'government through bureaus',
    explanation:
      'Bureaucracy means government managed through departments or bureaus.',
    clscore: 8,
  },
  {
    word: 'canvass',
    question: "To 'canvass' most nearly means:",
    choices: ['to make a survey', 'to ignore', 'to destroy', 'to hide'],
    answer: 'to make a survey',
    explanation: 'Canvass means to seek support or make a survey.',
    clscore: 8,
  },
  {
    word: 'carnage',
    question: "'Carnage' is best described as:",
    choices: ['slaughter', 'celebration', 'victory', 'game'],
    answer: 'slaughter',
    explanation: 'Carnage means great slaughter of people.',
    clscore: 8,
  },
  {
    word: 'carp',
    question: 'Fill in the blank: He always finds something to ___ about.',
    choices: ['carp', 'praise', 'admire', 'enjoy'],
    answer: 'carp',
    explanation: 'Carp means to complain constantly.',
    clscore: 6,
  },
  {
    word: 'carrion',
    question: "What does 'carrion' mean?",
    choices: ['decaying flesh', 'fresh meat', 'fruit', 'fish'],
    answer: 'decaying flesh',
    explanation: 'Carrion means decaying flesh of animals.',
    clscore: 6,
  },
  {
    word: 'castigate',
    question: "To 'castigate' someone is to:",
    choices: ['punish', 'praise', 'ignore', 'reward'],
    answer: 'punish',
    explanation: 'Castigate means to punish severely.',
    clscore: 6,
  },
  {
    word: 'censure',
    question: "'Censure' most nearly means:",
    choices: [
      'to criticize sharply',
      'to praise highly',
      'to confirm',
      'to forgive',
    ],
    answer: 'to criticize sharply',
    explanation: 'Censure means to criticize sharply.',
    clscore: 8,
  },
  {
    word: 'chaff',
    question: "What does 'chaff' mean?",
    choices: [
      'worthless matter',
      'valuable grain',
      'precious stone',
      'important goods',
    ],
    answer: 'worthless matter',
    explanation: 'Chaff means worthless matter or husks of grain.',
    clscore: 6,
  },
  {
    word: 'chagrin',
    question: "'Chagrin' most nearly means:",
    choices: ['embarrassment', 'happiness', 'success', 'respect'],
    answer: 'embarrassment',
    explanation: 'Chagrin means embarrassment or distress.',
    clscore: 8,
  },
  {
    word: 'chaste',
    question: 'Fill in the blank: The monk lived a ___ life.',
    choices: ['chaste', 'corrupt', 'wasteful', 'luxurious'],
    answer: 'chaste',
    explanation: 'Chaste means morally pure.',
    clscore: 8,
  },
  {
    word: 'chauvinism',
    question: "What does 'chauvinism' mean?",
    choices: ['fanatical patriotism', 'kindness', 'calmness', 'modesty'],
    answer: 'fanatical patriotism',
    explanation: 'Chauvinism means fanatical patriotism or prejudice.',
    clscore: 8,
  },
  {
    word: 'chide',
    question: "To 'chide' means:",
    choices: ['to scold', 'to praise', 'to ignore', 'to respect'],
    answer: 'to scold',
    explanation: 'Chide means to scold or rebuke.',
    clscore: 8,
  },
  {
    word: 'chronicle',
    question: "A 'chronicle' is:",
    choices: ['a record of events', 'a play', 'a poem', 'a speech'],
    answer: 'a record of events',
    explanation: 'Chronicle means a factual written account of events.',
    clscore: 8,
  },
  {
    word: 'circumspect',
    question: "'Circumspect' most nearly means:",
    choices: ['cautious', 'careless', 'reckless', 'ignorant'],
    answer: 'cautious',
    explanation: 'Circumspect means watchful and cautious.',
    clscore: 8,
  },
  {
    word: 'colloquial',
    question: "What does 'colloquial' mean?",
    choices: ['informal', 'formal', 'written', 'professional'],
    answer: 'informal',
    explanation: 'Colloquial means informal or conversational language.',
    clscore: 8,
  },
  {
    word: 'commensurate',
    question: 'Fill in the blank: Pay should be ___ with effort.',
    choices: ['commensurate', 'less', 'opposite', 'different'],
    answer: 'commensurate',
    explanation: 'Commensurate means in proportion.',
    clscore: 8,
  },
  {
    word: 'complacent',
    question: "'Complacent' most nearly means:",
    choices: ['self-satisfied', 'hard-working', 'motivated', 'concerned'],
    answer: 'self-satisfied',
    explanation: 'Complacent means being overly content and unconcerned.',
    clscore: 8,
  },
  {
    word: 'concomitant',
    question: "What does 'concomitant' mean?",
    choices: ['accompanying', 'opposing', 'separate', 'different'],
    answer: 'accompanying',
    explanation: 'Concomitant means occurring together or accompanying.',
    clscore: 8,
  },
  {
    word: 'condolence',
    question: 'Fill in the blank: They offered their ___ after the loss.',
    choices: ['condolence', 'congratulations', 'celebration', 'praise'],
    answer: 'condolence',
    explanation: 'Condolence means expression of sympathy.',
    clscore: 8,
  },
  {
    word: 'configuration',
    question: "What does 'configuration' mean?",
    choices: ['arrangement', 'destruction', 'addition', 'removal'],
    answer: 'arrangement',
    explanation: 'Configuration means arrangement or setup.',
    clscore: 8,
  },
  {
    word: 'congenital',
    question: "'Congenital' most nearly means:",
    choices: ['existing since birth', 'temporary', 'learned later', 'adopted'],
    answer: 'existing since birth',
    explanation: 'Congenital means present from birth.',
    clscore: 8,
  },
  {
    word: 'coniferous',
    question: "Trees that are 'coniferous' are:",
    choices: ['cone-bearing', 'fruit-bearing', 'flower-bearing', 'leafless'],
    answer: 'cone-bearing',
    explanation: 'Coniferous trees produce cones.',
    clscore: 6,
  },
  {
    word: 'connote',
    question: "To 'connote' is to:",
    choices: ['suggest', 'state directly', 'hide', 'ignore'],
    answer: 'suggest',
    explanation: 'Connote means to suggest or imply.',
    clscore: 8,
  },
  {
    word: 'consternation',
    question: "'Consternation' most nearly means:",
    choices: ['sudden confusion', 'calmness', 'peace', 'happiness'],
    answer: 'sudden confusion',
    explanation: 'Consternation means sudden confusion or dismay.',
    clscore: 8,
  },
  {
    word: 'constrict',
    question: "What does 'constrict' mean?",
    choices: ['to shrink', 'to expand', 'to stretch', 'to loosen'],
    answer: 'to shrink',
    explanation: 'Constrict means to shrink or tighten.',
    clscore: 6,
  },
  {
    word: 'contiguous',
    question: "'Contiguous' most nearly means:",
    choices: ['touching', 'separate', 'distant', 'opposite'],
    answer: 'touching',
    explanation: 'Contiguous means adjacent or touching.',
    clscore: 8,
  },
  {
    word: 'contingent',
    question: 'Fill in the blank: The success of the plan is ___ on funding.',
    choices: ['contingent', 'certain', 'guaranteed', 'independent'],
    answer: 'contingent',
    explanation: 'Contingent means dependent or possible.',
    clscore: 8,
  },
  {
    word: 'convolution',
    question: "What does 'convolution' mean?",
    choices: [
      'a coiled state',
      'a straight path',
      'a flat shape',
      'a clear idea',
    ],
    answer: 'a coiled state',
    explanation: 'Convolution means something twisted or coiled.',
    clscore: 6,
  },
  {
    word: 'corpulent',
    question: "'Corpulent' most nearly means:",
    choices: ['fat', 'thin', 'weak', 'tall'],
    answer: 'fat',
    explanation: 'Corpulent means fat or overweight.',
    clscore: 6,
  },
  {
    word: 'corroborate',
    question: "To 'corroborate' is to:",
    choices: ['confirm', 'deny', 'ignore', 'hide'],
    answer: 'confirm',
    explanation: 'Corroborate means to confirm or support.',
    clscore: 8,
  },
  {
    word: 'covenant',
    question: "What does 'covenant' mean?",
    choices: ['contract', 'fight', 'gift', 'speech'],
    answer: 'contract',
    explanation: 'Covenant means a binding agreement or contract.',
    clscore: 7,
  },
  {
    word: 'covert',
    question: "'Covert' most nearly means:",
    choices: ['secret', 'open', 'known', 'public'],
    answer: 'secret',
    explanation: 'Covert means concealed or secret.',
    clscore: 7,
  },
  {
    word: 'credible',
    question: "A 'credible' story is:",
    choices: ['believable', 'false', 'doubtful', 'imaginary'],
    answer: 'believable',
    explanation: 'Credible means believable.',
    clscore: 8,
  },
  {
    word: 'credulity',
    question: "'Credulity' most nearly means:",
    choices: ['gullibility', 'wisdom', 'knowledge', 'doubt'],
    answer: 'gullibility',
    explanation: 'Credulity means readiness to believe too easily.',
    clscore: 7,
  },
  {
    word: 'culpable',
    question: 'Fill in the blank: The thief was found ___ for the crime.',
    choices: ['culpable', 'innocent', 'blameless', 'guiltless'],
    answer: 'culpable',
    explanation: 'Culpable means deserving blame.',
    clscore: 7,
  },
  {
    word: 'cult',
    question: "What does 'cult' mean?",
    choices: [
      'obsessive devotion',
      'casual hobby',
      'formal job',
      'short break',
    ],
    answer: 'obsessive devotion',
    explanation: 'Cult means obsessive devotion to a person or idea.',
    clscore: 8,
  },
  {
    word: 'daunt',
    question: "To 'daunt' most nearly means:",
    choices: ['to discourage', 'to motivate', 'to praise', 'to inspire'],
    answer: 'to discourage',
    explanation: 'Daunt means to intimidate or discourage.',
    clscore: 7,
  },
  {
    word: 'dearth',
    question: "What does 'dearth' mean?",
    choices: ['scarcity', 'abundance', 'wealth', 'plenty'],
    answer: 'scarcity',
    explanation: 'Dearth means scarcity or lack of something.',
    clscore: 7,
  },
  {
    word: 'decant',
    question: "To 'decant' is to:",
    choices: ['pour', 'drink', 'spill', 'hold'],
    answer: 'pour',
    explanation: 'Decant means to pour liquid gently.',
    clscore: 6,
  },
  {
    word: 'decrepit',
    question: "'Decrepit' most nearly means:",
    choices: ['weakened by age', 'young', 'strong', 'healthy'],
    answer: 'weakened by age',
    explanation: 'Decrepit means weakened by age or neglect.',
    clscore: 7,
  },
  {
    word: 'defection',
    question: "What does 'defection' mean?",
    choices: ['desertion', 'support', 'return', 'loyalty'],
    answer: 'desertion',
    explanation: 'Defection means desertion or abandoning a cause.',
    clscore: 7,
  },
  {
    word: 'deference',
    question: "'Deference' most nearly means:",
    choices: ['respect', 'anger', 'disrespect', 'fear'],
    answer: 'respect',
    explanation: 'Deference means respectful submission or regard.',
    clscore: 8,
  },
  {
    word: 'definitive',
    question: "A 'definitive' answer is:",
    choices: ['conclusive', 'unclear', 'temporary', 'uncertain'],
    answer: 'conclusive',
    explanation: 'Definitive means explicit or conclusive.',
    clscore: 7,
  },
  {
    word: 'deleterious',
    question: "'Deleterious' most nearly means:",
    choices: ['harmful', 'helpful', 'useful', 'safe'],
    answer: 'harmful',
    explanation: 'Deleterious means harmful or damaging.',
    clscore: 7,
  },
  {
    word: 'delineate',
    question: "To 'delineate' means:",
    choices: ['describe', 'ignore', 'hide', 'destroy'],
    answer: 'describe',
    explanation: 'Delineate means to describe or outline clearly.',
    clscore: 7,
  },
  {
    word: 'delta',
    question: "A 'delta' is:",
    choices: ['river mouth', 'mountain', 'island', 'desert'],
    answer: 'river mouth',
    explanation: 'A delta is land at the mouth of a river.',
    clscore: 6,
  },
  {
    word: 'demeanor',
    question: "What does 'demeanor' mean?",
    choices: ['behavior', 'clothing', 'voice', 'appearance'],
    answer: 'behavior',
    explanation: 'Demeanor means outward behavior or conduct.',
    clscore: 7,
  },
  {
    word: 'demure',
    question: "'Demure' most nearly means:",
    choices: ['shy', 'outgoing', 'bold', 'talkative'],
    answer: 'shy',
    explanation: 'Demure means modest or shy.',
    clscore: 7,
  },
  {
    word: 'deplore',
    question: "To 'deplore' means:",
    choices: ['to condemn', 'to accept', 'to admire', 'to support'],
    answer: 'to condemn',
    explanation: 'Deplore means to strongly condemn or regret.',
    clscore: 7,
  },
  {
    word: 'desecrate',
    question: "What does 'desecrate' mean?",
    choices: [
      'to violate something sacred',
      'to honor',
      'to respect',
      'to clean',
    ],
    answer: 'to violate something sacred',
    explanation: 'Desecrate means to violate the sacredness of something.',
    clscore: 7,
  },
  {
    word: 'desiccate',
    question: "To 'desiccate' is to:",
    choices: ['make dry', 'make wet', 'clean', 'protect'],
    answer: 'make dry',
    explanation: 'Desiccate means to remove moisture and make dry.',
    clscore: 6,
  },
  {
    word: 'desist',
    question: "'Desist' most nearly means:",
    choices: ['stop', 'continue', 'argue', 'ignore'],
    answer: 'stop',
    explanation: 'Desist means to stop an action.',
    clscore: 7,
  },
  {
    word: 'devoid',
    question: 'Fill in the blank: The desert is ___ of water.',
    choices: ['devoid', 'full', 'overflowing', 'packed'],
    answer: 'devoid',
    explanation: 'Devoid means completely lacking.',
    clscore: 7,
  },
  {
    word: 'dichotomy',
    question: "What does 'dichotomy' mean?",
    choices: ['division into two parts', 'union', 'mixture', 'agreement'],
    answer: 'division into two parts',
    explanation: 'Dichotomy means a split into two parts.',
    clscore: 8,
  },
  {
    word: 'diffident',
    question: "'Diffident' most nearly means:",
    choices: ['shy', 'confident', 'bold', 'talkative'],
    answer: 'shy',
    explanation: 'Diffident means lacking confidence or shy.',
    clscore: 7,
  },
  {
    word: 'dilate',
    question: "To 'dilate' means:",
    choices: ['make wider', 'make smaller', 'hide', 'close'],
    answer: 'make wider',
    explanation: 'Dilate means to expand or make wider.',
    clscore: 6,
  },
  {
    word: 'disconsolate',
    question: 'Fill in the blank: After the loss, she was ___.',
    choices: ['disconsolate', 'cheerful', 'joyful', 'happy'],
    answer: 'disconsolate',
    explanation: 'Disconsolate means without hope or very unhappy.',
    clscore: 7,
  },
  {
    word: 'discordant',
    question: "'Discordant' most nearly means:",
    choices: ['clashing', 'harmonious', 'peaceful', 'gentle'],
    answer: 'clashing',
    explanation: 'Discordant means harsh or clashing in sound.',
    clscore: 7,
  },
  {
    word: 'disparage',
    question: "To 'disparage' means:",
    choices: ['to belittle', 'to praise', 'to reward', 'to admire'],
    answer: 'to belittle',
    explanation: 'Disparage means to speak of as unimportant or inferior.',
    clscore: 8,
  },
  {
    word: 'disparity',
    question: "What does 'disparity' mean?",
    choices: ['difference', 'similarity', 'agreement', 'balance'],
    answer: 'difference',
    explanation: 'Disparity means a lack of equality or difference.',
    clscore: 8,
  },
  {
    word: 'disseminate',
    question: "To 'disseminate' information means:",
    choices: ['to spread widely', 'to hide', 'to reduce', 'to collect'],
    answer: 'to spread widely',
    explanation: 'Disseminate means to spread widely, often information.',
    clscore: 8,
  },
  {
    word: 'dissident',
    question: "'Dissident' most nearly means:",
    choices: ['one who disagrees', 'a supporter', 'a leader', 'a follower'],
    answer: 'one who disagrees',
    explanation: 'A dissident is someone who disagrees with authority.',
    clscore: 8,
  },
  {
    word: 'dissipate',
    question: "What does 'dissipate' mean?",
    choices: [
      'scatter wastefully',
      'save carefully',
      'gather closely',
      'hide secretly',
    ],
    answer: 'scatter wastefully',
    explanation: 'Dissipate means to scatter or waste resources.',
    clscore: 7,
  },
  {
    word: 'dissonant',
    question: "'Dissonant' most nearly means:",
    choices: ['out of harmony', 'in tune', 'melodic', 'peaceful'],
    answer: 'out of harmony',
    explanation: 'Dissonant means out of harmony or harsh-sounding.',
    clscore: 7,
  },
  {
    word: 'diurnal',
    question: "Animals that are 'diurnal' are active during the:",
    choices: ['day', 'night', 'winter', 'storm'],
    answer: 'day',
    explanation: 'Diurnal means active during the day.',
    clscore: 6,
  },
  {
    word: 'diverge',
    question: "To 'diverge' means:",
    choices: ['branch off', 'come together', 'stay the same', 'agree'],
    answer: 'branch off',
    explanation: 'Diverge means to branch off in different directions.',
    clscore: 7,
  },
  {
    word: 'docile',
    question: "'Docile' most nearly means:",
    choices: ['easy to handle', 'wild', 'stubborn', 'aggressive'],
    answer: 'easy to handle',
    explanation: 'Docile means easily taught or managed.',
    clscore: 7,
  },
  {
    word: 'dogmatic',
    question: "A 'dogmatic' person is:",
    choices: [
      'arrogant and unyielding',
      'kind and forgiving',
      'quiet and timid',
      'friendly and open',
    ],
    answer: 'arrogant and unyielding',
    explanation: 'Dogmatic means insisting on principles without flexibility.',
    clscore: 7,
  },
  {
    word: 'dolorous',
    question: "'Dolorous' most nearly means:",
    choices: ['mournful', 'joyful', 'excited', 'peaceful'],
    answer: 'mournful',
    explanation: 'Dolorous means full of sorrow or grief.',
    clscore: 6,
  },
  {
    word: 'dregs',
    question: 'Fill in the blank: He drank the ___ of the coffee cup.',
    choices: ['dregs', 'foam', 'water', 'sugar'],
    answer: 'dregs',
    explanation: 'Dregs means the remnants or leftovers at the bottom.',
    clscore: 8,
  },
  {
    word: 'ductile',
    question: "'Ductile' most nearly means:",
    choices: ['easily molded', 'rigid', 'hard', 'fragile'],
    answer: 'easily molded',
    explanation: 'Ductile means capable of being shaped or molded.',
    clscore: 6,
  },
  {
    word: 'effigy',
    question: "An 'effigy' is:",
    choices: [
      'a dummy representing a person',
      'a real person',
      'a leader',
      'a soldier',
    ],
    answer: 'a dummy representing a person',
    explanation: 'Effigy means a crude representation of a person.',
    clscore: 8,
  },
  {
    word: 'elicit',
    question: "To 'elicit' a response means:",
    choices: ['to draw forth', 'to ignore', 'to hide', 'to suppress'],
    answer: 'to draw forth',
    explanation: 'Elicit means to draw out a response or reaction.',
    clscore: 8,
  },
  {
    word: 'elucidate',
    question: "What does 'elucidate' mean?",
    choices: ['explain', 'confuse', 'ignore', 'hide'],
    answer: 'explain',
    explanation: 'Elucidate means to make something clear or explain.',
    clscore: 8,
  },
  {
    word: 'emaciated',
    question: "'Emaciated' most nearly means:",
    choices: ['extremely thin', 'healthy', 'muscular', 'strong'],
    answer: 'extremely thin',
    explanation:
      'Emaciated means abnormally thin due to illness or lack of food.',
    clscore: 8,
  },
  {
    word: 'emanate',
    question: 'Light seemed to ___ from the candle.',
    choices: ['emanate', 'absorb', 'hide', 'vanish'],
    answer: 'emanate',
    explanation: 'Emanate means to flow out or issue forth.',
    clscore: 8,
  },
  {
    word: 'embezzle',
    question: "To 'embezzle' means:",
    choices: ['to steal money', 'to donate', 'to save', 'to invest'],
    answer: 'to steal money',
    explanation: "Embezzle means to steal money entrusted to one's care.",
    clscore: 8,
  },
  {
    word: 'empirical',
    question: "An 'empirical' study is based on:",
    choices: ['observation', 'belief', 'imagination', 'faith'],
    answer: 'observation',
    explanation: 'Empirical means based on observation or experience.',
    clscore: 8,
  },
  {
    word: 'emulate',
    question: "To 'emulate' someone means:",
    choices: ['to imitate', 'to ignore', 'to defeat', 'to oppose'],
    answer: 'to imitate',
    explanation:
      'Emulate means to imitate with the goal of matching or surpassing.',
    clscore: 8,
  },
  {
    word: 'enigma',
    question: "'Enigma' most nearly means:",
    choices: ['puzzle', 'answer', 'clarity', 'truth'],
    answer: 'puzzle',
    explanation:
      'Enigma means something mysterious or difficult to understand.',
    clscore: 8,
  },
  {
    word: 'enjoin',
    question: "To 'enjoin' is to:",
    choices: ['prohibit', 'allow', 'encourage', 'permit'],
    answer: 'prohibit',
    explanation: 'Enjoin means to legally prohibit or strongly command.',
    clscore: 8,
  },
  {
    word: 'ephemeral',
    question: "'Ephemeral' most nearly means:",
    choices: ['short-lived', 'lasting', 'eternal', 'endless'],
    answer: 'short-lived',
    explanation: 'Ephemeral means lasting a very short time.',
    clscore: 8,
  },
  {
    word: 'epitaph',
    question: "An 'epitaph' is:",
    choices: ['writing on a tombstone', 'a hymn', 'a sermon', 'a blessing'],
    answer: 'writing on a tombstone',
    explanation: 'Epitaph means an inscription on a tombstone.',
    clscore: 5,
  },
  {
    word: 'epitome',
    question: 'He is the ___ of kindness.',
    choices: ['epitome', 'opposite', 'enemy', 'critic'],
    answer: 'epitome',
    explanation: 'Epitome means a perfect example of a quality.',
    clscore: 8,
  },
  {
    word: 'equitable',
    question: "An 'equitable' solution is:",
    choices: ['fair', 'biased', 'unjust', 'partial'],
    answer: 'fair',
    explanation: 'Equitable means just and fair.',
    clscore: 8,
  },
  {
    word: 'equivocal',
    question: "'Equivocal' most nearly means:",
    choices: ['uncertain', 'clear', 'obvious', 'definite'],
    answer: 'uncertain',
    explanation: 'Equivocal means ambiguous or uncertain.',
    clscore: 8,
  },
  {
    word: 'ethical',
    question: "An 'ethical' decision follows:",
    choices: ['accepted conduct', 'dishonesty', 'selfishness', 'crime'],
    answer: 'accepted conduct',
    explanation: 'Ethical means following accepted rules of conduct.',
    clscore: 8,
  },
  {
    word: 'ethnic',
    question: "What does 'ethnic' relate to?",
    choices: ['people and culture', 'mathematics', 'weather', 'machines'],
    answer: 'people and culture',
    explanation: 'Ethnic relates to cultural or racial groups.',
    clscore: 8,
  },
  {
    word: 'eulogy',
    question: 'At funerals, a ___ is often given to honor the dead.',
    choices: ['eulogy', 'curse', 'chant', 'sermon'],
    answer: 'eulogy',
    explanation:
      'Eulogy means a formal speech of praise for someone, often after death.',
    clscore: 8,
  },
  {
    word: 'exacerbate',
    question: "To 'exacerbate' a problem is to:",
    choices: ['make it worse', 'solve it', 'ignore it', 'lessen it'],
    answer: 'make it worse',
    explanation: 'Exacerbate means to make a problem more severe.',
    clscore: 8,
  },
  {
    word: 'exculpate',
    question: "To 'exculpate' someone is to:",
    choices: ['clear from blame', 'accuse', 'punish', 'blame'],
    answer: 'clear from blame',
    explanation: 'Exculpate means to clear someone of blame.',
    clscore: 8,
  },
  {
    word: 'exonerate',
    question: "What does 'exonerate' mean?",
    choices: ['clear from blame', 'blame', 'punish', 'charge'],
    answer: 'clear from blame',
    explanation: 'Exonerate means to free from blame or responsibility.',
    clscore: 8,
  },
  {
    word: 'exorbitant',
    question: "'Exorbitant' most nearly means:",
    choices: ['excessive', 'reasonable', 'normal', 'cheap'],
    answer: 'excessive',
    explanation: 'Exorbitant means unreasonably high or excessive.',
    clscore: 8,
  },
  {
    word: 'expound',
    question: "To 'expound' means:",
    choices: ['explain in detail', 'summarize', 'ignore', 'simplify'],
    answer: 'explain in detail',
    explanation: 'Expound means to explain in detail.',
    clscore: 8,
  },
  {
    word: 'extol',
    question: "To 'extol' is to:",
    choices: ['praise highly', 'criticize', 'hide', 'reject'],
    answer: 'praise highly',
    explanation: 'Extol means to praise enthusiastically.',
    clscore: 8,
  },
  {
    word: 'extraneous',
    question: "'Extraneous' most nearly means:",
    choices: ['not relevant', 'important', 'essential', 'needed'],
    answer: 'not relevant',
    explanation: 'Extraneous means irrelevant or unrelated.',
    clscore: 8,
  },
  {
    word: 'extricate',
    question: "To 'extricate' means:",
    choices: ['to free', 'to trap', 'to hide', 'to hold'],
    answer: 'to free',
    explanation: 'Extricate means to free from difficulty.',
    clscore: 8,
  },
  {
    word: 'extrinsic',
    question: "'Extrinsic' most nearly means:",
    choices: ['external', 'essential', 'inner', 'core'],
    answer: 'external',
    explanation:
      'Extrinsic means coming from outside, not part of the essential nature.',
    clscore: 6,
  },
  {
    word: 'falter',
    question: "If someone begins to 'falter', they:",
    choices: ['stumble', 'run fast', 'succeed', 'stand tall'],
    answer: 'stumble',
    explanation: 'Falter means to hesitate or lose strength, often stumbling.',
    clscore: 8,
  },
  {
    word: 'fastidious',
    question: "A 'fastidious' person is:",
    choices: ['hard to please', 'careless', 'easygoing', 'messy'],
    answer: 'hard to please',
    explanation:
      'Fastidious means very attentive to detail and hard to satisfy.',
    clscore: 8,
  },
  {
    word: 'fatuous',
    question: "'Fatuous' most nearly means:",
    choices: ['foolish', 'wise', 'serious', 'thoughtful'],
    answer: 'foolish',
    explanation: 'Fatuous means silly or foolish.',
    clscore: 6,
  },
  {
    word: 'feasible',
    question: "A 'feasible' plan is:",
    choices: ['possible', 'impossible', 'unlikely', 'false'],
    answer: 'possible',
    explanation: 'Feasible means capable of being done.',
    clscore: 8,
  },
  {
    word: 'fecund',
    question: "'Fecund' most nearly means:",
    choices: ['fertile', 'barren', 'wasted', 'dry'],
    answer: 'fertile',
    explanation: 'Fecund means highly fertile or productive.',
    clscore: 6,
  },
  {
    word: 'feign',
    question: "To 'feign' means:",
    choices: ['pretend', 'believe', 'reveal', 'trust'],
    answer: 'pretend',
    explanation: 'Feign means to pretend or fake.',
    clscore: 8,
  },
  {
    word: 'felicity',
    question: "'Felicity' most nearly means:",
    choices: ['happiness', 'sadness', 'anger', 'fear'],
    answer: 'happiness',
    explanation: 'Felicity means great happiness.',
    clscore: 8,
  },
  {
    word: 'ferret',
    question: "To 'ferret out' information means to:",
    choices: ['hunt for it', 'ignore it', 'forget it', 'hide it'],
    answer: 'hunt for it',
    explanation: 'Ferret means to search out persistently.',
    clscore: 8,
  },
  {
    word: 'fervent',
    question: "'Fervent' most nearly means:",
    choices: ['passionate', 'indifferent', 'cold', 'apathetic'],
    answer: 'passionate',
    explanation: 'Fervent means showing intense emotion.',
    clscore: 8,
  },
  {
    word: 'fetish',
    question: "A 'fetish' is:",
    choices: ['an obsession', 'a dislike', 'a hobby', 'a joke'],
    answer: 'an obsession',
    explanation: 'Fetish means an obsessive attachment to something.',
    clscore: 8,
  },
  {
    word: 'flaccid',
    question: "'Flaccid' most nearly means:",
    choices: ['limp', 'firm', 'strong', 'solid'],
    answer: 'limp',
    explanation: 'Flaccid means soft and lacking firmness.',
    clscore: 6,
  },
  {
    word: 'flagrant',
    question: "A 'flagrant' violation is:",
    choices: ['obvious', 'hidden', 'minor', 'secret'],
    answer: 'obvious',
    explanation: 'Flagrant means glaring or shocking.',
    clscore: 8,
  },
  {
    word: 'flamboyant',
    question: "A 'flamboyant' outfit is:",
    choices: ['showy', 'plain', 'dull', 'simple'],
    answer: 'showy',
    explanation: 'Flamboyant means flashy and showy.',
    clscore: 8,
  },
  {
    word: 'flaunt',
    question: "To 'flaunt' wealth is to:",
    choices: ['show it off', 'hide it', 'save it', 'spend it quietly'],
    answer: 'show it off',
    explanation: 'Flaunt means to display proudly or boldly.',
    clscore: 8,
  },
  {
    word: 'fledge',
    question: "A young bird that has 'fledged' has:",
    choices: ['grown feathers', 'died', 'flown away', 'hatched'],
    answer: 'grown feathers',
    explanation: 'Fledge means to develop feathers necessary for flight.',
    clscore: 6,
  },
  {
    word: 'forensic',
    question: "A 'forensic' report relates to:",
    choices: ['legal debate', 'weather', 'cooking', 'travel'],
    answer: 'legal debate',
    explanation: 'Forensic means related to legal or public debate.',
    clscore: 8,
  },
  {
    word: 'forte',
    question: "Her 'forte' is playing the piano. 'Forte' means:",
    choices: ['strong point', 'weakness', 'fear', 'interest'],
    answer: 'strong point',
    explanation: 'Forte means a strong ability or skill.',
    clscore: 8,
  },
  {
    word: 'fortitude',
    question: "'Fortitude' most nearly means:",
    choices: ['courage', 'fear', 'weakness', 'anger'],
    answer: 'courage',
    explanation: 'Fortitude means courage in pain or difficulty.',
    clscore: 8,
  },
  {
    word: 'fortnight',
    question: "A 'fortnight' is:",
    choices: ['two weeks', 'a month', 'a week', 'a season'],
    answer: 'two weeks',
    explanation: 'Fortnight means a period of two weeks.',
    clscore: 8,
  },
  {
    word: 'fortuitous',
    question: "'Fortuitous' most nearly means:",
    choices: ['by chance', 'planned', 'intentional', 'expected'],
    answer: 'by chance',
    explanation: 'Fortuitous means happening accidentally or by chance.',
    clscore: 8,
  },
  {
    word: 'fray',
    question: "To 'fray' means:",
    choices: ['wear out', 'strengthen', 'sew', 'bind'],
    answer: 'wear out',
    explanation: 'Fray means to wear down or unravel.',
    clscore: 6,
  },
  {
    word: 'frugal',
    question: "A 'frugal' person is:",
    choices: ['thrifty', 'wasteful', 'generous', 'extravagant'],
    answer: 'thrifty',
    explanation: 'Frugal means careful with money, thrifty.',
    clscore: 8,
  },
  {
    word: 'garrulous',
    question: "'Garrulous' most nearly means:",
    choices: ['talkative', 'silent', 'shy', 'quiet'],
    answer: 'talkative',
    explanation: 'Garrulous means excessively talkative.',
    clscore: 8,
  },
  {
    word: 'generic',
    question: "'Generic' most nearly means:",
    choices: ['general', 'specific', 'unique', 'rare'],
    answer: 'general',
    explanation: 'Generic means common or general, not specific.',
    clscore: 8,
  },
  {
    word: 'genre',
    question: "In literature, 'genre' refers to:",
    choices: ['a category', 'a plot', 'a title', 'a character'],
    answer: 'a category',
    explanation: 'Genre means a category or type of art, music, or literature.',
    clscore: 8,
  },
  {
    word: 'glib',
    question: "'Glib' speech is:",
    choices: ['smooth but insincere', 'honest', 'silent', 'dull'],
    answer: 'smooth but insincere',
    explanation: 'Glib means fluent but shallow or insincere.',
    clscore: 8,
  },
  {
    word: 'gradient',
    question: "'Gradient' most nearly means:",
    choices: ['slope', 'height', 'valley', 'mountain'],
    answer: 'slope',
    explanation: 'Gradient means the degree of a slope.',
    clscore: 6,
  },
  {
    word: 'gregarious',
    question: "A 'gregarious' person is:",
    choices: ['sociable', 'shy', 'silent', 'introverted'],
    answer: 'sociable',
    explanation: 'Gregarious means fond of company, sociable.',
    clscore: 8,
  },
  {
    word: 'guild',
    question: "A 'guild' is:",
    choices: ['association', 'family', 'team', 'friendship'],
    answer: 'association',
    explanation:
      'Guild means an organization of people with similar interests or jobs.',
    clscore: 6,
  },
  {
    word: 'hapless',
    question: "'Hapless' most nearly means:",
    choices: ['unlucky', 'fortunate', 'rich', 'carefree'],
    answer: 'unlucky',
    explanation: 'Hapless means unlucky or unfortunate.',
    clscore: 8,
  },
  {
    word: 'heinous',
    question: "A 'heinous' crime is:",
    choices: ['terrible', 'minor', 'legal', 'funny'],
    answer: 'terrible',
    explanation: 'Heinous means shockingly evil or abominable.',
    clscore: 8,
  },
  {
    word: 'heterogeneous',
    question: "'Heterogeneous' most nearly means:",
    choices: ['diverse', 'similar', 'same', 'uniform'],
    answer: 'diverse',
    explanation: 'Heterogeneous means made up of different kinds.',
    clscore: 8,
  },
  {
    word: 'heyday',
    question: "A person's 'heyday' is their:",
    choices: ['prime', 'decline', 'childhood', 'retirement'],
    answer: 'prime',
    explanation: 'Heyday means the peak or prime period of success.',
    clscore: 8,
  },
  {
    word: 'hiatus',
    question: "Taking a 'hiatus' means:",
    choices: [
      'taking a break',
      'working hard',
      'moving fast',
      'finishing quickly',
    ],
    answer: 'taking a break',
    explanation: 'Hiatus means a pause or break.',
    clscore: 8,
  },
  {
    word: 'holocaust',
    question: "A 'holocaust' is:",
    choices: ['mass destruction', 'celebration', 'rescue', 'small fire'],
    answer: 'mass destruction',
    explanation: 'Holocaust means mass destruction, especially by fire.',
    clscore: 7,
  },
  {
    word: 'homage',
    question: "To pay 'homage' means to show:",
    choices: ['respect', 'anger', 'fear', 'doubt'],
    answer: 'respect',
    explanation: 'Homage means special honor or respect.',
    clscore: 8,
  },
  {
    word: 'homogeneous',
    question: "'Homogeneous' most nearly means:",
    choices: ['same kind', 'different', 'diverse', 'mixed'],
    answer: 'same kind',
    explanation: 'Homogeneous means made up of the same kind.',
    clscore: 7,
  },
  {
    word: 'hypochondriac',
    question: "A 'hypochondriac' often worries about:",
    choices: ['health', 'money', 'food', 'travel'],
    answer: 'health',
    explanation:
      'Hypochondriac means a person excessively worried about health.',
    clscore: 7,
  },
  {
    word: 'iconoclast',
    question: "An 'iconoclast' is someone who:",
    choices: [
      'destroys traditions',
      'supports religion',
      'follows rules',
      'praises leaders',
    ],
    answer: 'destroys traditions',
    explanation:
      'Iconoclast means someone who attacks established beliefs or symbols.',
    clscore: 7,
  },
  {
    word: 'idyll',
    question: "An 'idyll' is:",
    choices: ['a peaceful scene', 'a loud speech', 'a city', 'a debate'],
    answer: 'a peaceful scene',
    explanation: 'Idyll means a simple, peaceful description or scene.',
    clscore: 6,
  },
  {
    word: 'ignominious',
    question: "'Ignominious' most nearly means:",
    choices: ['shameful', 'glorious', 'honorable', 'proud'],
    answer: 'shameful',
    explanation: 'Ignominious means deserving shame or disgrace.',
    clscore: 8,
  },
  {
    word: 'illicit',
    question: "An 'illicit' activity is:",
    choices: ['illegal', 'legal', 'moral', 'normal'],
    answer: 'illegal',
    explanation: 'Illicit means unlawful or forbidden.',
    clscore: 8,
  },
  {
    word: 'imbibe',
    question: "To 'imbibe' means to:",
    choices: ['drink', 'eat', 'sleep', 'rest'],
    answer: 'drink',
    explanation: 'Imbibe means to drink, often alcohol.',
    clscore: 7,
  },
  {
    word: 'immutable',
    question: "'Immutable' most nearly means:",
    choices: ['unchangeable', 'changeable', 'temporary', 'flexible'],
    answer: 'unchangeable',
    explanation: 'Immutable means something that cannot change.',
    clscore: 8,
  },
  {
    word: 'impasse',
    question: "An 'impasse' is:",
    choices: ['dead end', 'victory', 'beginning', 'opportunity'],
    answer: 'dead end',
    explanation: 'Impasse means a situation with no escape or solution.',
    clscore: 8,
  },
  {
    word: 'impecunious',
    question: "An 'impecunious' person is:",
    choices: ['poor', 'wealthy', 'happy', 'generous'],
    answer: 'poor',
    explanation: 'Impecunious means having little or no money.',
    clscore: 7,
  },
  {
    word: 'impertinent',
    question: "'Impertinent' most nearly means:",
    choices: ['rude', 'polite', 'kind', 'quiet'],
    answer: 'rude',
    explanation: 'Impertinent means being rude or disrespectful.',
    clscore: 7,
  },
  {
    word: 'implicit',
    question: "'Implicit' most nearly means:",
    choices: ['implied', 'clear', 'obvious', 'direct'],
    answer: 'implied',
    explanation:
      'Implicit means suggested or understood without being stated directly.',
    clscore: 8,
  },
  {
    word: 'increment',
    question: "An 'increment' is:",
    choices: ['increase', 'reduction', 'loss', 'cut'],
    answer: 'increase',
    explanation: 'Increment means an increase or addition.',
    clscore: 7,
  },
  {
    word: 'indigent',
    question: "An 'indigent' person is:",
    choices: ['poor', 'wealthy', 'educated', 'powerful'],
    answer: 'poor',
    explanation: 'Indigent means extremely poor.',
    clscore: 8,
  },
  {
    word: 'indolent',
    question: "'Indolent' most nearly means:",
    choices: ['lazy', 'active', 'energetic', 'busy'],
    answer: 'lazy',
    explanation: 'Indolent means wanting to avoid activity; lazy.',
    clscore: 8,
  },
  {
    word: 'indulgence',
    question: "An 'indulgence' is:",
    choices: ['special treat', 'punishment', 'requirement', 'burden'],
    answer: 'special treat',
    explanation: 'Indulgence means giving in to a desire or treat.',
    clscore: 6,
  },
  {
    word: 'infernal',
    question: "'Infernal' most nearly means:",
    choices: ['hellish', 'heavenly', 'joyful', 'peaceful'],
    answer: 'hellish',
    explanation: 'Infernal means relating to hell or extremely evil.',
    clscore: 6,
  },
  {
    word: 'infidel',
    question: "An 'infidel' is:",
    choices: ['unbeliever', 'priest', 'follower', 'believer'],
    answer: 'unbeliever',
    explanation:
      'Infidel means someone who does not believe in a certain religion.',
    clscore: 7,
  },
  {
    word: 'ingenuous',
    question: "An 'ingenuous' child is:",
    choices: ['innocent', 'sly', 'mean', 'harsh'],
    answer: 'innocent',
    explanation: 'Ingenuous means innocent, naÃ¯ve, or honest.',
    clscore: 8,
  },
  {
    word: 'injunction',
    question: "An 'injunction' is:",
    choices: ['court order', 'permission', 'request', 'favor'],
    answer: 'court order',
    explanation:
      'Injunction means a legal order that requires or prohibits an action.',
    clscore: 7,
  },
  {
    word: 'inherent',
    question: "'Inherent' most nearly means:",
    choices: ['natural', 'borrowed', 'acquired', 'temporary'],
    answer: 'natural',
    explanation:
      'Inherent means existing naturally as a permanent characteristic.',
    clscore: 8,
  },
  {
    word: 'insidious',
    question: "An 'insidious' plan is:",
    choices: ['sneaky', 'open', 'harmless', 'safe'],
    answer: 'sneaky',
    explanation: 'Insidious means proceeding in a subtle but harmful way.',
    clscore: 8,
  },
  {
    word: 'insolvent',
    question: "'Insolvent' most nearly means:",
    choices: ['bankrupt', 'rich', 'profitable', 'wealthy'],
    answer: 'bankrupt',
    explanation: 'Insolvent means unable to pay debts; bankrupt.',
    clscore: 8,
  },
  {
    word: 'insomnia',
    question: "If someone has 'insomnia', they cannot:",
    choices: ['sleep', 'eat', 'walk', 'breathe'],
    answer: 'sleep',
    explanation: 'Insomnia means difficulty falling or staying asleep.',
    clscore: 7,
  },
  {
    word: 'interminable',
    question: "An 'interminable' speech is:",
    choices: ['endless', 'short', 'funny', 'brief'],
    answer: 'endless',
    explanation: 'Interminable means endless or seemingly without end.',
    clscore: 8,
  },
  {
    word: 'intimacy',
    question: "'Intimacy' most nearly means:",
    choices: ['closeness', 'distance', 'anger', 'formality'],
    answer: 'closeness',
    explanation: 'Intimacy means close familiarity or friendship.',
    clscore: 7,
  },
  {
    word: 'intrepid',
    question: "An 'intrepid' explorer is:",
    choices: ['fearless', 'afraid', 'weak', 'timid'],
    answer: 'fearless',
    explanation: 'Intrepid means fearless and adventurous.',
    clscore: 8,
  },
  {
    word: 'intrinsic',
    question: "'Intrinsic' most nearly means:",
    choices: ['essential', 'external', 'extra', 'superficial'],
    answer: 'essential',
    explanation: 'Intrinsic means belonging naturally, essential.',
    clscore: 8,
  },
  {
    word: 'invective',
    question: "'Invective' most nearly means:",
    choices: ['abusive language', 'praise', 'silence', 'honor'],
    answer: 'abusive language',
    explanation: 'Invective means insulting or abusive language.',
    clscore: 7,
  },
  {
    word: 'jargon',
    question: "Technical 'jargon' is:",
    choices: ['specialized language', 'music', 'noise', 'story'],
    answer: 'specialized language',
    explanation: 'Jargon means words used by a specific group or profession.',
    clscore: 8,
  },
  {
    word: 'jaundice',
    question: "If someone has 'jaundice', their skin may look:",
    choices: ['yellow', 'blue', 'red', 'pale'],
    answer: 'yellow',
    explanation: 'Jaundice means yellowing of the skin caused by illness.',
    clscore: 7,
  },
  {
    word: 'jibe',
    question: "To 'jibe' with something means to:",
    choices: ['agree', 'disagree', 'argue', 'oppose'],
    answer: 'agree',
    explanation: 'Jibe means to agree or be consistent with.',
    clscore: 7,
  },
  {
    word: 'jostle',
    question: "In a crowd, people may 'jostle' you, meaning they:",
    choices: ['push', 'hug', 'help', 'ignore'],
    answer: 'push',
    explanation: 'Jostle means to push or bump against roughly.',
    clscore: 7,
  },
  {
    word: 'juxtaposed',
    question: "'Juxtaposed' most nearly means:",
    choices: ['placed side by side', 'separated', 'hidden', 'removed'],
    answer: 'placed side by side',
    explanation: 'Juxtaposed means placed next to each other for contrast.',
    clscore: 6,
  },
  {
    word: 'keen',
    question: "A 'keen' sense of smell is:",
    choices: ['sharp', 'weak', 'dull', 'slow'],
    answer: 'sharp',
    explanation: 'Keen means sharp or highly developed.',
    clscore: 8,
  },
  {
    word: 'knack',
    question: 'He has a ___ for solving puzzles quickly.',
    choices: ['knack', 'weakness', 'problem', 'fear'],
    answer: 'knack',
    explanation: 'Knack means a special talent or skill.',
    clscore: 7,
  },
  {
    word: 'lampoon',
    question: "A 'lampoon' is:",
    choices: ['satire', 'praise', 'song', 'speech'],
    answer: 'satire',
    explanation: 'Lampoon means a written piece of strong satire.',
    clscore: 6,
  },
  {
    word: 'languish',
    question: "To 'languish' means to:",
    choices: ['weaken', 'grow', 'improve', 'prosper'],
    answer: 'weaken',
    explanation: 'Languish means to lose strength or become weak.',
    clscore: 7,
  },
  {
    word: 'lascivious',
    question: "'Lascivious' most nearly means:",
    choices: ['lustful', 'pure', 'innocent', 'calm'],
    answer: 'lustful',
    explanation:
      'Lascivious means showing strong or inappropriate sexual desire.',
    clscore: 6,
  },
  {
    word: 'latent',
    question: "'Latent' most nearly means:",
    choices: ['hidden', 'visible', 'open', 'obvious'],
    answer: 'hidden',
    explanation: 'Latent means existing but not yet developed or obvious.',
    clscore: 8,
  },
  {
    word: 'lethargic',
    question: "A 'lethargic' person feels:",
    choices: ['sluggish', 'energetic', 'active', 'alert'],
    answer: 'sluggish',
    explanation: 'Lethargic means tired or lacking energy.',
    clscore: 8,
  },
  {
    word: 'levy',
    question: "Governments often 'levy' taxes, meaning they:",
    choices: ['impose', 'remove', 'lower', 'avoid'],
    answer: 'impose',
    explanation: 'Levy means to impose a tax or fine.',
    clscore: 7,
  },
  {
    word: 'lexicon',
    question: "A 'lexicon' is:",
    choices: ['dictionary', 'poem', 'novel', 'encyclopedia'],
    answer: 'dictionary',
    explanation: 'Lexicon means the vocabulary of a language or a dictionary.',
    clscore: 7,
  },
  {
    word: 'liturgy',
    question: "'Liturgy' most nearly means:",
    choices: ['religious ritual', 'play', 'song', 'story'],
    answer: 'religious ritual',
    explanation: 'Liturgy means a form of public worship or ritual.',
    clscore: 6,
  },
  {
    word: 'loquacious',
    question: "A 'loquacious' student is:",
    choices: ['talkative', 'silent', 'shy', 'quiet'],
    answer: 'talkative',
    explanation: 'Loquacious means very talkative.',
    clscore: 7,
  },
  {
    word: 'lucid',
    question: "A 'lucid' explanation is:",
    choices: ['clear', 'confusing', 'uncertain', 'vague'],
    answer: 'clear',
    explanation: 'Lucid means easy to understand or very clear.',
    clscore: 8,
  },
  {
    word: 'magnanimous',
    question: "'Magnanimous' most nearly means:",
    choices: ['generous', 'selfish', 'cruel', 'mean'],
    answer: 'generous',
    explanation: 'Magnanimous means very generous and forgiving.',
    clscore: 8,
  },
  {
    word: 'malevolent',
    question: "A 'malevolent' person is:",
    choices: ['evil', 'kind', 'friendly', 'gentle'],
    answer: 'evil',
    explanation: 'Malevolent means wishing harm or evil on others.',
    clscore: 8,
  },
  {
    word: 'malign',
    question: "To 'malign' someone means:",
    choices: ['slander', 'praise', 'admire', 'respect'],
    answer: 'slander',
    explanation: 'Malign means to speak badly or slander.',
    clscore: 7,
  },
  {
    word: 'melodramatic',
    question: "'Melodramatic' most nearly means:",
    choices: ['overly emotional', 'calm', 'rational', 'serious'],
    answer: 'overly emotional',
    explanation: 'Melodramatic means exaggeratedly emotional or sentimental.',
    clscore: 7,
  },
  {
    word: 'mendicant',
    question: "A 'mendicant' is:",
    choices: ['beggar', 'teacher', 'merchant', 'farmer'],
    answer: 'beggar',
    explanation: 'Mendicant means a beggar or one who begs for a living.',
    clscore: 6,
  },
  {
    word: 'menial',
    question: "A 'menial' job is:",
    choices: ['lowly', 'prestigious', 'important', 'high-level'],
    answer: 'lowly',
    explanation: 'Menial means suitable for servants; low or degrading.',
    clscore: 7,
  },
  {
    word: 'mettle',
    question: "'Mettle' most nearly means:",
    choices: ['courage', 'fear', 'weakness', 'doubt'],
    answer: 'courage',
    explanation: 'Mettle means spirit or courage.',
    clscore: 7,
  },
  {
    word: 'monetary',
    question: 'Monetary policy relates to:',
    choices: ['money', 'food', 'law', 'travel'],
    answer: 'money',
    explanation: 'Monetary means relating to money or currency.',
    clscore: 8,
  },
  {
    word: 'myriad',
    question: "A 'myriad' of stars means:",
    choices: ['countless', 'few', 'one', 'ten'],
    answer: 'countless',
    explanation: 'Myriad means a countless or great number.',
    clscore: 8,
  },
  {
    word: 'narcissism',
    question: "'Narcissism' most nearly means:",
    choices: ['self-love', 'humility', 'kindness', 'modesty'],
    answer: 'self-love',
    explanation: 'Narcissism means excessive self-admiration.',
    clscore: 7,
  },
  {
    word: 'nativity',
    question: "'Nativity' most nearly means:",
    choices: ['birth', 'death', 'wedding', 'holiday'],
    answer: 'birth',
    explanation: 'Nativity means the occasion of birth.',
    clscore: 6,
  },
  {
    word: 'nebulous',
    question: "A 'nebulous' idea is:",
    choices: ['unclear', 'clear', 'simple', 'obvious'],
    answer: 'unclear',
    explanation: 'Nebulous means vague or unclear.',
    clscore: 8,
  },
  {
    word: 'neophyte',
    question: "A 'neophyte' is:",
    choices: ['beginner', 'expert', 'teacher', 'leader'],
    answer: 'beginner',
    explanation: 'Neophyte means a beginner or novice.',
    clscore: 7,
  },
  {
    word: 'notable',
    question: "A 'notable' event is:",
    choices: ['remarkable', 'ordinary', 'unimportant', 'trivial'],
    answer: 'remarkable',
    explanation: 'Notable means worthy of attention or remarkable.',
    clscore: 7,
  },
  {
    word: 'oblation',
    question: "In religious rituals, an 'oblation' is:",
    choices: ['offering', 'punishment', 'song', 'speech'],
    answer: 'offering',
    explanation: 'Oblation means an offering, often to a god.',
    clscore: 6,
  },
  {
    word: 'obscure',
    question: "'Obscure' most nearly means:",
    choices: ['unclear', 'clear', 'visible', 'obvious'],
    answer: 'unclear',
    explanation: 'Obscure means not clear or hard to understand.',
    clscore: 8,
  },
  {
    word: 'obsolescence',
    question: 'Obsolescence refers to:',
    choices: [
      'becoming outdated',
      'being modern',
      'growing new',
      'lasting forever',
    ],
    answer: 'becoming outdated',
    explanation:
      'Obsolescence means the process of becoming obsolete or outdated.',
    clscore: 8,
  },
  {
    word: 'occult',
    question: "The word 'occult' relates to:",
    choices: ['supernatural', 'science', 'nature', 'medicine'],
    answer: 'supernatural',
    explanation: 'Occult means relating to mysterious or supernatural forces.',
    clscore: 7,
  },
  {
    word: 'oligarchy',
    question: "An 'oligarchy' is government by:",
    choices: ['a few', 'one', 'many', 'the people'],
    answer: 'a few',
    explanation: 'Oligarchy means government ruled by a small group.',
    clscore: 7,
  },
  {
    word: 'omnipotent',
    question: "'Omnipotent' most nearly means:",
    choices: ['all-powerful', 'weak', 'limited', 'small'],
    answer: 'all-powerful',
    explanation: 'Omnipotent means having unlimited power.',
    clscore: 7,
  },
  {
    word: 'opulence',
    question: "The mansion's 'opulence' was shown by its:",
    choices: ['wealth', 'poverty', 'simplicity', 'plainness'],
    answer: 'wealth',
    explanation: 'Opulence means great wealth or luxury.',
    clscore: 7,
  },
  {
    word: 'ornate',
    question: "'Ornate' most nearly means:",
    choices: ['decorated', 'plain', 'simple', 'bare'],
    answer: 'decorated',
    explanation: 'Ornate means elaborately decorated.',
    clscore: 8,
  },
  {
    word: 'ostracize',
    question: "To 'ostracize' someone is to:",
    choices: ['exclude', 'welcome', 'praise', 'invite'],
    answer: 'exclude',
    explanation: 'Ostracize means to exclude or banish.',
    clscore: 8,
  },
  {
    word: 'palatable',
    question: "A 'palatable' meal is:",
    choices: ['tasty', 'disgusting', 'awful', 'inedible'],
    answer: 'tasty',
    explanation: 'Palatable means pleasant to the taste.',
    clscore: 8,
  },
  {
    word: 'palpable',
    question: "'Palpable' most nearly means:",
    choices: ['obvious', 'hidden', 'unclear', 'vague'],
    answer: 'obvious',
    explanation: 'Palpable means easily felt or obvious.',
    clscore: 8,
  },
  {
    word: 'panacea',
    question: "A 'panacea' is:",
    choices: ['cure-all', 'poison', 'disease', 'remedy'],
    answer: 'cure-all',
    explanation: 'Panacea means a universal remedy for all problems.',
    clscore: 8,
  },
  {
    word: 'parable',
    question: "A 'parable' is:",
    choices: ['moral story', 'song', 'poem', 'novel'],
    answer: 'moral story',
    explanation: 'Parable means a short story teaching a moral lesson.',
    clscore: 7,
  },
  {
    word: 'paradigm',
    question: "A 'paradigm' is:",
    choices: ['model', 'mistake', 'problem', 'error'],
    answer: 'model',
    explanation: 'Paradigm means an example or model.',
    clscore: 8,
  },
  {
    word: 'paradox',
    question: "A 'paradox' is a statement that:",
    choices: ['contradicts itself', 'makes sense', 'is obvious', 'is false'],
    answer: 'contradicts itself',
    explanation:
      'Paradox means a statement that seems self-contradictory but may be true.',
    clscore: 8,
  },
  {
    word: 'paragon',
    question: "She is a paragon of kindness. 'Paragon' means:",
    choices: ['model', 'failure', 'example', 'mistake'],
    answer: 'model',
    explanation: 'Paragon means a perfect model of excellence.',
    clscore: 7,
  },
  {
    word: 'parsimony',
    question: "'Parsimony' most nearly means:",
    choices: ['stinginess', 'generosity', 'waste', 'giving'],
    answer: 'stinginess',
    explanation: 'Parsimony means extreme unwillingness to spend money.',
    clscore: 5,
  },
  {
    word: 'pastoral',
    question: "A 'pastoral' scene is:",
    choices: ['rural', 'urban', 'industrial', 'crowded'],
    answer: 'rural',
    explanation: 'Pastoral means relating to the countryside or rural life.',
    clscore: 7,
  },
  {
    word: 'patriarch',
    question: "A 'patriarch' is:",
    choices: ['male leader', 'female leader', 'child', 'servant'],
    answer: 'male leader',
    explanation: 'Patriarch means the male head of a family or tribe.',
    clscore: 7,
  },
  {
    word: 'patrimony',
    question: "'Patrimony' most nearly means:",
    choices: ['inheritance', 'loan', 'gift', 'job'],
    answer: 'inheritance',
    explanation:
      "Patrimony means property inherited from one's father or ancestors.",
    clscore: 6,
  },
  {
    word: 'peccadillo',
    question: "A 'peccadillo' is:",
    choices: ['minor fault', 'crime', 'sin', 'habit'],
    answer: 'minor fault',
    explanation: 'Peccadillo means a small, minor offense.',
    clscore: 6,
  },
  {
    word: 'pectoral',
    question: "The word 'pectoral' relates to:",
    choices: ['chest', 'feet', 'hands', 'legs'],
    answer: 'chest',
    explanation: 'Pectoral means relating to the chest.',
    clscore: 6,
  },
  {
    word: 'perennial',
    question: "'Perennial' most nearly means:",
    choices: ['lasting', 'short-lived', 'seasonal', 'rare'],
    answer: 'lasting',
    explanation: 'Perennial means enduring or lasting for many years.',
    clscore: 8,
  },
  {
    word: 'periphery',
    question: "'Periphery' most nearly means:",
    choices: ['edge', 'center', 'core', 'inside'],
    answer: 'edge',
    explanation: 'Periphery means the outer edge or boundary.',
    clscore: 8,
  },
  {
    word: 'perpetrate',
    question: "To 'perpetrate' a crime means to:",
    choices: ['commit', 'avoid', 'stop', 'hide'],
    answer: 'commit',
    explanation:
      'Perpetrate means to commit an act, usually something harmful.',
    clscore: 7,
  },
  {
    word: 'perturbation',
    question: "'Perturbation' most nearly means:",
    choices: ['disturbance', 'calm', 'peace', 'silence'],
    answer: 'disturbance',
    explanation: 'Perturbation means a state of anxiety or disturbance.',
    clscore: 7,
  },
  {
    word: 'philanthropist',
    question: "A 'philanthropist' is someone who:",
    choices: ['helps others', 'hoards money', 'writes books', 'leads armies'],
    answer: 'helps others',
    explanation:
      'Philanthropist means a person who gives to charity and loves humanity.',
    clscore: 7,
  },
  {
    word: 'phlegmatic',
    question: "A 'phlegmatic' person is:",
    choices: ['calm', 'excitable', 'energetic', 'wild'],
    answer: 'calm',
    explanation: 'Phlegmatic means not easily excited, calm, or unemotional.',
    clscore: 7,
  },
  {
    word: 'pinnacle',
    question: "Reaching the 'pinnacle' of success means:",
    choices: ['peak', 'start', 'decline', 'valley'],
    answer: 'peak',
    explanation: 'Pinnacle means the highest point or peak.',
    clscore: 7,
  },
  {
    word: 'placid',
    question: "A 'placid' lake is:",
    choices: ['calm', 'stormy', 'rough', 'dangerous'],
    answer: 'calm',
    explanation: 'Placid means peaceful and calm.',
    clscore: 8,
  },
  {
    word: 'plaintiff',
    question: "In a court case, the 'plaintiff' is the one who:",
    choices: ['complains', 'judges', 'defends', 'punishes'],
    answer: 'complains',
    explanation:
      'Plaintiff means the person who brings a case against another in court.',
    clscore: 8,
  },
  {
    word: 'poignant',
    question: "'Poignant' most nearly means:",
    choices: ['emotionally moving', 'boring', 'funny', 'dull'],
    answer: 'emotionally moving',
    explanation: 'Poignant means deeply touching or moving emotionally.',
    clscore: 8,
  },
  {
    word: 'portly',
    question: "A 'portly' man is:",
    choices: ['fat', 'thin', 'tall', 'short'],
    answer: 'fat',
    explanation: 'Portly means somewhat fat and dignified in appearance.',
    clscore: 7,
  },
  {
    word: 'potent',
    question: "'Potent' most nearly means:",
    choices: ['powerful', 'weak', 'harmless', 'small'],
    answer: 'powerful',
    explanation: 'Potent means having great power or effect.',
    clscore: 8,
  },
  {
    word: 'precarious',
    question: "A 'precarious' situation is:",
    choices: ['risky', 'safe', 'easy', 'secure'],
    answer: 'risky',
    explanation: 'Precarious means not secure, risky, or dangerous.',
    clscore: 8,
  },
  {
    word: 'preclude',
    question: "To 'preclude' something means to:",
    choices: ['prevent', 'allow', 'start', 'encourage'],
    answer: 'prevent',
    explanation: 'Preclude means to make something impossible or prevent it.',
    clscore: 8,
  },
  {
    word: 'precursor',
    question: "A 'precursor' is:",
    choices: ['forerunner', 'ending', 'replacement', 'failure'],
    answer: 'forerunner',
    explanation: 'Precursor means something that comes before another.',
    clscore: 8,
  },
  {
    word: 'prelude',
    question: "A 'prelude' is:",
    choices: ['introduction', 'ending', 'summary', 'conclusion'],
    answer: 'introduction',
    explanation: 'Prelude means an introduction or opening.',
    clscore: 7,
  },
  {
    word: 'prodigal',
    question: "A 'prodigal' lifestyle is:",
    choices: ['wasteful', 'frugal', 'modest', 'simple'],
    answer: 'wasteful',
    explanation: 'Prodigal means spending money or resources wastefully.',
    clscore: 8,
  },
  {
    word: 'prodigious',
    question: "'Prodigious' most nearly means:",
    choices: ['huge', 'tiny', 'weak', 'average'],
    answer: 'huge',
    explanation: 'Prodigious means remarkably large in size or extent.',
    clscore: 8,
  },
  {
    word: 'profuse',
    question: "'Profuse' most nearly means:",
    choices: ['abundant', 'scarce', 'rare', 'limited'],
    answer: 'abundant',
    explanation: 'Profuse means plentiful or abundant.',
    clscore: 8,
  },
  {
    word: 'prolific',
    question: "A 'prolific' writer is:",
    choices: ['productive', 'lazy', 'silent', 'unmotivated'],
    answer: 'productive',
    explanation: 'Prolific means producing much work or results.',
    clscore: 8,
  },
  {
    word: 'propensity',
    question: "'Propensity' most nearly means:",
    choices: ['inclination', 'rejection', 'confusion', 'avoidance'],
    answer: 'inclination',
    explanation: 'Propensity means a natural tendency or preference.',
    clscore: 8,
  },
  {
    word: 'proximity',
    question: "Living in close 'proximity' means:",
    choices: ['nearness', 'distance', 'separation', 'space'],
    answer: 'nearness',
    explanation: 'Proximity means closeness in distance or relationship.',
    clscore: 8,
  },
  {
    word: 'pugnacious',
    question: "A 'pugnacious' person is:",
    choices: ['quarrelsome', 'peaceful', 'shy', 'gentle'],
    answer: 'quarrelsome',
    explanation: 'Pugnacious means eager to fight or argue.',
    clscore: 8,
  },
  {
    word: 'pulchritude',
    question: "'Pulchritude' most nearly means:",
    choices: ['beauty', 'ugliness', 'strength', 'intelligence'],
    answer: 'beauty',
    explanation: 'Pulchritude means physical beauty.',
    clscore: 6,
  },
  {
    word: 'pungent',
    question: "A 'pungent' smell is:",
    choices: ['sharp', 'mild', 'sweet', 'bland'],
    answer: 'sharp',
    explanation: 'Pungent means having a strong, sharp taste or smell.',
    clscore: 8,
  },
  {
    word: 'punitive',
    question: "'Punitive' most nearly means:",
    choices: ['punishing', 'rewarding', 'forgiving', 'relaxing'],
    answer: 'punishing',
    explanation: 'Punitive means intended to punish.',
    clscore: 8,
  },
  {
    word: 'purge',
    question: "To 'purge' means to:",
    choices: ['cleanse', 'pollute', 'hide', 'damage'],
    answer: 'cleanse',
    explanation: 'Purge means to remove impurities or unwanted elements.',
    clscore: 8,
  },
  {
    word: 'qualms',
    question: "'Qualms' most nearly means:",
    choices: ['doubts', 'confidence', 'joy', 'certainty'],
    answer: 'doubts',
    explanation: 'Qualms means feelings of doubt or uneasiness.',
    clscore: 8,
  },
  {
    word: 'quell',
    question: "To 'quell' a riot means to:",
    choices: ['put down', 'encourage', 'start', 'ignore'],
    answer: 'put down',
    explanation: 'Quell means to suppress or put an end to.',
    clscore: 8,
  },
  {
    word: 'quench',
    question: "To 'quench' thirst means to:",
    choices: ['satisfy', 'increase', 'ignore', 'cause'],
    answer: 'satisfy',
    explanation: 'Quench means to satisfy or extinguish.',
    clscore: 6,
  },
  {
    word: 'rampant',
    question: "'Rampant' most nearly means:",
    choices: ['unchecked', 'controlled', 'small', 'limited'],
    answer: 'unchecked',
    explanation: 'Rampant means spreading unchecked or unrestrained.',
    clscore: 8,
  },
  {
    word: 'rapacious',
    question: "A 'rapacious' animal is:",
    choices: ['greedy', 'gentle', 'calm', 'peaceful'],
    answer: 'greedy',
    explanation: 'Rapacious means aggressively greedy or grasping.',
    clscore: 7,
  },
  {
    word: 'recalcitrant',
    question: "'Recalcitrant' most nearly means:",
    choices: ['stubborn', 'obedient', 'compliant', 'flexible'],
    answer: 'stubborn',
    explanation: 'Recalcitrant means resistant to authority or control.',
    clscore: 8,
  },
  {
    word: 'recant',
    question: "To 'recant' a statement means to:",
    choices: ['take it back', 'repeat it', 'defend it', 'write it'],
    answer: 'take it back',
    explanation: 'Recant means to withdraw or take back a statement.',
    clscore: 8,
  },
  {
    word: 'repudiate',
    question: "To 'repudiate' an idea is to:",
    choices: ['reject', 'accept', 'support', 'approve'],
    answer: 'reject',
    explanation: 'Repudiate means to refuse to accept or reject strongly.',
    clscore: 8,
  },
  {
    word: 'reciprocal',
    question: "'Reciprocal' most nearly means:",
    choices: ['mutual', 'one-sided', 'different', 'opposite'],
    answer: 'mutual',
    explanation: 'Reciprocal means given or felt by both sides.',
    clscore: 7,
  },
  {
    word: 'recluse',
    question: "A 'recluse' is:",
    choices: ['hermit', 'leader', 'traveler', 'speaker'],
    answer: 'hermit',
    explanation: 'Recluse means a person who lives in isolation.',
    clscore: 7,
  },
  {
    word: 'rectitude',
    question: "'Rectitude' most nearly means:",
    choices: ['morality', 'dishonesty', 'fear', 'doubt'],
    answer: 'morality',
    explanation: 'Rectitude means righteousness or moral integrity.',
    clscore: 7,
  },
  {
    word: 'relegate',
    question: "To 'relegate' someone is to:",
    choices: ['demote', 'promote', 'reward', 'praise'],
    answer: 'demote',
    explanation: 'Relegate means to assign to a lower position.',
    clscore: 8,
  },
  {
    word: 'relinquish',
    question: "To 'relinquish' power means to:",
    choices: ['give up', 'take', 'keep', 'gain'],
    answer: 'give up',
    explanation: 'Relinquish means to surrender or abandon.',
    clscore: 8,
  },
  {
    word: 'renegade',
    question: "A 'renegade' is:",
    choices: ['rebel', 'supporter', 'friend', 'citizen'],
    answer: 'rebel',
    explanation: 'Renegade means a deserter or rebel.',
    clscore: 8,
  },
  {
    word: 'reprehensible',
    question: "'Reprehensible' most nearly means:",
    choices: ['blameworthy', 'praiseworthy', 'good', 'innocent'],
    answer: 'blameworthy',
    explanation: 'Reprehensible means deserving blame or punishment.',
    clscore: 8,
  },
  {
    word: 'requisite',
    question: "A 'requisite' skill is:",
    choices: ['necessary', 'optional', 'extra', 'unwanted'],
    answer: 'necessary',
    explanation: 'Requisite means required or necessary.',
    clscore: 8,
  },
  {
    word: 'rescind',
    question: "To 'rescind' a law means to:",
    choices: ['cancel', 'enforce', 'start', 'approve'],
    answer: 'cancel',
    explanation: 'Rescind means to revoke or cancel.',
    clscore: 8,
  },
  {
    word: 'resolute',
    question: "A 'resolute' leader is:",
    choices: ['determined', 'weak', 'uncertain', 'hesitant'],
    answer: 'determined',
    explanation: 'Resolute means firm and determined.',
    clscore: 8,
  },
  {
    word: 'respite',
    question: "A 'respite' is:",
    choices: ['break', 'continuation', 'punishment', 'task'],
    answer: 'break',
    explanation: 'Respite means a short period of rest or relief.',
    clscore: 8,
  },
  {
    word: 'reticence',
    question: "If someone shows 'reticence', they:",
    choices: ['stay silent', 'speak often', 'complain', 'boast'],
    answer: 'stay silent',
    explanation: 'Reticence means unwillingness to speak.',
    clscore: 8,
  },
  {
    word: 'rotundity',
    question: "'Rotundity' most nearly means:",
    choices: ['roundness', 'thinness', 'flatness', 'sharpness'],
    answer: 'roundness',
    explanation: 'Rotundity means being round in shape.',
    clscore: 6,
  },
  {
    word: 'scathing',
    question: "A 'scathing' remark is:",
    choices: ['harsh', 'gentle', 'kind', 'mild'],
    answer: 'harsh',
    explanation: 'Scathing means severely critical.',
    clscore: 8,
  },
  {
    word: 'scintillate',
    question: "'Scintillate' most nearly means:",
    choices: ['sparkle', 'fade', 'dull', 'hide'],
    answer: 'sparkle',
    explanation: 'Scintillate means to shine or sparkle brightly.',
    clscore: 8,
  },
  {
    word: 'scourge',
    question: "A 'scourge' can refer to:",
    choices: ['whip', 'gift', 'reward', 'comfort'],
    answer: 'whip',
    explanation: 'Scourge means a whip or something causing great suffering.',
    clscore: 7,
  },
  {
    word: 'scrupulous',
    question: "A 'scrupulous' worker is:",
    choices: ['honest', 'careless', 'lazy', 'dishonest'],
    answer: 'honest',
    explanation:
      'Scrupulous means acting with integrity and attention to detail.',
    clscore: 8,
  },
  {
    word: 'secular',
    question: "'Secular' most nearly means:",
    choices: ['worldly', 'religious', 'holy', 'sacred'],
    answer: 'worldly',
    explanation: 'Secular means not connected with religion.',
    clscore: 8,
  },
  {
    word: 'sedate',
    question: "To 'sedate' a patient is to:",
    choices: ['calm', 'excite', 'anger', 'wake'],
    answer: 'calm',
    explanation: 'Sedate means to make calm, often with medication.',
    clscore: 8,
  },
  {
    word: 'sedentary',
    question: "A 'sedentary' lifestyle is:",
    choices: ['inactive', 'active', 'energetic', 'busy'],
    answer: 'inactive',
    explanation: 'Sedentary means involving little physical activity.',
    clscore: 8,
  },
  {
    word: 'semblance',
    question: "A 'semblance' of truth means:",
    choices: ['appearance', 'certainty', 'lie', 'proof'],
    answer: 'appearance',
    explanation: 'Semblance means an outward appearance.',
    clscore: 8,
  },
  {
    word: 'serrated',
    question: "A 'serrated' knife has:",
    choices: ['saw-like edge', 'smooth edge', 'curved tip', 'round handle'],
    answer: 'saw-like edge',
    explanation: 'Serrated means having a notched or saw-like edge.',
    clscore: 6,
  },
  {
    word: 'sporadic',
    question: "'Sporadic' most nearly means:",
    choices: ['occasional', 'constant', 'regular', 'frequent'],
    answer: 'occasional',
    explanation: 'Sporadic means occurring irregularly or infrequently.',
    clscore: 8,
  },
  {
    word: 'stalwart',
    question: "A 'stalwart' supporter is:",
    choices: ['loyal', 'weak', 'casual', 'uncertain'],
    answer: 'loyal',
    explanation: 'Stalwart means strong, loyal, and dependable.',
    clscore: 8,
  },
  {
    word: 'stringent',
    question: "'Stringent' most nearly means:",
    choices: ['strict', 'loose', 'easy', 'weak'],
    answer: 'strict',
    explanation: 'Stringent means very strict or severe.',
    clscore: 8,
  },
  {
    word: 'stupor',
    question: "After the accident, he was in a 'stupor', meaning:",
    choices: ['daze', 'alertness', 'joy', 'clarity'],
    answer: 'daze',
    explanation:
      'Stupor means a state of near unconsciousness or insensibility.',
    clscore: 8,
  },
  {
    word: 'succinct',
    question: "A 'succinct' speech is:",
    choices: ['brief', 'long', 'confusing', 'boring'],
    answer: 'brief',
    explanation: 'Succinct means expressed clearly and briefly.',
    clscore: 8,
  },
  {
    word: 'sultry',
    question: "'Sultry' weather is:",
    choices: ['hot and humid', 'cold and dry', 'rainy', 'windy'],
    answer: 'hot and humid',
    explanation: 'Sultry means very hot and humid.',
    clscore: 8,
  },
  {
    word: 'sweltered',
    question: "During the heatwave, people 'sweltered', meaning they:",
    choices: ['sweated', 'froze', 'rested', 'played'],
    answer: 'sweated',
    explanation: 'Sweltered means suffered from extreme heat.',
    clscore: 6,
  },
  {
    word: 'taboo',
    question: "Something 'taboo' is:",
    choices: ['forbidden', 'allowed', 'common', 'encouraged'],
    answer: 'forbidden',
    explanation: 'Taboo means prohibited or socially unacceptable.',
    clscore: 8,
  },
  {
    word: 'taciturn',
    question: "A 'taciturn' person is:",
    choices: ['silent', 'talkative', 'friendly', 'chatty'],
    answer: 'silent',
    explanation: 'Taciturn means reserved or saying little.',
    clscore: 8,
  },
  {
    word: 'tactile',
    question: "'Tactile' relates to the sense of:",
    choices: ['touch', 'sight', 'sound', 'taste'],
    answer: 'touch',
    explanation: 'Tactile means related to the sense of touch.',
    clscore: 8,
  },
  {
    word: 'tantalize',
    question: "To 'tantalize' someone is to:",
    choices: ['tease', 'comfort', 'ignore', 'reward'],
    answer: 'tease',
    explanation: 'Tantalize means to tease or torment with something desired.',
    clscore: 7,
  },
  {
    word: 'temerity',
    question: "'Temerity' most nearly means:",
    choices: ['boldness', 'timidity', 'fear', 'shyness'],
    answer: 'boldness',
    explanation: 'Temerity means reckless boldness.',
    clscore: 7,
  },
  {
    word: 'tenacious',
    question: "A 'tenacious' student is:",
    choices: ['persistent', 'lazy', 'forgetful', 'distracted'],
    answer: 'persistent',
    explanation: 'Tenacious means holding firmly or being very determined.',
    clscore: 8,
  },
  {
    word: 'terse',
    question: "A 'terse' reply is:",
    choices: ['concise', 'lengthy', 'unclear', 'confusing'],
    answer: 'concise',
    explanation: 'Terse means brief and to the point.',
    clscore: 8,
  },
  {
    word: 'thwart',
    question: "To 'thwart' a plan means to:",
    choices: ['block', 'support', 'finish', 'start'],
    answer: 'block',
    explanation: 'Thwart means to prevent someone from doing something.',
    clscore: 8,
  },
  {
    word: 'tirade',
    question: "A 'tirade' is:",
    choices: ['angry speech', 'short poem', 'kind praise', 'song'],
    answer: 'angry speech',
    explanation: 'Tirade means a long, angry speech.',
    clscore: 8,
  },
  {
    word: 'transcend',
    question: "To 'transcend' limits means to:",
    choices: ['go beyond', 'accept', 'ignore', 'lower'],
    answer: 'go beyond',
    explanation: 'Transcend means to rise above or exceed.',
    clscore: 8,
  },
  {
    word: 'transcribe',
    question: "To 'transcribe' a lecture is to:",
    choices: ['write it down', 'ignore it', 'sing it', 'erase it'],
    answer: 'write it down',
    explanation: 'Transcribe means to make a written copy of spoken words.',
    clscore: 8,
  },
  {
    word: 'transient',
    question: "A 'transient' visitor is:",
    choices: ['temporary', 'permanent', 'local', 'long-term'],
    answer: 'temporary',
    explanation: 'Transient means lasting only for a short time.',
    clscore: 8,
  },
  {
    word: 'transmute',
    question: "To 'transmute' a substance is to:",
    choices: ['change it', 'burn it', 'hide it', 'break it'],
    answer: 'change it',
    explanation: 'Transmute means to transform in form or nature.',
    clscore: 8,
  },
  {
    word: 'travail',
    question: "The word 'travail' refers to:",
    choices: ['hard work', 'vacation', 'relaxation', 'holiday'],
    answer: 'hard work',
    explanation: 'Travail means painful or laborious effort.',
    clscore: 6,
  },
  {
    word: 'trite',
    question: "A 'trite' phrase is:",
    choices: ['overused', 'fresh', 'unique', 'rare'],
    answer: 'overused',
    explanation: 'Trite means unoriginal or worn out.',
    clscore: 8,
  },
  {
    word: 'turgid',
    question: "The river was 'turgid', meaning it was:",
    choices: ['swollen', 'dry', 'clear', 'calm'],
    answer: 'swollen',
    explanation: 'Turgid means swollen or distended.',
    clscore: 6,
  },
  {
    word: 'ubiquitous',
    question: "'Ubiquitous' technology like smartphones means they are:",
    choices: ['everywhere', 'rare', 'hidden', 'expensive'],
    answer: 'everywhere',
    explanation: 'Ubiquitous means present everywhere.',
    clscore: 8,
  },
  {
    word: 'uncouth',
    question: "An 'uncouth' person is:",
    choices: ['rude', 'polite', 'elegant', 'kind'],
    answer: 'rude',
    explanation: 'Uncouth means lacking good manners or grace.',
    clscore: 6,
  },
  {
    word: 'undulate',
    question: "To 'undulate' is to:",
    choices: ['move in waves', 'stay still', 'shrink', 'jump'],
    answer: 'move in waves',
    explanation: 'Undulate means to move with a wavelike motion.',
    clscore: 8,
  },
  {
    word: 'unequivocal',
    question: "'Unequivocal' support means it is:",
    choices: ['clear', 'doubtful', 'hidden', 'uncertain'],
    answer: 'clear',
    explanation: 'Unequivocal means leaving no doubt.',
    clscore: 8,
  },
  {
    word: 'untenable',
    question: "An 'untenable' argument is:",
    choices: ['unsupportable', 'convincing', 'strong', 'reasonable'],
    answer: 'unsupportable',
    explanation: 'Untenable means not able to be defended.',
    clscore: 8,
  },
  {
    word: 'urbane',
    question: "An 'urbane' gentleman is:",
    choices: ['refined', 'rude', 'ignorant', 'rough'],
    answer: 'refined',
    explanation: 'Urbane means suave and courteous.',
    clscore: 8,
  },
  {
    word: 'vacillation',
    question: "His 'vacillation' showed he was:",
    choices: ['indecisive', 'certain', 'strong', 'firm'],
    answer: 'indecisive',
    explanation: 'Vacillation means wavering between choices.',
    clscore: 8,
  },
  {
    word: 'validate',
    question: "To 'validate' a claim is to:",
    choices: ['confirm it', 'deny it', 'question it', 'ignore it'],
    answer: 'confirm it',
    explanation: 'Validate means to confirm or approve.',
    clscore: 8,
  },
  {
    word: 'vanguard',
    question: "The 'vanguard' of an army is:",
    choices: ['front', 'rear', 'middle', 'side'],
    answer: 'front',
    explanation: 'Vanguard means the leading part of an army or movement.',
    clscore: 8,
  },
  {
    word: 'vantage',
    question: "From a 'vantage' point you have:",
    choices: ['advantage', 'problem', 'loss', 'confusion'],
    answer: 'advantage',
    explanation: 'Vantage means a position of advantage or view.',
    clscore: 8,
  },
  {
    word: 'vapid',
    question: "A 'vapid' movie is:",
    choices: ['dull', 'exciting', 'funny', 'thrilling'],
    answer: 'dull',
    explanation: 'Vapid means boring or lacking liveliness.',
    clscore: 8,
  },
  {
    word: 'variegated',
    question: "'Variegated' leaves are:",
    choices: ['multi-colored', 'plain', 'uniform', 'dull'],
    answer: 'multi-colored',
    explanation: 'Variegated means having patches of different colors.',
    clscore: 8,
  },
  {
    word: 'vehement',
    question: "A 'vehement' protest is:",
    choices: ['forceful', 'weak', 'silent', 'gentle'],
    answer: 'forceful',
    explanation: 'Vehement means showing strong feeling or intensity.',
    clscore: 8,
  },
  {
    word: 'venial',
    question: "A 'venial' fault is:",
    choices: ['forgivable', 'serious', 'deadly', 'grave'],
    answer: 'forgivable',
    explanation: 'Venial means easily excused or pardonable.',
    clscore: 8,
  },
  {
    word: 'verbose',
    question: "A 'verbose' essay is:",
    choices: ['wordy', 'brief', 'clear', 'short'],
    answer: 'wordy',
    explanation: 'Verbose means using too many words.',
    clscore: 8,
  },
  {
    word: 'verdant',
    question: "A 'verdant' field is:",
    choices: ['green', 'dry', 'barren', 'rocky'],
    answer: 'green',
    explanation: 'Verdant means green with vegetation.',
    clscore: 8,
  },
  {
    word: 'vertigo',
    question: "People with 'vertigo' feel:",
    choices: ['dizzy', 'hungry', 'angry', 'happy'],
    answer: 'dizzy',
    explanation: 'Vertigo means a sensation of dizziness.',
    clscore: 8,
  },
  {
    word: 'vestige',
    question: "A 'vestige' of an old castle is:",
    choices: ['trace', 'new part', 'ruin', 'treasure'],
    answer: 'trace',
    explanation:
      'Vestige means a small remaining part of something that once existed.',
    clscore: 8,
  },
  {
    word: 'vicarious',
    question:
      "Watching sports gives some people 'vicarious' excitement, meaning:",
    choices: [
      'experienced through others',
      'directly lived',
      'boring',
      'unreal',
    ],
    answer: 'experienced through others',
    explanation:
      "Vicarious means felt or enjoyed through imagined participation in others' experiences.",
    clscore: 8,
  },
  {
    word: 'vigilance',
    question: "'Vigilance' most nearly means:",
    choices: ['watchfulness', 'sleepiness', 'carelessness', 'weakness'],
    answer: 'watchfulness',
    explanation:
      'Vigilance means keeping careful watch for danger or difficulties.',
    clscore: 8,
  },
  {
    word: 'vindicate',
    question: "To 'vindicate' someone is to:",
    choices: ['clear from blame', 'accuse', 'punish', 'reject'],
    answer: 'clear from blame',
    explanation: 'Vindicate means to justify or clear someone of blame.',
    clscore: 8,
  },
  {
    word: 'virile',
    question: "A 'virile' man is:",
    choices: ['manly', 'weak', 'timid', 'frail'],
    answer: 'manly',
    explanation:
      'Virile means having traditionally masculine strength or energy.',
    clscore: 8,
  },
  {
    word: 'virtuoso',
    question: "A piano 'virtuoso' is:",
    choices: ['skilled artist', 'beginner', 'critic', 'teacher'],
    answer: 'skilled artist',
    explanation:
      'Virtuoso means a person highly skilled in an art, especially music.',
    clscore: 8,
  },
  {
    word: 'virulent',
    question: "A 'virulent' disease is:",
    choices: ['deadly', 'mild', 'healing', 'curable'],
    answer: 'deadly',
    explanation: 'Virulent means extremely harmful or hostile.',
    clscore: 8,
  },
  {
    word: 'viscous',
    question: "A 'viscous' liquid is:",
    choices: ['thick', 'thin', 'watery', 'clear'],
    answer: 'thick',
    explanation: 'Viscous means having a sticky, thick consistency.',
    clscore: 8,
  },
  {
    word: 'vitality',
    question: "The runner showed great 'vitality', meaning:",
    choices: ['energy', 'sadness', 'laziness', 'weakness'],
    answer: 'energy',
    explanation: 'Vitality means strong energy and liveliness.',
    clscore: 8,
  },
  {
    word: 'vivacious',
    question: "A 'vivacious' person is:",
    choices: ['lively', 'quiet', 'dull', 'serious'],
    answer: 'lively',
    explanation: 'Vivacious means attractively lively and animated.',
    clscore: 8,
  },
  {
    word: 'volatile',
    question: "A 'volatile' situation is:",
    choices: ['unstable', 'calm', 'peaceful', 'secure'],
    answer: 'unstable',
    explanation: 'Volatile means likely to change suddenly, often dangerously.',
    clscore: 8,
  },
  {
    word: 'voluble',
    question: "A 'voluble' speaker is:",
    choices: ['talkative', 'silent', 'confused', 'shy'],
    answer: 'talkative',
    explanation: 'Voluble means speaking easily and at length.',
    clscore: 8,
  },
  {
    word: 'voracious',
    question: "A 'voracious' reader is:",
    choices: ['eager', 'reluctant', 'lazy', 'uninterested'],
    answer: 'eager',
    explanation:
      'Voracious means having a huge appetite or enthusiasm for something.',
    clscore: 8,
  },
  {
    word: 'warp',
    question: "To 'warp' wood is to:",
    choices: ['twist', 'straighten', 'cut', 'burn'],
    answer: 'twist',
    explanation: 'Warp means to bend or twist out of shape.',
    clscore: 8,
  },
  {
    word: 'winsome',
    question: "A 'winsome' smile is:",
    choices: ['charming', 'ugly', 'serious', 'sad'],
    answer: 'charming',
    explanation: 'Winsome means appealing or attractive.',
    clscore: 8,
  },
  {
    word: 'wreak',
    question: "To 'wreak' havoc is to:",
    choices: ['inflict', 'repair', 'avoid', 'ignore'],
    answer: 'inflict',
    explanation: 'Wreak means to cause or inflict damage.',
    clscore: 8,
  },
  {
    word: 'wrest',
    question: "To 'wrest' power is to:",
    choices: ['take by force', 'give up', 'request politely', 'share'],
    answer: 'take by force',
    explanation: 'Wrest means to seize something with effort or violence.',
    clscore: 8,
  },
  {
    word: 'zenith',
    question: "The 'zenith' of a career is its:",
    choices: ['peak', 'beginning', 'end', 'failure'],
    answer: 'peak',
    explanation: 'Zenith means the highest point or peak.',
    clscore: 8,
  },
];

const wordScores = [
  {
    word: 'adverse',
    question:
      "After the storm, the climbers had to turn back due to the adverse weather conditions. What does 'adverse' mean in this context?",
    choices: ['unfavorable', 'sudden', 'predictable', 'calm'],
    answer: 'unfavorable',
    explanation:
      "In this sentence, 'adverse' describes the negative nature of the weather conditions that forced the climbers to retreat. It means unfavorable or harmful.",
    clscore: 8,
  },
  {
    word: 'advocate',
    question:
      "As a strong advocate for animal rights, she frequently speaks at public rallies and lobbies for new legislation. What does 'advocate' mean?",
    choices: [
      'one who rejects a cause',
      'one who recommends or supports a cause',
      'a person who is hated',
      'a person who is ignored',
    ],
    answer: 'one who recommends or supports a cause',
    explanation:
      "An 'advocate' is someone who publicly recommends or supports a particular policy or cause, which fits the description of her actions at rallies and for legislation.",
    clscore: 8,
  },
  {
    word: 'affinity',
    question:
      "From the moment they met, they felt a natural affinity for each other, sharing many similar interests and a passion for hiking. What does 'affinity' mean?",
    choices: [
      'a strong dislike',
      'a natural attraction or liking',
      'a state of indifference',
      'a feeling of distance',
    ],
    answer: 'a natural attraction or liking',
    explanation:
      "In this context, 'affinity' describes the immediate and natural connection between two people, which is a feeling of attraction or liking.",
    clscore: 8,
  },
  {
    word: 'anarchy',
    question:
      'The sudden collapse of the government led to a state of anarchy, where there were no laws or public order. Fill in the blank with the best choice.',
    choices: ['anarchy', 'peace', 'unity', 'prosperity'],
    answer: 'anarchy',
    explanation:
      "The context describes a situation where a government's collapse results in a lack of law and order, which is the definition of 'anarchy'.",
    clscore: 8,
  },
  {
    word: 'anomaly',
    question:
      "The result was a statistical anomaly; it was so different from the other data points that scientists had to re-run the entire experiment. What does 'anomaly' mean?",
    choices: [
      'an irregularity or deviation from the norm',
      'a consistent pattern',
      'a predictable outcome',
      'a regular routine',
    ],
    answer: 'an irregularity or deviation from the norm',
    explanation:
      "An 'anomaly' is something that deviates from what is standard, normal, or expected, as is the case with a statistical result that is unlike all others.",
    clscore: 8,
  },
  {
    word: 'augment',
    question:
      "He took a second job in the evenings to augment his income and save for a new car. What does 'augment' mean?",
    choices: [
      'to increase or make greater',
      'to lessen or decrease',
      'to hide from others',
      'to waste time',
    ],
    answer: 'to increase or make greater',
    explanation:
      "To 'augment' income means to add to it or increase it, which is the purpose of taking a second job.",
    clscore: 8,
  },
  {
    word: 'auspicious',
    question:
      "The clear sky and perfect weather on the morning of their wedding felt like an auspicious start to their new life together. What does 'auspicious' mean?",
    choices: [
      'promising success; favorable',
      'unfortunate; disastrous',
      'full of doubt',
      'predictably boring',
    ],
    answer: 'promising success; favorable',
    explanation:
      "An 'auspicious' event is one that suggests a positive and successful future, as the clear weather seemed to promise a good future for the wedding.",
    clscore: 8,
  },
  {
    word: 'authoritative',
    question:
      "The university's new report on climate change is considered the most authoritative source on the subject, widely cited by other researchers. What does 'authoritative' mean?",
    choices: [
      'commanding respect due to expertise',
      'lacking in credibility',
      'full of uncertainty',
      'shy and timid',
    ],
    answer: 'commanding respect due to expertise',
    explanation:
      "'Authoritative' refers to a source that is seen as reliable and trustworthy because of its expertise and command of the subject.",
    clscore: 8,
  },
  {
    word: 'autonomy',
    question:
      "The remote tribe fought for autonomy, seeking the right to govern themselves without interference from the central government. What does 'autonomy' mean?",
    choices: [
      'the right of self-government',
      'a state of chaos',
      'dependence on a ruler',
      'a state of poverty',
    ],
    answer: 'the right of self-government',
    explanation:
      "'Autonomy' is the right or condition of self-government, which is what the tribe was fighting for against the central government.",
    clscore: 8,
  },
  {
    word: 'benign',
    question:
      "The doctor assured me that the lump was benign and not a cause for concern. What does 'benign' mean?",
    choices: [
      'harmless; not dangerous',
      'aggressive and dangerous',
      'requiring immediate surgery',
      'toxic and deadly',
    ],
    answer: 'harmless; not dangerous',
    explanation:
      "In a medical context, a 'benign' growth is one that is not harmful or cancerous, meaning it is not a threat.",
    clscore: 8,
  },
  {
    word: 'blatant',
    question:
      "His blatant disrespect for the rules was obvious to everyone; he broke them without any attempt to hide his actions. What does 'blatant' mean?",
    choices: [
      'obviously and offensively loud',
      'quiet and reserved',
      'unclear or hidden',
      'difficult to see',
    ],
    answer: 'obviously and offensively loud',
    explanation:
      'Blatant describes an action that is done in an open and unashamed way, so it is obvious to all.',
    clscore: 8,
  },
  {
    word: 'bureaucracy',
    question:
      "Dealing with the city's bureaucracy can be frustrating due to the numerous forms and departments you have to go through to get a simple permit. What does 'bureaucracy' mean?",
    choices: [
      'a system of government with multiple departments',
      'a dictatorship with one ruler',
      'a simple and quick process',
      'a democratic election',
    ],
    answer: 'a system of government with multiple departments',
    explanation:
      "'Bureaucracy' refers to a system of government or administration run by a complex network of departments and officials, often associated with a lot of paperwork and rules.",
    clscore: 8,
  },
  {
    word: 'carnage',
    question:
      "The battlefield was a scene of pure carnage after the long and bloody battle. What does 'carnage' mean?",
    choices: [
      'a great slaughter of people',
      'a peaceful victory celebration',
      'a complex strategic plan',
      'a heroic game or sport',
    ],
    answer: 'a great slaughter of people',
    explanation:
      "'Carnage' refers to the killing of a large number of people, as would be the result of a bloody battle.",
    clscore: 8,
  },
  {
    word: 'chronicle',
    question:
      "The historian's book is a detailed chronicle of the events leading up to the war, arranged in the order they happened. What is a 'chronicle'?",
    choices: [
      'a factual written account of events in historical order',
      'a short story or poem',
      'a personal opinion piece',
      'a fictional drama',
    ],
    answer: 'a factual written account of events in historical order',
    explanation:
      "A 'chronicle' is a historical account of events arranged in chronological order, which accurately describes the historian's book.",
    clscore: 8,
  },
  {
    word: 'circumspect',
    question:
      "He was always circumspect with his investments, carefully considering all possible risks before making a decision. What does 'circumspect' mean?",
    choices: [
      'cautious and wary',
      'reckless and ignorant',
      'careless and impulsive',
      'overly confident',
    ],
    answer: 'cautious and wary',
    explanation:
      "To be 'circumspect' means to be cautious and to look at all possible circumstances before acting, which is a good quality for an investor.",
    clscore: 8,
  },
  {
    word: 'colloquial',
    question:
      "She wrote the dialogue in her novel using colloquial language to make it sound more natural and realistic. What does 'colloquial' mean?",
    choices: [
      'informal and conversational',
      'formal and academic',
      'written for a professional audience',
      'full of technical jargon',
    ],
    answer: 'informal and conversational',
    explanation:
      "'Colloquial' refers to language used in ordinary or familiar conversation, which makes dialogue sound more realistic.",
    clscore: 8,
  },
  {
    word: 'credible',
    question:
      "The witness's story was so detailed and consistent with the evidence that the jury found him to be a credible source. What does 'credible' mean?",
    choices: [
      'believable and trustworthy',
      'unbelievable and doubtful',
      'completely false',
      'imaginary or invented',
    ],
    answer: 'believable and trustworthy',
    explanation:
      "A 'credible' source is one that can be believed, which is why the jury trusted the witness's story.",
    clscore: 8,
  },
  {
    word: 'cult',
    question:
      "The new fitness trend has gained a cult following, with people obsessively devoted to the workout routine. What does 'cult' mean?",
    choices: [
      'an obsessive devotion to a person or idea',
      'a casual or temporary interest',
      'a public protest',
      'a group that meets once a week',
    ],
    answer: 'an obsessive devotion to a person or idea',
    explanation:
      "A 'cult' following is a group of people who show an excessive or obsessive devotion to a particular trend, person, or idea.",
    clscore: 8,
  },
  {
    word: 'deference',
    question:
      "In deference to his many years of experience, the younger members of the team allowed the senior partner to lead the meeting. What does 'deference' mean?",
    choices: [
      'respectful submission or regard',
      'a feeling of anger or frustration',
      'disregard or disrespect',
      'a sense of fear',
    ],
    answer: 'respectful submission or regard',
    explanation:
      "'Deference' is a show of respect for a person's authority or status, which is why the younger members yielded to the senior partner.",
    clscore: 8,
  },
  {
    word: 'dichotomy',
    question:
      "There is a strong dichotomy in the country's politics, with the population deeply divided into two opposing political parties. What does 'dichotomy' mean?",
    choices: [
      'a division or contrast between two things',
      'a complete agreement',
      'a unified and single opinion',
      'a gradual mixture',
    ],
    answer: 'a division or contrast between two things',
    explanation:
      "'Dichotomy' refers to a split into two opposing parts, which accurately describes the division in the country's politics.",
    clscore: 8,
  },
  {
    word: 'disparage',
    question:
      "Please do not disparage my efforts; even if you think they are not good enough, I am still trying my best. What does 'disparage' mean?",
    choices: [
      'to belittle or mock',
      'to praise or admire',
      'to reward for effort',
      'to honor or respect',
    ],
    answer: 'to belittle or mock',
    explanation:
      "To 'disparage' means to regard or represent as being of little worth, which is what the speaker is asking the other person not to do to their efforts.",
    clscore: 8,
  },
  {
    word: 'disparity',
    question:
      "The economic disparity between the rich and the poor has grown significantly in recent years. What does 'disparity' mean?",
    choices: [
      'a great difference or inequality',
      'a state of similarity',
      'a balance of wealth',
      'a complete agreement',
    ],
    answer: 'a great difference or inequality',
    explanation:
      "'Disparity' refers to a great difference, as in the unequal distribution of wealth between the rich and the poor.",
    clscore: 8,
  },
  {
    word: 'disseminate',
    question:
      "The organization's goal is to disseminate information about the disease to as many people as possible. What does 'disseminate' mean?",
    choices: [
      'to spread widely',
      'to keep hidden',
      'to reduce the amount of information',
      'to gather information from a few sources',
    ],
    answer: 'to spread widely',
    explanation:
      "To 'disseminate' means to spread something, especially information, widely among people.",
    clscore: 8,
  },
  {
    word: 'dissident',
    question:
      "The government arrested a dissident who was openly speaking out against the new regime. A 'dissident' is someone who:",
    choices: [
      'disagrees with an established political system',
      "supports the government's authority",
      'leads a group of followers',
      'is a well-respected official',
    ],
    answer: 'disagrees with an established political system',
    explanation:
      "A 'dissident' is a person who opposes official policy, especially that of an authoritarian state.",
    clscore: 8,
  },
  {
    word: 'elicit',
    question:
      "The teacher tried to elicit a response from the shy student by asking a series of simple questions. What does 'elicit' mean?",
    choices: [
      'to draw forth or provoke a response',
      'to suppress or hide a reaction',
      'to ignore a person completely',
      'to provide the answer immediately',
    ],
    answer: 'to draw forth or provoke a response',
    explanation:
      "To 'elicit' means to draw out or evoke a reaction or response from someone, as the teacher was trying to get the student to speak.",
    clscore: 8,
  },
  {
    word: 'enigma',
    question:
      "The disappearance of the ancient civilization remains an enigma to historians, as no one can figure out what happened to them. What does 'enigma' mean?",
    choices: [
      'a puzzle or a mystery',
      'a clear and simple fact',
      'a verifiable truth',
      'a well-known historical event',
    ],
    answer: 'a puzzle or a mystery',
    explanation:
      "An 'enigma' is something that is mysterious, puzzling, or difficult to understand, which fits the description of a historical event that cannot be explained.",
    clscore: 8,
  },
  {
    word: 'ephemeral',
    question:
      "A butterfly's life is ephemeral, lasting only a few weeks before it passes. What does 'ephemeral' mean?",
    choices: [
      'lasting for a very short time',
      'lasting for a very long time',
      'endless or eternal',
      'changing frequently',
    ],
    answer: 'lasting for a very short time',
    explanation:
      "'Ephemeral' describes something that is short-lived, as is the case with a butterfly's life cycle.",
    clscore: 8,
  },
  {
    word: 'homage',
    question:
      "The statue was built to pay homage to the soldiers who fought bravely in the war. What does 'homage' mean?",
    choices: [
      'publicly show honor or respect',
      'publicly express fear',
      'express anger or disrespect',
      'to doubt the worth of something',
    ],
    answer: 'publicly show honor or respect',
    explanation:
      "To 'pay homage' means to show honor or respect, which is a common purpose for building a monument.",
    clscore: 8,
  },
  {
    word: 'ignominious',
    question:
      "The team's defeat was ignominious; they not only lost the game but were also widely ridiculed for their poor performance. What does 'ignominious' mean?",
    choices: [
      'deserving of public shame or disgrace',
      'leading to a glorious victory',
      'highly honorable and respectable',
      'a cause for pride',
    ],
    answer: 'deserving of public shame or disgrace',
    explanation:
      "'Ignominious' describes an event or action that brings public disgrace or shame, which is how the team's defeat was perceived.",
    clscore: 8,
  },
  {
    word: 'illicit',
    question:
      "He was arrested for selling illicit goods, as the items were forbidden by law. What does 'illicit' mean?",
    choices: [
      'illegal or unlawful',
      'perfectly legal',
      'morally sound',
      'common and normal',
    ],
    answer: 'illegal or unlawful',
    explanation:
      "'Illicit' refers to something forbidden by law, rule, or custom, which is why the person was arrested for selling the goods.",
    clscore: 8,
  },
  {
    word: 'immutable',
    question:
      "The laws of physics are immutable; they cannot be changed by human wishes or actions. What does 'immutable' mean?",
    choices: [
      'unchangeable or permanent',
      'subject to change',
      'temporary or fleeting',
      'flexible and adaptable',
    ],
    answer: 'unchangeable or permanent',
    explanation:
      "'Immutable' describes something that is not capable of or susceptible to change, which is a core characteristic of the laws of physics.",
    clscore: 8,
  },
  {
    word: 'impasse',
    question:
      "The negotiations reached an impasse when neither side was willing to compromise, and the talks broke down. What is an 'impasse'?",
    choices: [
      'a situation where no progress is possible',
      'a sudden breakthrough or victory',
      'the very beginning of a project',
      'an unexpected opportunity',
    ],
    answer: 'a situation where no progress is possible',
    explanation:
      "An 'impasse' is a situation in which no progress is possible, as was the case when the negotiations stopped due to a lack of compromise.",
    clscore: 8,
  },
  {
    word: 'implicit',
    question:
      "Although the manager never said it directly, the request for overtime was implicit in his email about the project deadline. What does 'implicit' mean?",
    choices: [
      'implied though not plainly expressed',
      'clearly and obviously stated',
      'directly mentioned',
      'completely understood',
    ],
    answer: 'implied though not plainly expressed',
    explanation:
      "'Implicit' means something that is suggested but not stated directly, which is why the request for overtime was understood without being explicitly said.",
    clscore: 8,
  },
  {
    word: 'indigent',
    question:
      "The city's soup kitchen provides meals for the indigent and homeless population. An 'indigent' person is:",
    choices: [
      'very poor and needy',
      'extremely wealthy and powerful',
      'highly educated and skilled',
      'a prominent community leader',
    ],
    answer: 'very poor and needy',
    explanation:
      "'Indigent' describes a person who is very poor, needy, or impoverished, which is why they would be a recipient of aid from a soup kitchen.",
    clscore: 8,
  },
  {
    word: 'indolent',
    question:
      "During the summer vacation, he became very indolent, spending all his days lying on the couch and watching television. What does 'indolent' mean?",
    choices: [
      'wanting to avoid activity; lazy',
      'extremely energetic and active',
      'constantly busy and productive',
      'eager to work',
    ],
    answer: 'wanting to avoid activity; lazy',
    explanation:
      "'Indolent' means lazy or having a disposition to avoid exertion, which describes his summer behavior.",
    clscore: 8,
  },
  {
    word: 'ingenuous',
    question:
      "The ingenuous young boy believed everything the traveling salesman told him without a second thought. An 'ingenuous' person is:",
    choices: [
      'innocent and unsuspecting',
      'devious and sly',
      'cruel and heartless',
      'a harsh critic',
    ],
    answer: 'innocent and unsuspecting',
    explanation:
      "'Ingenuous' means innocent, naive, and trusting, which is why the boy believed the salesman so easily.",
    clscore: 8,
  },
  {
    word: 'inherent',
    question:
      "Every person has an inherent right to freedom and justice that cannot be taken away. What does 'inherent' mean?",
    choices: [
      'existing as a natural, essential part',
      'acquired through hard work',
      'borrowed from a friend',
      'temporary and fleeting',
    ],
    answer: 'existing as a natural, essential part',
    explanation:
      "'Inherent' means an essential or permanent characteristic that is a natural part of something or someone.",
    clscore: 8,
  },
  {
    word: 'insidious',
    question:
      "The disease was insidious, spreading slowly and without symptoms for years before it was finally diagnosed. What does 'insidious' mean?",
    choices: [
      'proceeding in a gradual, subtle way but with harmful effects',
      'completely open and harmless',
      'fast-acting and easy to detect',
      'safe and beneficial',
    ],
    answer: 'proceeding in a gradual, subtle way but with harmful effects',
    explanation:
      "'Insidious' refers to something that works in a subtle or sneaky way with a harmful outcome, which describes how the disease spread.",
    clscore: 8,
  },
  {
    word: 'insolvent',
    question:
      "The company was declared insolvent after it was no longer able to pay its debts. What does 'insolvent' mean?",
    choices: [
      'unable to pay debts; bankrupt',
      'wealthy and profitable',
      'financially stable',
      'capable of paying all debts',
    ],
    answer: 'unable to pay debts; bankrupt',
    explanation:
      "'Insolvent' is the state of being unable to pay debts owed, which is why the company was declared bankrupt.",
    clscore: 8,
  },
  {
    word: 'interminable',
    question:
      "The professor's lecture felt interminable, as it went on for three hours without a break. What does 'interminable' mean?",
    choices: [
      'endless or seemingly endless',
      'short and to the point',
      'funny and entertaining',
      'brief and concise',
    ],
    answer: 'endless or seemingly endless',
    explanation:
      "'Interminable' is a word used to describe something that seems to be without end, which is how the long lecture felt.",
    clscore: 8,
  },
  {
    word: 'intrepid',
    question:
      "The intrepid explorer was the first person to cross the continent's most dangerous desert. An 'intrepid' person is:",
    choices: [
      'fearless and adventurous',
      'afraid and cowardly',
      'weak and unprepared',
      'shy and timid',
    ],
    answer: 'fearless and adventurous',
    explanation:
      "'Intrepid' is an adjective used to describe someone who is fearless and adventurous in the face of danger.",
    clscore: 8,
  },
  {
    word: 'intrinsic',
    question:
      "The value of art is intrinsic; its worth is not in its price but in its beauty and meaning. What does 'intrinsic' mean?",
    choices: [
      'belonging naturally; essential',
      'external or superficial',
      'an added bonus or extra',
      'temporary and impermanent',
    ],
    answer: 'belonging naturally; essential',
    explanation:
      "'Intrinsic' means belonging naturally or being essential to something's nature, which is how the beauty and meaning relate to the art.",
    clscore: 8,
  },
  {
    word: 'jargon',
    question:
      "The doctor's explanation was full of medical jargon that was difficult for the patient to understand. What is 'jargon'?",
    choices: [
      'specialized language used by a group or profession',
      'a type of music',
      'a story told in a specific way',
      'a confusing noise',
    ],
    answer: 'specialized language used by a group or profession',
    explanation:
      "'Jargon' is a specialized vocabulary specific to a particular field or group, making it difficult for outsiders to understand.",
    clscore: 8,
  },
  {
    word: 'keen',
    question:
      "Dogs have a keen sense of smell that allows them to track scents for miles. What does 'keen' mean?",
    choices: [
      'sharp or highly developed',
      'weak or nonexistent',
      'dull and slow',
      'unreliable',
    ],
    answer: 'sharp or highly developed',
    explanation:
      "A 'keen' sense describes one that is sharp, sensitive, or highly developed, as is the case with a dog's sense of smell.",
    clscore: 8,
  },
  {
    word: 'latent',
    question:
      "She had a latent talent for painting that she only discovered in her sixties, after she retired. What does 'latent' mean?",
    choices: [
      'existing but not yet developed or apparent',
      'visible and clearly expressed',
      'something that is well-known',
      'an obvious and open skill',
    ],
    answer: 'existing but not yet developed or apparent',
    explanation:
      "'Latent' describes a quality or ability that is present but not yet active or developed, which fits the description of her newfound talent.",
    clscore: 8,
  },
  {
    word: 'lethargic',
    question:
      "He felt lethargic all day after staying up late the night before and had no energy to do his homework. What does 'lethargic' mean?",
    choices: [
      'feeling sluggish and apathetic',
      'full of energy and excitement',
      'alert and focused',
      'overly busy and active',
    ],
    answer: 'feeling sluggish and apathetic',
    explanation:
      "'Lethargic' means feeling a lack of energy or enthusiasm, which is a common effect of not getting enough sleep.",
    clscore: 8,
  },
  {
    word: 'lucid',
    question:
      "His explanation of the complex theory was so lucid that even I, with no prior knowledge, could understand it. What does 'lucid' mean?",
    choices: [
      'easy to understand; clear',
      'confusing and difficult to follow',
      'uncertain and vague',
      'complex and unclear',
    ],
    answer: 'easy to understand; clear',
    explanation:
      "'Lucid' means expressed clearly or easy to understand, which is why the explanation made sense to someone with no background in the subject.",
    clscore: 8,
  },
  {
    word: 'magnanimous',
    question:
      "After winning the competition, the champion was magnanimous in victory, shaking his opponent's hand and praising his efforts. What does 'magnanimous' mean?",
    choices: [
      'generous and forgiving toward a rival',
      'selfish and self-centered',
      'cruel and unkind',
      'arrogant and proud',
    ],
    answer: 'generous and forgiving toward a rival',
    explanation:
      "'Magnanimous' describes a person who is generous, forgiving, or noble, especially toward a rival or competitor.",
    clscore: 8,
  },
  {
    word: 'malevolent',
    question:
      "The villain's malevolent plan to steal the city's water supply was meant to cause great harm to the population. A 'malevolent' person or thing is:",
    choices: [
      'wishing to do evil or cause harm to others',
      'kind and helpful',
      'friendly and pleasant',
      'gentle and harmless',
    ],
    answer: 'wishing to do evil or cause harm to others',
    explanation:
      "'Malevolent' describes something that is evil or harmful in its intent, as was the villain's plan.",
    clscore: 8,
  },
  {
    word: 'monetary',
    question:
      "The Central Bank is responsible for creating monetary policy to manage the country's money supply and interest rates. 'Monetary' relates to:",
    choices: [
      'money or currency',
      "the country's food supply",
      'the legal system',
      'national travel',
    ],
    answer: 'money or currency',
    explanation:
      "'Monetary' is an adjective that relates to money or currency, which is the focus of the Central Bank's policy.",
    clscore: 8,
  },
  {
    word: 'myriad',
    question:
      "The forest was home to a myriad of different species of plants and animals. What does 'myriad' mean?",
    choices: [
      'a countless or extremely great number',
      'a small number of things',
      'exactly ten of something',
      'a few and rare items',
    ],
    answer: 'a countless or extremely great number',
    explanation:
      "'Myriad' is a word used to describe a very large or indefinite number of things, which fits the diversity of the forest.",
    clscore: 8,
  },
  {
    word: 'nebulous',
    question:
      "The suspect gave a nebulous description of the crime, making it difficult for the police to understand what happened. What does 'nebulous' mean?",
    choices: [
      'vague, unclear, or ill-defined',
      'crystal clear and simple',
      'obvious and easy to understand',
      'a concrete detail',
    ],
    answer: 'vague, unclear, or ill-defined',
    explanation:
      "'Nebulous' is an adjective used to describe something that is vague, hazy, or unclear, which is why the police could not understand the description.",
    clscore: 8,
  },
  {
    word: 'obscure',
    question:
      "The meaning of the poem was obscure to most readers; it was hard to understand due to its complex symbolism. What does 'obscure' mean?",
    choices: [
      'not discovered or known about; uncertain',
      'simple and easy to read',
      'clearly visible',
      'obvious to everyone',
    ],
    answer: 'not discovered or known about; uncertain',
    explanation:
      "'Obscure' means not discovered, known about, or understood, which is why the poem's meaning was difficult to grasp.",
    clscore: 8,
  },
  {
    word: 'obsolescence',
    question:
      "Technological obsolescence is a constant problem for consumers, as new phones and computers are released every year. 'Obsolescence' refers to:",
    choices: [
      'the process of becoming outdated',
      'the process of becoming more modern',
      'the creation of new items',
      'a state of lasting forever',
    ],
    answer: 'the process of becoming outdated',
    explanation:
      "'Obsolescence' is the process of something becoming obsolete or no longer useful, which is a common issue with rapidly changing technology.",
    clscore: 8,
  },
  {
    word: 'ornate',
    question:
      "The ballroom was so ornate that every surface, from the ceiling to the walls, was covered in intricate carvings and gold leaf. What does 'ornate' mean?",
    choices: [
      'elaborately decorated',
      'plain and simple',
      'bare and functional',
      'painted a single color',
    ],
    answer: 'elaborately decorated',
    explanation:
      "'Ornate' describes something that is highly and often excessively decorated with complex patterns or details, which fits the description of the intricate carvings and gold leaf.",
    clscore: 8,
  },
  {
    word: 'ostracize',
    question:
      "After he broke the unwritten rule of their social group, his friends began to ostracize him, excluding him from all their plans. To 'ostracize' someone is to:",
    choices: [
      'exclude from a group or society',
      'welcome with open arms',
      'praise publicly',
      'invite to a private event',
    ],
    answer: 'exclude from a group or society',
    explanation:
      "To 'ostracize' is to exclude someone from a social group or community, which is what the friends did to him by leaving him out of their plans.",
    clscore: 8,
  },
  {
    word: 'palatable',
    question:
      "The meal was barely palatable; although it was edible, no one found it particularly tasty. A 'palatable' meal is:",
    choices: [
      'pleasant to the taste',
      'disgusting and inedible',
      'too spicy to eat',
      'awful in appearance',
    ],
    answer: 'pleasant to the taste',
    explanation:
      "'Palatable' describes something that is acceptable or pleasant to the taste, which the meal was not, despite being edible.",
    clscore: 8,
  },
  {
    word: 'palpable',
    question:
      "When the verdict was announced, a palpable tension filled the courtroom, as you could feel the anxious energy in the air. What does 'palpable' mean?",
    choices: [
      'so intense as to be almost felt physically',
      'completely hidden from view',
      'unclear and confusing',
      'vague and ill-defined',
    ],
    answer: 'so intense as to be almost felt physically',
    explanation:
      "'Palpable' describes a feeling or atmosphere that is so intense that it seems tangible, as if you could touch it.",
    clscore: 8,
  },
  {
    word: 'panacea',
    question:
      "Many people hope that science will discover a panacea—a single cure for all diseases. What is a 'panacea'?",
    choices: [
      'a remedy for all ills or difficulties',
      'a type of illness or disease',
      'a harmful poison',
      'a temporary fix for a single problem',
    ],
    answer: 'a remedy for all ills or difficulties',
    explanation:
      "A 'panacea' is a solution or remedy for all problems or diseases, which is the universal cure scientists are hoping to find.",
    clscore: 8,
  },
  {
    word: 'paradigm',
    question:
      "The invention of the internet created a new paradigm for how we communicate and access information. What is a 'paradigm'?",
    choices: [
      'a typical example or model of something',
      'a confusing error',
      'a difficult problem',
      'a fundamental mistake',
    ],
    answer: 'a typical example or model of something',
    explanation:
      "A 'paradigm' is a typical pattern or model, representing a fundamental way of thinking or doing things, which the internet's invention changed.",
    clscore: 8,
  },
  {
    word: 'paradox',
    question:
      "It's a strange paradox that spending money on expensive clothes for a party can make you feel both richer and poorer at the same time. What is a 'paradox'?",
    choices: [
      'a statement that seems self-contradictory but is true',
      'an obvious and simple statement',
      'a statement that is clearly false',
      'a clear and logical conclusion',
    ],
    answer: 'a statement that seems self-contradictory but is true',
    explanation:
      "A 'paradox' is a statement that appears to contradict itself but contains a deeper truth, as in the case of feeling both rich and poor.",
    clscore: 8,
  },
  {
    word: 'perennial',
    question:
      "The city's perennial traffic problems seem to get worse every single year. What does 'perennial' mean?",
    choices: [
      'lasting or existing for a long or indefinite time',
      'lasting for only one season',
      'short-lived or fleeting',
      'occurring very rarely',
    ],
    answer: 'lasting or existing for a long or indefinite time',
    explanation:
      "'Perennial' describes something that continues to exist or recur over a long period, which fits the ongoing traffic problems.",
    clscore: 8,
  },
  {
    word: 'periphery',
    question:
      "She preferred to stay on the periphery of the main group, only listening to their conversations from a distance. What does 'periphery' mean?",
    choices: [
      'the outer limits or edge of an area or group',
      'the exact center or core',
      'the very beginning of an event',
      'the hidden inside of a place',
    ],
    answer: 'the outer limits or edge of an area or group',
    explanation:
      "The 'periphery' is the outer edge of an area, which in this case refers to her staying on the edge of the social group.",
    clscore: 8,
  },
  {
    word: 'placid',
    question:
      "The placid lake was so calm that its surface perfectly reflected the mountains and sky. What does 'placid' mean?",
    choices: [
      'calm and peaceful',
      'turbulent and stormy',
      'rough and choppy',
      'unusually cold',
    ],
    answer: 'calm and peaceful',
    explanation:
      "'Placid' is an adjective used to describe a person or a body of water that is calm, serene, and not easily disturbed.",
    clscore: 8,
  },
  {
    word: 'plaintiff',
    question:
      "In the courtroom, the plaintiff presented his case, arguing that the company had caused him personal injury. The 'plaintiff' is:",
    choices: [
      'the person who brings a legal case against another',
      'the person who is on trial',
      'the lawyer who defends the accused',
      'the judge who makes the final ruling',
    ],
    answer: 'the person who brings a legal case against another',
    explanation:
      "A 'plaintiff' is the person who initiates a lawsuit or brings a legal action against another party.",
    clscore: 8,
  },
  {
    word: 'poignant',
    question:
      "The film's ending was so poignant that it left the entire audience in tears. What does 'poignant' mean?",
    choices: [
      'evoking a keen sense of sadness or regret',
      'amusing and lighthearted',
      'boring and dull',
      'confusing and strange',
    ],
    answer: 'evoking a keen sense of sadness or regret',
    explanation:
      "'Poignant' describes something that deeply touches or moves the emotions, often with a feeling of sadness or nostalgia.",
    clscore: 8,
  },
  {
    word: 'potent',
    question:
      "The medicine was so potent that it relieved his pain almost immediately. What does 'potent' mean?",
    choices: [
      'having great power or influence',
      'weak and ineffective',
      'small in quantity',
      'harmless and gentle',
    ],
    answer: 'having great power or influence',
    explanation:
      "'Potent' describes something that has a very strong effect, which in this case refers to the medicine's ability to relieve pain quickly.",
    clscore: 8,
  },
  {
    word: 'precarious',
    question:
      "The hikers found themselves in a precarious situation, clinging to a narrow ledge with a long drop below them. A 'precarious' situation is:",
    choices: [
      'not securely held in place; dangerous',
      'extremely safe and secure',
      'easy and without risk',
      'well-supported and stable',
    ],
    answer: 'not securely held in place; dangerous',
    explanation:
      "'Precarious' means not securely in place and therefore likely to fall or collapse, which perfectly describes the dangerous situation of the hikers.",
    clscore: 8,
  },
  {
    word: 'preclude',
    question:
      "The new safety regulations will preclude any further accidents from happening on the factory floor. To 'preclude' something means to:",
    choices: [
      'prevent from happening',
      'allow to happen',
      'encourage or support',
      'begin a new process',
    ],
    answer: 'prevent from happening',
    explanation:
      "To 'preclude' is to make something impossible by taking prior action, which is the goal of the new safety regulations.",
    clscore: 8,
  },
  {
    word: 'precursor',
    question:
      "The invention of the steam engine was a precursor to the Industrial Revolution. What is a 'precursor'?",
    choices: [
      'something that comes before and signals the approach of another',
      'the final outcome of an event',
      'a temporary replacement',
      'a complete failure',
    ],
    answer: 'something that comes before and signals the approach of another',
    explanation:
      "A 'precursor' is something that precedes and indicates the existence or development of something else, as the steam engine came before the Industrial Revolution.",
    clscore: 8,
  },
  {
    word: 'prodigal',
    question:
      "He was a prodigal son who quickly spent his entire inheritance on extravagant parties and luxury items. A 'prodigal' lifestyle is:",
    choices: [
      'characterized by wasteful and reckless spending',
      'extremely careful and frugal',
      'simple and modest',
      'characterized by hard work',
    ],
    answer: 'characterized by wasteful and reckless spending',
    explanation:
      "'Prodigal' describes a person who spends money or resources recklessly and wastefully, which fits the son's behavior.",
    clscore: 8,
  },
  {
    word: 'prodigious',
    question:
      "The new skyscraper was a prodigious feat of engineering, stretching hundreds of feet into the sky. What does 'prodigious' mean?",
    choices: [
      'remarkably or impressively great in size or extent',
      'extremely small and insignificant',
      'weak and uninspired',
      'average in size',
    ],
    answer: 'remarkably or impressively great in size or extent',
    explanation:
      "'Prodigious' is used to describe something that is of a very great size, extent, or degree, as is the case with a massive skyscraper.",
    clscore: 8,
  },
  {
    word: 'profuse',
    question:
      "When he was rescued from the fire, he offered profuse thanks to the firefighters for saving his life. What does 'profuse' mean?",
    choices: [
      'abundantly or excessively offered',
      'scarce and limited',
      'offered with great difficulty',
      'rare and difficult to find',
    ],
    answer: 'abundantly or excessively offered',
    explanation:
      "'Profuse' means offered in great quantity or abundance, which describes the sincere and plentiful thanks he gave.",
    clscore: 8,
  },
  {
    word: 'prolific',
    question:
      "A prolific author like Stephen King publishes several books every year. What does 'prolific' mean?",
    choices: [
      'producing a large amount of work or results',
      'lazy and unproductive',
      'known for being silent',
      'lacking motivation',
    ],
    answer: 'producing a large amount of work or results',
    explanation:
      "'Prolific' describes someone who produces a large number of a particular type of work, such as a writer who publishes many books.",
    clscore: 8,
  },
  {
    word: 'propensity',
    question:
      "He had a natural propensity for getting into trouble, which seemed to follow him wherever he went. What does 'propensity' mean?",
    choices: [
      'a natural tendency or inclination to behave a certain way',
      'a strong aversion or rejection',
      'a state of confusion',
      'a deliberate avoidance',
    ],
    answer: 'a natural tendency or inclination to behave a certain way',
    explanation:
      "A 'propensity' is a natural inclination or a deep-seated tendency to do something, which explains his repeated trouble.",
    clscore: 8,
  },
  {
    word: 'proximity',
    question:
      "The house was ideal because of its close proximity to the school and the park. 'Proximity' means:",
    choices: [
      'nearness in space or time',
      'a great distance or separation',
      'a large empty space',
      'a state of being completely separate',
    ],
    answer: 'nearness in space or time',
    explanation:
      "'Proximity' refers to the state of being close to someone or something, which is why the house's location was so desirable.",
    clscore: 8,
  },
  {
    word: 'pugnacious',
    question:
      "The pugnacious young man was always looking for an argument and was quick to pick a fight with anyone who disagreed with him. A 'pugnacious' person is:",
    choices: [
      'eager or quick to argue or fight',
      'peaceful and gentle',
      'shy and reserved',
      'polite and well-mannered',
    ],
    answer: 'eager or quick to argue or fight',
    explanation:
      "'Pugnacious' is an adjective used to describe someone who is eager to fight or argue, which fits the description of the young man.",
    clscore: 8,
  },
  {
    word: 'pungent',
    question:
      "The smell of vinegar has a pungent odor that can make your eyes water. A 'pungent' smell is:",
    choices: [
      'having a sharply strong smell or taste',
      'mild and unnoticeable',
      'sweet and pleasant',
      'bland and flavorless',
    ],
    answer: 'having a sharply strong smell or taste',
    explanation:
      "'Pungent' describes a sharp, intense quality, particularly in taste or smell, which is why vinegar can make your eyes water.",
    clscore: 8,
  },
  {
    word: 'punitive',
    question:
      "The new laws were intentionally punitive, designed to severely punish repeat offenders. 'Punitive' most nearly means:",
    choices: [
      'intended as punishment',
      'intended to reward or praise',
      'intended to forgive and forget',
      'intended for relaxation',
    ],
    answer: 'intended as punishment',
    explanation:
      "'Punitive' describes something that is inflicted or intended as a punishment.",
    clscore: 8,
  },
  {
    word: 'purge',
    question:
      "He decided to purge his closet of all the old clothes he no longer wore. To 'purge' something means to:",
    choices: [
      'to cleanse or remove something undesirable',
      'to pollute or make dirty',
      'to hide away or conceal',
      'to damage beyond repair',
    ],
    answer: 'to cleanse or remove something undesirable',
    explanation:
      "To 'purge' means to get rid of or remove something from a place, which is what he was doing with his old clothes.",
    clscore: 8,
  },
  {
    word: 'qualms',
    question:
      "She had some qualms about lying to her parents, but she went ahead with her plan anyway. 'Qualms' most nearly means:",
    choices: [
      'a feeling of uneasiness or doubt',
      'a feeling of complete confidence',
      'a sense of great joy',
      'a feeling of certainty',
    ],
    answer: 'a feeling of uneasiness or doubt',
    explanation:
      "'Qualms' are feelings of doubt, worry, or uneasiness about whether an action is right, which is what she felt about lying.",
    clscore: 8,
  },
  {
    word: 'quell',
    question:
      "The police were called in to quell the rioting, as the crowd was growing more out of control. To 'quell' a riot means to:",
    choices: [
      'put an end to by force; suppress',
      'encourage or incite',
      'start a commotion',
      'ignore a problem',
    ],
    answer: 'put an end to by force; suppress',
    explanation:
      "To 'quell' means to put an end to something, typically a disturbance or rebellion, by using force or authority.",
    clscore: 8,
  },
  {
    word: 'recalcitrant',
    question:
      "The teacher had a difficult time with the recalcitrant student who refused to follow any of the classroom rules. A 'recalcitrant' person is:",
    choices: [
      'having an obstinately uncooperative attitude',
      'obedient and compliant',
      'flexible and adaptable',
      'eager to please',
    ],
    answer: 'having an obstinately uncooperative attitude',
    explanation:
      "'Recalcitrant' describes someone who is stubbornly defiant and disobedient, which fits the student who would not follow the rules.",
    clscore: 8,
  },
  {
    word: 'relegate',
    question:
      "After his poor performance, the coach decided to relegate the player to the bench for the rest of the game. To 'relegate' someone is to:",
    choices: [
      'assign to a lower or less important position',
      'promote to a higher position',
      'praise publicly',
      'give a reward',
    ],
    answer: 'assign to a lower or less important position',
    explanation:
      "To 'relegate' means to demote or send someone to a lower position or status, which is what the coach did by putting the player on the bench.",
    clscore: 8,
  },
  {
    word: 'relinquish',
    question:
      "She had to relinquish her control of the company when she retired and hand it over to her successor. To 'relinquish' power means to:",
    choices: [
      'voluntarily cease to keep or claim; to give up',
      'take control of something',
      'keep for a long time',
      'gain or acquire new control',
    ],
    answer: 'voluntarily cease to keep or claim; to give up',
    explanation:
      "To 'relinquish' means to voluntarily give up or surrender something, such as power or control.",
    clscore: 8,
  },
  {
    word: 'renegade',
    question:
      "A former soldier turned renegade, he now fights against the very government he once served. A 'renegade' is a:",
    choices: [
      'a person who betrays an organization; a rebel',
      'a loyal supporter',
      'a close friend',
      'a law-abiding citizen',
    ],
    answer: 'a person who betrays an organization; a rebel',
    explanation:
      "A 'renegade' is a person who deserts or betrays an organization, country, or cause, which fits the soldier's new role.",
    clscore: 8,
  },
  {
    word: 'repudiate',
    question:
      "The politician's speech was meant to repudiate the rumors that he was involved in the scandal. To 'repudiate' an idea is to:",
    choices: [
      'refuse to accept or be associated with',
      'fully accept and support',
      'approve with great enthusiasm',
      'endorse a point of view',
    ],
    answer: 'refuse to accept or be associated with',
    explanation:
      "To 'repudiate' means to reject or refuse to acknowledge something, such as the politician's rejection of the rumors.",
    clscore: 8,
  },
  {
    word: 'requisite',
    question:
      "A bachelor's degree is a requisite for this job, so you cannot be considered without one. A 'requisite' skill is:",
    choices: [
      'necessary because of the circumstances',
      'optional and not needed',
      'an extra benefit',
      'unwanted or unneeded',
    ],
    answer: 'necessary because of the circumstances',
    explanation:
      "'Requisite' describes something that is required or necessary for a particular purpose or position.",
    clscore: 8,
  },
  {
    word: 'rescind',
    question:
      "After the public outcry, the city council decided to rescind the unpopular new law. To 'rescind' a law means to:",
    choices: [
      'revoke, cancel, or repeal it',
      'enforce it with greater vigor',
      'put it into effect',
      'approve it officially',
    ],
    answer: 'revoke, cancel, or repeal it',
    explanation:
      "To 'rescind' means to officially cancel or repeal a law, agreement, or decision.",
    clscore: 8,
  },
  {
    word: 'resolute',
    question:
      "The army general was resolute in his decision and would not be swayed from his course of action. A 'resolute' leader is:",
    choices: [
      'firm and determined',
      'weak and easily swayed',
      'uncertain and hesitant',
      'a person who often changes their mind',
    ],
    answer: 'firm and determined',
    explanation:
      "'Resolute' describes a person who is firmly determined and unwavering in their purpose.",
    clscore: 8,
  },
  {
    word: 'respite',
    question:
      "After working for twelve hours straight, the construction crew was given a short respite to rest and eat lunch. A 'respite' is:",
    choices: [
      'a short period of rest or relief',
      'a continuous period of work',
      'a form of punishment',
      'a difficult task',
    ],
    answer: 'a short period of rest or relief',
    explanation:
      "A 'respite' is a brief interval of rest or relief from something difficult or unpleasant.",
    clscore: 8,
  },
  {
    word: 'scathing',
    question:
      "The critic’s review was a scathing attack on the film, tearing apart every aspect of it from the acting to the plot. A 'scathing' remark is:",
    choices: [
      'severely critical or harsh',
      'gentle and kind',
      'praising and positive',
      'mild and unremarkable',
    ],
    answer: 'severely critical or harsh',
    explanation:
      "'Scathing' describes a remark or a review that is severely critical and hurtful.",
    clscore: 8,
  },
  {
    word: 'scrupulous',
    question:
      "The accountant was so scrupulous that he double-checked every number to ensure there were no errors. A 'scrupulous' worker is:",
    choices: [
      'diligent, thorough, and attentive to detail',
      'careless and negligent',
      'lazy and unproductive',
      'dishonest and misleading',
    ],
    answer: 'diligent, thorough, and attentive to detail',
    explanation:
      "'Scrupulous' describes a person who is very careful and conscientious, paying great attention to detail and acting with integrity.",
    clscore: 8,
  },
  {
    word: 'secular',
    question:
      "The new laws were designed to be completely secular, having no connection to any particular religion. 'Secular' most nearly means:",
    choices: [
      'not spiritual or religious',
      'highly religious or spiritual',
      'sacred or holy',
      'related to a particular church',
    ],
    answer: 'not spiritual or religious',
    explanation:
      "'Secular' is an adjective used to describe something that is not connected with religious or spiritual matters.",
    clscore: 8,
  },
  {
    word: 'sedate',
    question:
      "The vet had to sedate the nervous dog before he could safely treat its injury. To 'sedate' a patient is to:",
    choices: [
      'calm or make them sleepy with a drug',
      'make them more active',
      'cause them to become angry',
      'wake them from sleep',
    ],
    answer: 'calm or make them sleepy with a drug',
    explanation:
      "To 'sedate' a person or animal is to administer a drug to calm them or make them feel sleepy and tranquil.",
    clscore: 8,
  },
  {
    word: 'sedentary',
    question:
      "He developed a sedentary lifestyle after he started working a desk job, spending most of his day sitting. A 'sedentary' lifestyle is:",
    choices: [
      'involving little to no physical activity',
      'extremely active and energetic',
      'full of running and exercise',
      'fast-paced and busy',
    ],
    answer: 'involving little to no physical activity',
    explanation:
      "'Sedentary' is an adjective used to describe a lifestyle or occupation that involves a great deal of sitting and not much physical activity.",
    clscore: 8,
  },
  {
    word: 'sporadic',
    question:
      "Due to the storm, power outages were sporadic throughout the city, happening in some neighborhoods but not others. 'Sporadic' most nearly means:",
    choices: [
      'occurring at irregular intervals or places',
      'constant and unending',
      'happening on a regular schedule',
      'happening with great frequency',
    ],
    answer: 'occurring at irregular intervals or places',
    explanation:
      "'Sporadic' describes an event that occurs irregularly or randomly, as the power outages did throughout the city.",
    clscore: 8,
  },
  {
    word: 'stalwart',
    question:
      "A stalwart supporter of the team, she attended every single game for over two decades. A 'stalwart' supporter is:",
    choices: [
      'loyal, reliable, and hardworking',
      'weak and easily persuaded',
      'a casual or occasional fan',
      'uncertain about their loyalties',
    ],
    answer: 'loyal, reliable, and hardworking',
    explanation:
      "'Stalwart' describes a person who is very loyal and dedicated to a cause or organization.",
    clscore: 8,
  },
  {
    word: 'stringent',
    question:
      "The university has stringent admission requirements, which makes it very difficult for most students to get in. What does 'stringent' mean?",
    choices: [
      'strict, precise, and exacting',
      'loose and easily met',
      'easy and simple',
      'flexible and relaxed',
    ],
    answer: 'strict, precise, and exacting',
    explanation:
      "'Stringent' describes rules or requirements that are strict, precise, and demanding.",
    clscore: 8,
  },
  {
    word: 'stupor',
    question:
      "After taking the medication, he was in a drowsy stupor and could not think clearly. A 'stupor' is a state of:",
    choices: [
      'near unconsciousness or insensibility',
      'full alertness and clarity',
      'great joy and excitement',
      "complete awareness of one's surroundings",
    ],
    answer: 'near unconsciousness or insensibility',
    explanation:
      "A 'stupor' is a state of near unconsciousness, in which a person is dazed and unable to think or feel properly.",
    clscore: 8,
  },
  {
    word: 'succinct',
    question:
      "She gave a succinct report, summarizing all the key findings in just a few sentences. A 'succinct' speech is:",
    choices: [
      'brief and clearly expressed',
      'long and overly detailed',
      'confusing and difficult to understand',
      'boring and rambling',
    ],
    answer: 'brief and clearly expressed',
    explanation:
      "'Succinct' means expressed in a concise and clear manner, which fits the description of a report that summarizes key findings briefly.",
    clscore: 8,
  },
  {
    word: 'sultry',
    question:
      "The forecast called for a sultry afternoon, with high temperatures and high humidity that made the air feel heavy. What is 'sultry' weather?",
    choices: [
      'hot and humid',
      'cold and dry',
      'windy and cool',
      'rainy and refreshing',
    ],
    answer: 'hot and humid',
    explanation:
      "'Sultry' is a term used to describe weather that is hot and humid, causing a sense of oppressive heat.",
    clscore: 8,
  },
  {
    word: 'taboo',
    question:
      "Discussing money and salaries is often considered a social taboo in many cultures. Something that is 'taboo' is:",
    choices: [
      'a practice forbidden by social or cultural custom',
      'a topic that is encouraged and common',
      'a subject that is widely discussed',
      'something that is allowed for everyone',
    ],
    answer: 'a practice forbidden by social or cultural custom',
    explanation:
      "A 'taboo' is a social or cultural custom that prohibits or forbids a particular action or topic.",
    clscore: 8,
  },
  {
    word: 'taciturn',
    question:
      "Known for being taciturn, he rarely spoke during meetings and only answered with a nod or a single word. A 'taciturn' person is:",
    choices: [
      'reserved or uncommunicative in speech',
      'extremely talkative',
      'very friendly and outgoing',
      'chatty and social',
    ],
    answer: 'reserved or uncommunicative in speech',
    explanation:
      "'Taciturn' describes a person who is habitually reserved and does not say much.",
    clscore: 8,
  },
  {
    word: 'rampant',
    question:
      "Rumors about the scandal were rampant, spreading quickly and uncontrollably throughout the town. What does 'rampant' mean?",
    choices: [
      'spreading unchecked or out of control',
      'controlled and limited',
      'small in quantity',
      'held in check',
    ],
    answer: 'spreading unchecked or out of control',
    explanation:
      "'Rampant' is an adjective used to describe something that is growing or spreading without any control.",
    clscore: 8,
  },
  {
    word: 'tenacious',
    question:
      "The tenacious student would not give up, even after failing the test five times. A 'tenacious' student is:",
    choices: [
      'persistent and determined',
      'lazy and unmotivated',
      'forgetful and distracted',
      'a person who gives up easily',
    ],
    answer: 'persistent and determined',
    explanation:
      "'Tenacious' describes someone who is determined and persistent, holding on firmly to a goal.",
    clscore: 8,
  },
  {
    word: 'terse',
    question:
      "The manager's terse reply to my question was simply 'no,' leaving me with no further information. A 'terse' reply is:",
    choices: [
      'brief and to the point',
      'lengthy and rambling',
      'unclear and confusing',
      'full of extra detail',
    ],
    answer: 'brief and to the point',
    explanation:
      "'Terse' describes a statement or reply that is brief and abrupt, often to the point of being rude.",
    clscore: 8,
  },
  {
    word: 'thwart',
    question:
      "The hero's last-minute actions managed to thwart the villain's evil plan. To 'thwart' a plan means to:",
    choices: [
      'successfully prevent from accomplishing a goal',
      'fully support and enable',
      'help to start a new plan',
      'ignore a problem',
    ],
    answer: 'successfully prevent from accomplishing a goal',
    explanation:
      "To 'thwart' is to prevent someone from accomplishing something or to oppose and defeat their plans.",
    clscore: 8,
  },
  {
    word: 'tirade',
    question:
      "After the team lost the championship, the coach launched into a furious tirade at the players. A 'tirade' is:",
    choices: [
      'a long, angry speech of criticism or accusation',
      'a short, peaceful poem',
      'a gentle word of praise',
      'a short, happy song',
    ],
    answer: 'a long, angry speech of criticism or accusation',
    explanation:
      "A 'tirade' is a prolonged outburst of angry and bitter verbal criticism.",
    clscore: 8,
  },
  {
    word: 'transcend',
    question:
      "The artist's work is considered to transcend the normal limits of human creativity. To 'transcend' limits means to:",
    choices: [
      'go beyond or rise above a boundary',
      'accept a boundary as fixed',
      'ignore a rule',
      'lower a standard',
    ],
    answer: 'go beyond or rise above a boundary',
    explanation:
      "To 'transcend' means to go beyond the range or limits of something, which is what the artist's work did.",
    clscore: 8,
  },
  {
    word: 'transient',
    question:
      "The city has a large transient population of students who only live there during the school year. A 'transient' visitor is:",
    choices: [
      'lasting only for a short time',
      'staying in one place forever',
      'a permanent resident',
      'a person who is a local citizen',
    ],
    answer: 'lasting only for a short time',
    explanation:
      "'Transient' describes something that is only temporary or lasting for a short time, like the students who only live there for a year.",
    clscore: 8,
  },
  {
    word: 'trite',
    question:
      "The movie was filled with trite phrases like 'you can do it!' that had been used in countless other films. A 'trite' phrase is:",
    choices: [
      'overused and lacking originality',
      'fresh and unique',
      'a brand new idea',
      'a rare and uncommon saying',
    ],
    answer: 'overused and lacking originality',
    explanation:
      "'Trite' describes a remark or idea that is overused and therefore lacks originality or freshness.",
    clscore: 8,
  },
  {
    word: 'ubiquitous',
    question:
      "In today's world, cell phones are an ubiquitous technology; they are found just about everywhere you go. 'Ubiquitous' means:",
    choices: [
      'present, appearing, or found everywhere',
      'rare and difficult to find',
      'hidden from view',
      'extremely expensive',
    ],
    answer: 'present, appearing, or found everywhere',
    explanation:
      "'Ubiquitous' is an adjective that describes something that is present everywhere, which fits the widespread use of cell phones.",
    clscore: 8,
  },
  {
    word: 'untenable',
    question:
      "The prosecution’s argument was untenable because it was based on a witness who had been proven to be lying. An 'untenable' argument is:",
    choices: [
      'not able to be supported or defended',
      'strong and convincing',
      'well-reasoned and logical',
      'a reasonable point of view',
    ],
    answer: 'not able to be supported or defended',
    explanation:
      "'Untenable' describes a position or argument that cannot be defended against criticism or attack.",
    clscore: 8,
  },
  {
    word: 'urbane',
    question:
      "The diplomat was known for his urbane and polished manners, making him a charming and sophisticated host. An 'urbane' gentleman is:",
    choices: [
      'courteous and refined in manner',
      'rude and uncivilized',
      'ignorant and unsophisticated',
      'rough and unpolished',
    ],
    answer: 'courteous and refined in manner',
    explanation:
      "'Urbane' is an adjective used to describe a person who is courteous and refined in manner, fitting the description of a sophisticated host.",
    clscore: 8,
  },
  {
    word: 'validate',
    question:
      "The new research findings helped to validate the scientist's original hypothesis. To 'validate' a claim is to:",
    choices: [
      'confirm or prove it to be true',
      'deny or disprove it',
      'question its authenticity',
      'completely ignore it',
    ],
    answer: 'confirm or prove it to be true',
    explanation:
      "To 'validate' is to confirm that something is true or accurate, which is what the new research did for the scientist's hypothesis.",
    clscore: 8,
  },
  {
    word: 'vanguard',
    question:
      "The small company was considered the vanguard of a new technological movement, leading the way for others to follow. The 'vanguard' of a movement is:",
    choices: [
      'the leading part of a group or movement',
      'the last part of a group',
      'the middle section of a group',
      'a follower of a movement',
    ],
    answer: 'the leading part of a group or movement',
    explanation:
      "The 'vanguard' is the leading position in a group or a movement, which the company held in the new technological field.",
    clscore: 8,
  },
  {
    word: 'vehement',
    question:
      "The candidate made a vehement speech against the new policy, using strong and passionate language to express his disapproval. A 'vehement' protest is:",
    choices: [
      'showing intense feeling or strong emotion',
      'weak and half-hearted',
      'silent and without action',
      'gentle and non-confrontational',
    ],
    answer: 'showing intense feeling or strong emotion',
    explanation:
      "'Vehement' describes something that is done with strong, intense, and often angry feeling, which fits the tone of the candidate's speech.",
    clscore: 8,
  },
  {
    word: 'verbose',
    question:
      "The student’s verbose essay was filled with unnecessary descriptions, making it difficult to find the main point. A 'verbose' essay is:",
    choices: [
      'using or containing more words than needed',
      'brief and to the point',
      'clear and concise',
      'short and simple',
    ],
    answer: 'using or containing more words than needed',
    explanation:
      "'Verbose' means using too many words, which is why the essay was difficult to read and lacked a clear main point.",
    clscore: 8,
  },
  {
    word: 'vertigo',
    question:
      "Climbing the tall ladder gave him a sense of vertigo, and he felt as if the world were spinning around him. People with 'vertigo' feel:",
    choices: [
      'a sensation of whirling and loss of balance',
      'extreme hunger',
      'intense anger',
      'a feeling of great joy',
    ],
    answer: 'a sensation of whirling and loss of balance',
    explanation:
      "'Vertigo' is a specific medical condition that causes a sensation of spinning or dizziness, which is why he felt the world was spinning.",
    clscore: 8,
  },
  {
    word: 'vestige',
    question:
      "The ancient stone foundation was the only vestige of the old castle that once stood on the hill. A 'vestige' of an old castle is:",
    choices: [
      'a small trace or remnant of something that once existed',
      'a brand new addition',
      'the main central tower',
      'a hidden treasure',
    ],
    answer: 'a small trace or remnant of something that once existed',
    explanation:
      "A 'vestige' is a small remaining part of something larger or older, which is what the stone foundation was to the castle.",
    clscore: 8,
  },
  {
    word: 'vicarious',
    question:
      'He got vicarious enjoyment from watching his children play sports, feeling their excitement as if it were his own. This means he experienced excitement:',
    choices: [
      'through the experiences of others',
      'directly and personally',
      'in a boring and uninspired way',
      'in a completely unreal and fake way',
    ],
    answer: 'through the experiences of others',
    explanation:
      "'Vicarious' describes a feeling that is experienced through the actions or feelings of another person, which is what he did by watching his children play.",
    clscore: 8,
  },
  {
    word: 'vigilance',
    question:
      "The security guards maintained constant vigilance, keeping a careful watch to prevent any trouble. 'Vigilance' most nearly means:",
    choices: [
      'the action of keeping careful watch',
      'a state of sleepiness or drowsiness',
      'a feeling of carelessness',
      'a condition of weakness',
    ],
    answer: 'the action of keeping careful watch',
    explanation:
      "'Vigilance' is the state of keeping careful watch for possible danger or difficulty.",
    clscore: 8,
  },
  {
    word: 'vindicate',
    question:
      "The DNA evidence served to vindicate the man, finally clearing him of the crime he didn't commit. To 'vindicate' someone is to:",
    choices: [
      'clear someone of blame or suspicion',
      'accuse someone of wrongdoing',
      'punish someone for a crime',
      "reject a person's claims",
    ],
    answer: 'clear someone of blame or suspicion',
    explanation:
      "To 'vindicate' means to clear someone of blame or suspicion, as the DNA evidence did for the man.",
    clscore: 8,
  },
  {
    word: 'virulent',
    question:
      "The doctors were worried about the virulent new strain of the flu, which was causing severe illness and hospitalizations. A 'virulent' disease is:",
    choices: [
      'extremely severe or harmful in its effects',
      'mild and easily curable',
      'designed to promote healing',
      'completely harmless',
    ],
    answer: 'extremely severe or harmful in its effects',
    explanation:
      "'Virulent' describes a disease or a poison that is extremely severe, harmful, or deadly.",
    clscore: 8,
  },
  {
    word: 'viscous',
    question:
      "The syrup was so viscous that it poured out of the bottle very slowly. A 'viscous' liquid is:",
    choices: [
      'having a thick, sticky consistency',
      'thin and runny like water',
      'completely clear and transparent',
      'hard and solid',
    ],
    answer: 'having a thick, sticky consistency',
    explanation:
      "'Viscous' is an adjective used to describe a liquid that is thick and sticky, and thus resistant to flowing freely.",
    clscore: 8,
  },
  {
    word: 'vitality',
    question:
      "Despite her age, the old woman had a great deal of vitality, hiking every day and volunteering in her community. 'Vitality' means:",
    choices: [
      'the state of being strong and active; energy',
      'a sense of sadness or fatigue',
      'a lack of energy or liveliness',
      'a feeling of weakness',
    ],
    answer: 'the state of being strong and active; energy',
    explanation:
      "'Vitality' refers to the state of being strong, full of energy, and lively.",
    clscore: 8,
  },
  {
    word: 'vivacious',
    question:
      "She was a vivacious hostess, full of energy and charm, and she made sure every guest felt welcome. A 'vivacious' person is:",
    choices: [
      'attractively lively and animated',
      'quiet and reserved',
      'dull and uninteresting',
      'serious and somber',
    ],
    answer: 'attractively lively and animated',
    explanation:
      "'Vivacious' describes a person who is lively, animated, and full of energy.",
    clscore: 8,
  },
  {
    word: 'volatile',
    question:
      "The political situation in the region was highly volatile, with the potential for sudden, violent changes at any moment. A 'volatile' situation is:",
    choices: [
      'likely to change rapidly and unpredictably',
      'calm and stable',
      'peaceful and secure',
      'completely predictable',
    ],
    answer: 'likely to change rapidly and unpredictably',
    explanation:
      "'Volatile' describes a situation that is likely to change suddenly and often for the worse.",
    clscore: 8,
  },
  {
    word: 'voracious',
    question:
      "He was a voracious reader, devouring an entire book in a single afternoon. A 'voracious' reader is:",
    choices: [
      'having a huge appetite or great eagerness',
      'reluctant or uninterested',
      'slow and careful',
      'a person who reads very little',
    ],
    answer: 'having a huge appetite or great eagerness',
    explanation:
      "'Voracious' describes a strong, insatiable appetite for something, whether it be food or, in this case, books.",
    clscore: 8,
  },
  {
    word: 'zenith',
    question:
      "The rock band reached the zenith of its popularity in the 1980s, when they sold out stadiums worldwide. The 'zenith' of a career is its:",
    choices: [
      'the time at which something is most powerful or successful',
      'the beginning or starting point',
      'the period of decline',
      'a moment of failure',
    ],
    answer: 'the time at which something is most powerful or successful',
    explanation:
      "'Zenith' means the highest point or peak of something, which in this context refers to the peak of the band's popularity.",
    clscore: 8,
  },
  {
    word: 'epitome',
    question:
      "She is the epitome of a modern leader, showing both strength and compassion. What does 'epitome' mean?",
    choices: [
      'a perfect or typical example of a quality',
      'the complete opposite of a quality',
      'a critical enemy',
      'a person who is hard to define',
    ],
    answer: 'a perfect or typical example of a quality',
    explanation:
      "An 'epitome' is a person or thing that is a perfect example of a particular quality or type.",
    clscore: 8,
  },
  {
    word: 'ethical',
    question:
      "Lying to your parents is not an ethical thing to do, even if it seems harmless. An 'ethical' decision follows:",
    choices: [
      'moral principles and accepted rules of conduct',
      'a path of dishonesty',
      'a selfish motivation',
      'criminal behavior',
    ],
    answer: 'moral principles and accepted rules of conduct',
    explanation:
      "'Ethical' describes something that is morally right and follows a set of accepted principles of conduct.",
    clscore: 8,
  },
  {
    word: 'ethnic',
    question:
      "The restaurant serves a variety of ethnic dishes from different countries around the world. What does 'ethnic' relate to?",
    choices: [
      'a population subgroup with a common national or cultural tradition',
      'mathematical formulas',
      'the weather',
      'mechanical devices',
    ],
    answer:
      'a population subgroup with a common national or cultural tradition',
    explanation:
      "'Ethnic' refers to the cultural or national traditions of a particular group of people.",
    clscore: 8,
  },
  {
    word: 'exacerbate',
    question:
      "The lack of rain will only exacerbate the drought, making the problem even worse. To 'exacerbate' a problem is to:",
    choices: [
      'make it more severe or intense',
      'solve or fix it',
      'ignore or disregard it',
      'lessen its impact',
    ],
    answer: 'make it more severe or intense',
    explanation:
      "To 'exacerbate' means to make a problem, bad situation, or negative feeling worse.",
    clscore: 8,
  },
  {
    word: 'exorbitant',
    question:
      "The restaurant charged an exorbitant price for a single glass of water; it was far too expensive. 'Exorbitant' most nearly means:",
    choices: [
      'unreasonably high or excessive',
      'reasonable and fair',
      'normal or expected',
      'very cheap and affordable',
    ],
    answer: 'unreasonably high or excessive',
    explanation:
      "'Exorbitant' describes a price or amount that is unreasonably high.",
    clscore: 8,
  },
  {
    word: 'extraneous',
    question:
      "The report was well-written but contained a lot of extraneous details that had nothing to do with the main topic. 'Extraneous' most nearly means:",
    choices: [
      'irrelevant or unrelated to the subject',
      'important and essential',
      'necessary for understanding',
      'useful and helpful',
    ],
    answer: 'irrelevant or unrelated to the subject',
    explanation:
      "'Extraneous' means not forming an essential or vital part of something, which describes the unnecessary details in the report.",
    clscore: 8,
  },
  {
    word: 'falter',
    question:
      "The speaker began to falter during his presentation, losing his confidence and stumbling over his words. If someone begins to 'falter', they:",
    choices: [
      'start to lose strength or momentum',
      'move very quickly and confidently',
      'succeed beyond expectations',
      'stand firmly in place',
    ],
    answer: 'start to lose strength or momentum',
    explanation:
      "To 'falter' means to lose strength, hesitation, or stumble, which fits the speaker's loss of confidence.",
    clscore: 8,
  },
  {
    word: 'feasible',
    question:
      "The architect presented a new building plan that seemed feasible because it was practical and could be completed on time. A 'feasible' plan is:",
    choices: [
      'possible to do easily or conveniently',
      'impossible to carry out',
      'very unlikely to work',
      'a false promise',
    ],
    answer: 'possible to do easily or conveniently',
    explanation:
      "'Feasible' describes something that is possible to achieve or do, which is why the architect's plan was accepted.",
    clscore: 8,
  },
  {
    word: 'fervent',
    question:
      "She was a fervent supporter of the charity, dedicating all her free time to its cause with great passion. 'Fervent' most nearly means:",
    choices: [
      'having or displaying a passionate intensity',
      'indifferent or uncaring',
      'cold and emotionless',
      'apathetic and unmotivated',
    ],
    answer: 'having or displaying a passionate intensity',
    explanation:
      "'Fervent' is an adjective used to describe a person who has intense and passionate feelings about something.",
    clscore: 8,
  },
  {
    word: 'flaunt',
    question:
      "He would often flaunt his expensive new car by driving it through the busiest streets to get attention. To 'flaunt' wealth is to:",
    choices: [
      'display it openly to provoke envy or admiration',
      'hide it from others',
      'save it for the future',
      'spend it quietly and privately',
    ],
    answer: 'display it openly to provoke envy or admiration',
    explanation:
      "To 'flaunt' means to display something ostentatiously, especially in order to show off.",
    clscore: 8,
  },
  {
    word: 'forensic',
    question:
      "The forensic scientist presented her findings on the crime scene to the court. A 'forensic' report relates to:",
    choices: [
      'the use of scientific methods in the investigation of a crime',
      'weather patterns',
      'culinary arts',
      'travel and tourism',
    ],
    answer: 'the use of scientific methods in the investigation of a crime',
    explanation:
      "'Forensic' relates to the application of scientific knowledge to legal problems, especially in criminal investigations.",
    clscore: 8,
  },
  {
    word: 'fortitude',
    question:
      "He showed great fortitude during his long illness, enduring the pain with immense courage. 'Fortitude' most nearly means:",
    choices: [
      'courage in the face of pain or adversity',
      'a feeling of fear or timidity',
      'physical weakness',
      'intense anger',
    ],
    answer: 'courage in the face of pain or adversity',
    explanation:
      "'Fortitude' is the mental and emotional strength to endure pain or difficulty with courage.",
    clscore: 8,
  },
  {
    word: 'fortuitous',
    question:
      "It was a fortuitous meeting that led to his dream job; he just happened to be in the right place at the right time. 'Fortuitous' most nearly means:",
    choices: [
      'happening by a lucky chance',
      'planned and intentional',
      'expected and predictable',
      'unlucky or unfortunate',
    ],
    answer: 'happening by a lucky chance',
    explanation:
      "'Fortuitous' describes an event that happens by chance, often resulting in a fortunate outcome.",
    clscore: 8,
  },
  {
    word: 'gregarious',
    question:
      "The gregarious new student made friends with everyone in his class almost immediately. A 'gregarious' person is:",
    choices: [
      'fond of company; sociable',
      'shy and reserved',
      'quiet and unsociable',
      'an introverted person',
    ],
    answer: 'fond of company; sociable',
    explanation:
      "'Gregarious' describes a person who is fond of company and sociable.",
    clscore: 8,
  },
  {
    word: 'heinous',
    question:
      "The court described the act as a truly heinous crime due to its shocking and evil nature. A 'heinous' crime is:",
    choices: [
      'utterly odious or evil',
      'minor and insignificant',
      'completely legal',
      'humorous or funny',
    ],
    answer: 'utterly odious or evil',
    explanation:
      "'Heinous' describes a crime or act that is monstrously evil and shocking.",
    clscore: 8,
  },
  {
    word: 'hiatus',
    question:
      "The band announced they would be taking a two-year hiatus to rest and work on solo projects. Taking a 'hiatus' means:",
    choices: [
      'a pause or break in a sequence',
      'working continuously and without a break',
      'moving at a very fast pace',
      'finishing a project quickly',
    ],
    answer: 'a pause or break in a sequence',
    explanation:
      "A 'hiatus' is a break or interruption in an activity or sequence, which is what the band did.",
    clscore: 8,
  },
  {
    word: 'austerity',
    question:
      "The family was forced into a period of financial austerity, cutting all unnecessary expenses to save money. What does 'austerity' mean?",
    choices: [
      'strictness and severity of manner or living',
      'a time of luxury and wealth',
      'a moment of great joy',
      'a celebration of success',
    ],
    answer: 'strictness and severity of manner or living',
    explanation:
      "'Austerity' refers to a period of sternness or severity, especially in terms of self-discipline or financial cutbacks.",
    clscore: 7,
  },
  {
    word: 'holocaust',
    question:
      "The fire caused a complete holocaust in the forest, burning thousands of acres of trees to the ground. A 'holocaust' is:",
    choices: [
      'destruction or slaughter on a mass scale',
      'a public celebration',
      'a successful rescue mission',
      'a small, contained fire',
    ],
    answer: 'destruction or slaughter on a mass scale',
    explanation:
      "A 'holocaust' refers to a great or complete destruction, especially by fire.",
    clscore: 7,
  },
  {
    word: 'homogeneous',
    question:
      "The town had a very homogeneous population, made up almost entirely of people from the same cultural background. 'Homogeneous' most nearly means:",
    choices: [
      'of the same kind; alike',
      'different or varied',
      'diverse and mixed',
      'divided into different types',
    ],
    answer: 'of the same kind; alike',
    explanation:
      "'Homogeneous' describes something that is uniform or made up of the same kind of elements.",
    clscore: 7,
  },
  {
    word: 'hypochondriac',
    question:
      "He was such a hypochondriac that he was convinced he had a rare disease after reading a single article about it. A 'hypochondriac' often worries about:",
    choices: [
      "being excessively worried about one's health",
      'having little or no money',
      'running out of food',
      'missing a flight or train',
    ],
    answer: "being excessively worried about one's health",
    explanation:
      "A 'hypochondriac' is a person who is abnormally anxious about their health and imagines they have illnesses.",
    clscore: 7,
  },
  {
    word: 'iconoclast',
    question:
      "The revolutionary painter was an iconoclast, challenging all the traditional art forms of his time. An 'iconoclast' is someone who:",
    choices: [
      'attacks cherished beliefs or institutions',
      'supports religious traditions',
      'follows all established rules',
      'praises leaders without question',
    ],
    answer: 'attacks cherished beliefs or institutions',
    explanation:
      "An 'iconoclast' is a person who attacks or criticizes established beliefs and institutions.",
    clscore: 7,
  },
  {
    word: 'imbibe',
    question:
      "The students gathered at the pub to imbibe some drinks after their final exams. To 'imbibe' means to:",
    choices: [
      'to drink (alcohol)',
      'to eat a large meal',
      'to go to sleep',
      'to rest quietly',
    ],
    answer: 'to drink (alcohol)',
    explanation: "To 'imbibe' means to drink, especially alcohol.",
    clscore: 7,
  },
  {
    word: 'impecunious',
    question:
      "He was a famously impecunious artist who had to struggle to make a living. An 'impecunious' person is:",
    choices: [
      'having little or no money',
      'extremely wealthy',
      'very happy and content',
      'generous and giving',
    ],
    answer: 'having little or no money',
    explanation:
      "'Impecunious' describes a person who has very little money, which is why the artist struggled.",
    clscore: 7,
  },
  {
    word: 'impertinent',
    question:
      "The boy was scolded for his impertinent behavior when he interrupted the adult's conversation. 'Impertinent' most nearly means:",
    choices: [
      'rude and disrespectful',
      'polite and courteous',
      'kind and helpful',
      'quiet and reserved',
    ],
    answer: 'rude and disrespectful',
    explanation:
      "'Impertinent' describes a person or their actions as not showing proper respect, being rude or insolent.",
    clscore: 7,
  },
  {
    word: 'increment',
    question:
      "Each time you click the button, the number increases by an increment of one. An 'increment' is:",
    choices: [
      'an increase or addition',
      'a reduction or decrease',
      'a total loss',
      'a complete cut',
    ],
    answer: 'an increase or addition',
    explanation:
      "An 'increment' is an increase or addition, especially one of a series of fixed increases.",
    clscore: 7,
  },
  {
    word: 'infidel',
    question:
      "Historically, the term infidel was used by a group to describe anyone who did not share their religious beliefs. An 'infidel' is:",
    choices: [
      'a person who does not believe in a particular religion',
      'a priest or holy person',
      'a dedicated follower',
      'a strong believer',
    ],
    answer: 'a person who does not believe in a particular religion',
    explanation:
      "An 'infidel' is a person who does not believe in religion or who adheres to a religion other than one's own.",
    clscore: 7,
  },
  {
    word: 'injunction',
    question:
      "The judge issued an injunction to prevent the company from demolishing the historic building. An 'injunction' is:",
    choices: [
      'a formal court order to do or stop an action',
      'a permission slip',
      'a simple request',
      'a favor or gift',
    ],
    answer: 'a formal court order to do or stop an action',
    explanation:
      "An 'injunction' is a legal order from a court that prohibits a person or group from doing a specific act.",
    clscore: 7,
  },
  {
    word: 'insomnia',
    question:
      "After drinking too much coffee, she suffered from insomnia and was unable to sleep all night. If someone has 'insomnia', they cannot:",
    choices: [
      'sleep or fall asleep',
      'eat food',
      'walk properly',
      'breathe freely',
    ],
    answer: 'sleep or fall asleep',
    explanation:
      "'Insomnia' is a common sleep disorder that makes it difficult to fall or stay asleep.",
    clscore: 7,
  },
  {
    word: 'intimacy',
    question:
      "They were close friends who shared a deep sense of emotional intimacy. 'Intimacy' most nearly means:",
    choices: [
      'close familiarity or friendship',
      'great physical distance',
      'a feeling of anger',
      'a sense of formality',
    ],
    answer: 'close familiarity or friendship',
    explanation:
      "'Intimacy' refers to close familiarity, which is often a result of having a close relationship with someone.",
    clscore: 7,
  },
  {
    word: 'invective',
    question:
      "After the argument, the politician spewed a stream of angry invective at his opponent. 'Invective' most nearly means:",
    choices: [
      'insulting, abusive, or highly critical language',
      'words of praise and admiration',
      'a long period of silence',
      'a sense of honor',
    ],
    answer: 'insulting, abusive, or highly critical language',
    explanation:
      "'Invective' is an adjective that describes insulting, abusive, or highly critical language.",
    clscore: 7,
  },
  {
    word: 'jaundice',
    question:
      "The baby had jaundice shortly after birth, and his skin had a noticeable yellowish tint. If someone has 'jaundice', their skin may look:",
    choices: ['yellow', 'blue', 'red', 'pale'],
    answer: 'yellow',
    explanation:
      "'Jaundice' is a medical condition that causes the yellowing of the skin and eyes.",
    clscore: 7,
  },
  {
    word: 'jibe',
    question:
      "His story about what happened didn't quite jibe with the evidence found at the scene. To 'jibe' with something means to:",
    choices: [
      'be in agreement or consistent with',
      'disagree or be in opposition to',
      'argue and fight',
      'oppose and contradict',
    ],
    answer: 'be in agreement or consistent with',
    explanation:
      "To 'jibe' means to be in harmony or in agreement, which the story was not with the evidence.",
    clscore: 7,
  },
  {
    word: 'jostle',
    question:
      "As the concert began, the crowd started to jostle each other to get closer to the stage. In a crowd, people may 'jostle' you, meaning they:",
    choices: [
      'push, elbow, or bump against',
      'hug or embrace you',
      'help you to move forward',
      'ignore you completely',
    ],
    answer: 'push, elbow, or bump against',
    explanation:
      "To 'jostle' means to push or bump against someone roughly, as people do in a crowded space.",
    clscore: 7,
  },
  {
    word: 'knack',
    question:
      "He had a natural knack for solving puzzles quickly and effortlessly. What is a 'knack'?",
    choices: [
      'a special skill or talent for doing something easily',
      'a personal weakness',
      'a difficult problem',
      'a feeling of fear',
    ],
    answer: 'a special skill or talent for doing something easily',
    explanation:
      "A 'knack' is a special skill, talent, or facility for doing something, which is why he was so good at puzzles.",
    clscore: 7,
  },
  {
    word: 'languish',
    question:
      "The old factory was left to languish after the company went out of business, falling into disrepair. To 'languish' means to:",
    choices: [
      'to lose or lack vitality; grow weak',
      'to grow and flourish',
      'to improve rapidly',
      'to prosper and succeed',
    ],
    answer: 'to lose or lack vitality; grow weak',
    explanation:
      "To 'languish' means to lose strength or vitality and to suffer from being neglected.",
    clscore: 7,
  },
  {
    word: 'levy',
    question:
      "The new government plans to levy a tax on all luxury goods. Governments often 'levy' taxes, meaning they:",
    choices: [
      'impose or collect a tax or fee',
      'remove a tax',
      'lower the amount of a tax',
      'avoid paying taxes',
    ],
    answer: 'impose or collect a tax or fee',
    explanation: "To 'levy' means to impose a tax, fee, or fine.",
    clscore: 7,
  },
  {
    word: 'lexicon',
    question:
      "As a writer, she had a vast lexicon, knowing the meaning of a great number of words. A 'lexicon' is:",
    choices: [
      'the vocabulary of a person, language, or branch of knowledge',
      'a book of poetry',
      'a long novel',
      'a detailed encyclopedia',
    ],
    answer: 'the vocabulary of a person, language, or branch of knowledge',
    explanation:
      "A 'lexicon' refers to the vocabulary of a person or a language, which fits the description of the writer.",
    clscore: 7,
  },
  {
    word: 'loquacious',
    question:
      "The loquacious professor was known for his long, detailed lectures that rarely ended on time. A 'loquacious' person is:",
    choices: [
      'tending to talk a great deal; talkative',
      'silent and reserved',
      'shy and timid',
      'quiet and introverted',
    ],
    answer: 'tending to talk a great deal; talkative',
    explanation:
      "'Loquacious' is an adjective used to describe someone who talks a lot.",
    clscore: 7,
  },
  {
    word: 'malign',
    question:
      "His political opponent tried to malign his character by spreading false and hurtful rumors. To 'malign' someone means:",
    choices: [
      'to speak about them in a critical or malicious way',
      'to praise or admire them',
      'to respect their point of view',
      'to stand in awe of them',
    ],
    answer: 'to speak about them in a critical or malicious way',
    explanation:
      "To 'malign' means to speak ill of someone in a malicious and defamatory way.",
    clscore: 7,
  },
  {
    word: 'melodramatic',
    question:
      "Her melodramatic reaction to a small scratch on her arm included loud crying and wailing. 'Melodramatic' most nearly means:",
    choices: [
      'overly exaggerated and emotional',
      'calm and composed',
      'rational and logical',
      'serious and somber',
    ],
    answer: 'overly exaggerated and emotional',
    explanation:
      "'Melodramatic' describes behavior that is exaggeratedly emotional or sentimental, often for dramatic effect.",
    clscore: 7,
  },
  {
    word: 'menial',
    question:
      "He was given a menial job of cleaning the floors, which was seen as a low-level task. A 'menial' job is:",
    choices: [
      'not requiring much skill and lacking prestige',
      'prestigious and important',
      'high-level and complex',
      'a highly respected profession',
    ],
    answer: 'not requiring much skill and lacking prestige',
    explanation:
      "'Menial' describes work that is not challenging and is generally seen as low-level or degrading.",
    clscore: 7,
  },
  {
    word: 'mettle',
    question:
      "The team showed their true mettle by coming back from a huge deficit to win the game. 'Mettle' most nearly means:",
    choices: [
      "a person's ability to cope well with difficulties; spirit and resilience",
      'a sense of fear or timidity',
      'physical weakness',
      'a feeling of doubt',
    ],
    answer:
      "a person's ability to cope well with difficulties; spirit and resilience",
    explanation:
      "'Mettle' refers to a person's courage, spirit, and strength of character.",
    clscore: 7,
  },
  {
    word: 'narcissism',
    question:
      "The actor's narcissism was on full display as he spent his entire interview talking about his own greatness. 'Narcissism' most nearly means:",
    choices: [
      'excessive interest in or admiration of oneself',
      'a state of humility',
      'a sense of kindness towards others',
      'a feeling of modesty',
    ],
    answer: 'excessive interest in or admiration of oneself',
    explanation:
      "'Narcissism' is an excessive interest in oneself and one's physical appearance.",
    clscore: 7,
  },
  {
    word: 'neophyte',
    question:
      "As a neophyte in the world of computer programming, she had a lot to learn. A 'neophyte' is:",
    choices: [
      'a person who is new to a subject or skill',
      'an expert in a field',
      'a professional teacher',
      'an experienced leader',
    ],
    answer: 'a person who is new to a subject or skill',
    explanation:
      "A 'neophyte' is a person who is new to a subject, skill, or belief; a novice.",
    clscore: 7,
  },
  {
    word: 'notable',
    question:
      "The company's new policy was a notable change from their old ways. A 'notable' event is:",
    choices: [
      'worthy of attention or remarkable',
      'ordinary and common',
      'unimportant and trivial',
      'a small, everyday occurrence',
    ],
    answer: 'worthy of attention or remarkable',
    explanation:
      "'Notable' describes something that is worthy of attention or remarkable because of its importance or excellence.",
    clscore: 7,
  },
  {
    word: 'occult',
    question:
      "The book explored topics related to the occult, such as magic and witchcraft. The word 'occult' relates to:",
    choices: [
      'mysterious, supernatural, or magical powers',
      'modern science and technology',
      'the natural world',
      'the field of medicine',
    ],
    answer: 'mysterious, supernatural, or magical powers',
    explanation:
      "'Occult' refers to a mysterious or supernatural force or knowledge.",
    clscore: 7,
  },
  {
    word: 'oligarchy',
    question:
      "The small country was ruled by an oligarchy, a small group of wealthy families who held all the power. An 'oligarchy' is government by:",
    choices: [
      'a small group of people',
      'a single ruler',
      'all the people',
      'a large and diverse group',
    ],
    answer: 'a small group of people',
    explanation:
      "An 'oligarchy' is a form of government in which a small group of people holds all the power.",
    clscore: 7,
  },
  {
    word: 'omnipotent',
    question:
      "In the story, the king believed he was omnipotent, able to control everything and everyone in his kingdom. 'Omnipotent' most nearly means:",
    choices: [
      'having unlimited power',
      'weak and powerless',
      'limited in strength',
      'small and insignificant',
    ],
    answer: 'having unlimited power',
    explanation:
      "'Omnipotent' means having unlimited power, which is what the king believed he had.",
    clscore: 7,
  },
  {
    word: 'opulence',
    question:
      "The mansion's opulence was shown by its gold-plated faucets, marble floors, and extravagant furniture. 'Opulence' most nearly means:",
    choices: [
      'great wealth and luxury',
      'a state of poverty',
      'a simple and plain design',
      'a lack of comfort',
    ],
    answer: 'great wealth and luxury',
    explanation:
      "'Opulence' refers to great wealth, extravagance, or luxury, which the mansion's features demonstrated.",
    clscore: 7,
  },
  {
    word: 'parable',
    question:
      "The teacher told the students a simple parable about a boy who cried wolf to teach them a lesson about honesty. A 'parable' is:",
    choices: [
      'a simple story used to illustrate a moral or spiritual lesson',
      'a long and complicated song',
      'a fictional novel',
      'a book of poetry',
    ],
    answer: 'a simple story used to illustrate a moral or spiritual lesson',
    explanation: "A 'parable' is a simple story used to teach a moral lesson.",
    clscore: 7,
  },
  {
    word: 'paragon',
    question:
      "She was a paragon of kindness, known throughout the community for her generous spirit. 'Paragon' most nearly means:",
    choices: [
      'a person or thing regarded as a perfect example of a quality',
      'a complete failure',
      'a confusing example',
      'a common mistake',
    ],
    answer: 'a person or thing regarded as a perfect example of a quality',
    explanation:
      "A 'paragon' is a model of excellence or perfection, which she was for kindness.",
    clscore: 7,
  },
  {
    word: 'pastoral',
    question:
      "The painting depicted a quiet, pastoral scene of a farmer tending his sheep in a green field. A 'pastoral' scene is:",
    choices: [
      'relating to the countryside and rural life',
      'related to the city and urban areas',
      'related to industry and machines',
      'a crowded place',
    ],
    answer: 'relating to the countryside and rural life',
    explanation:
      "'Pastoral' is an adjective that describes something related to the countryside or rural life.",
    clscore: 7,
  },
  {
    word: 'patriarch',
    question:
      "As the oldest male in the family, he was considered the patriarch, making all the important decisions. A 'patriarch' is:",
    choices: [
      'the male head of a family or tribe',
      'the female head of a family',
      'a young child in a family',
      'a servant in the house',
    ],
    answer: 'the male head of a family or tribe',
    explanation: "A 'patriarch' is the male head of a family or group.",
    clscore: 7,
  },
  {
    word: 'perturbation',
    question:
      "The sudden loud noise caused a great perturbation in the room, making everyone jump in surprise. 'Perturbation' most nearly means:",
    choices: [
      'a state of mental or emotional disturbance',
      'a feeling of great calm',
      'a sense of peacefulness',
      'a long period of silence',
    ],
    answer: 'a state of mental or emotional disturbance',
    explanation:
      "'Perturbation' is a state of being agitated, disturbed, or worried.",
    clscore: 7,
  },
  {
    word: 'philanthropist',
    question:
      "The wealthy philanthropist donated millions of dollars to build a new hospital for the city. A 'philanthropist' is someone who:",
    choices: [
      'seeks to promote the welfare of others, especially through generous donations',
      'hoards money for themselves',
      'writes famous books',
      'leads armies into battle',
    ],
    answer:
      'seeks to promote the welfare of others, especially through generous donations',
    explanation:
      "A 'philanthropist' is a person who promotes the welfare of others, especially by donating money to good causes.",
    clscore: 7,
  },
  {
    word: 'phlegmatic',
    question:
      "Even when faced with a crisis, he remained phlegmatic, staying calm and unemotional. A 'phlegmatic' person is:",
    choices: [
      'having a calm and unemotional temperament',
      'easily excitable',
      'full of energy',
      'wild and chaotic',
    ],
    answer: 'having a calm and unemotional temperament',
    explanation:
      "'Phlegmatic' describes a person who is not easily excited and remains calm and composed.",
    clscore: 7,
  },
  {
    word: 'pinnacle',
    question:
      "Winning the Olympic gold medal was the pinnacle of her career as an athlete. Reaching the 'pinnacle' of success means:",
    choices: [
      'the highest point of a career or achievement',
      'the very start of a career',
      'the decline of a career',
      'a moment of failure',
    ],
    answer: 'the highest point of a career or achievement',
    explanation:
      "'Pinnacle' refers to the most successful or highest point of something, such as a career.",
    clscore: 7,
  },
  {
    word: 'portly',
    question:
      "The cartoon character was a portly gentleman with a round belly and a good-natured smile. A 'portly' man is:",
    choices: [
      'stout or somewhat fat',
      'very thin',
      'extremely tall',
      'very short',
    ],
    answer: 'stout or somewhat fat',
    explanation:
      "'Portly' is a polite term used to describe a person, usually a man, who is somewhat fat or stout.",
    clscore: 7,
  },
  {
    word: 'prelude',
    question:
      "The dark clouds were a prelude to the storm that was about to hit the city. A 'prelude' is:",
    choices: [
      'an introduction to a more important event',
      'the ending or conclusion of something',
      'a short summary',
      'a final thought or conclusion',
    ],
    answer: 'an introduction to a more important event',
    explanation:
      "A 'prelude' is an action or event that serves as an introduction to something more important.",
    clscore: 7,
  },
  {
    word: 'perpetrate',
    question:
      "The police were determined to find the person who had perpetrated the crime. To 'perpetrate' a crime means to:",
    choices: [
      'carry out or commit a harmful action',
      'avoid doing something bad',
      'stop a crime from happening',
      'hide the evidence of a crime',
    ],
    answer: 'carry out or commit a harmful action',
    explanation:
      "To 'perpetrate' means to carry out or commit a harmful, illegal, or immoral act.",
    clscore: 7,
  },
  {
    word: 'rapacious',
    question:
      "The rapacious developer bought up all the land he could, showing no concern for the people who were displaced. A 'rapacious' person is:",
    choices: [
      'aggressively greedy or grasping',
      'gentle and kind',
      'calm and peaceful',
      'a person who shares everything',
    ],
    answer: 'aggressively greedy or grasping',
    explanation:
      "'Rapacious' is an adjective used to describe a person who is aggressively greedy or hungry for money.",
    clscore: 7,
  },
  {
    word: 'reciprocal',
    question:
      "Their friendship was built on a reciprocal relationship, where both people gave and received support. 'Reciprocal' most nearly means:",
    choices: [
      'given, felt, or done in return by both sides',
      'one-sided and unequal',
      'different and separate',
      'completely opposite',
    ],
    answer: 'given, felt, or done in return by both sides',
    explanation:
      "'Reciprocal' describes a relationship where there is a mutual exchange between two or more people.",
    clscore: 7,
  },
  {
    word: 'recluse',
    question:
      "The old man was a recluse, living alone in a cabin in the woods and avoiding all human contact. A 'recluse' is:",
    choices: [
      'a person who lives a solitary life and avoids people',
      'a strong leader',
      'a frequent traveler',
      'a public speaker',
    ],
    answer: 'a person who lives a solitary life and avoids people',
    explanation:
      "A 'recluse' is a person who lives in seclusion or isolation from others.",
    clscore: 7,
  },
  {
    word: 'rectitude',
    question:
      "The judge was known for his unshakeable rectitude and was praised for his moral integrity. 'Rectitude' most nearly means:",
    choices: [
      'moral uprightness; righteousness',
      'a sense of dishonesty',
      'a feeling of fear',
      'a sense of doubt',
    ],
    answer: 'moral uprightness; righteousness',
    explanation: "'Rectitude' refers to morally correct behavior or thinking.",
    clscore: 7,
  },
  {
    word: 'scourge',
    question:
      "The plague was a terrible scourge on the population, causing immense suffering and death. A 'scourge' can refer to:",
    choices: [
      'a person or thing that causes great trouble or suffering',
      'a welcomed gift',
      'a great reward',
      'a source of comfort',
    ],
    answer: 'a person or thing that causes great trouble or suffering',
    explanation:
      "A 'scourge' is a person or thing that causes great trouble or suffering.",
    clscore: 7,
  },
  {
    word: 'tantalize',
    question:
      "The smell of fresh-baked cookies in the kitchen was meant to tantalize the children who were waiting to eat. To 'tantalize' someone is to:",
    choices: [
      'torment or tease with the sight of something desired',
      'comfort or soothe',
      'ignore and disregard',
      'reward with something good',
    ],
    answer: 'torment or tease with the sight of something desired',
    explanation:
      "To 'tantalize' is to torment someone by showing them something they desire but keeping it out of their reach.",
    clscore: 7,
  },
  {
    word: 'temerity',
    question:
      "She had the temerity to ask the CEO for a raise on her very first day of work. 'Temerity' most nearly means:",
    choices: [
      'excessive confidence or boldness',
      'a feeling of shyness',
      'a feeling of fear or cowardice',
      'a sense of doubt',
    ],
    answer: 'excessive confidence or boldness',
    explanation:
      "'Temerity' is the quality of being recklessly bold or audacious.",
    clscore: 7,
  },
  {
    word: 'covenant',
    question:
      "The two countries signed a covenant, promising to support each other in times of war. What does 'covenant' mean?",
    choices: [
      'a formal, solemn, and binding agreement',
      'a physical fight or dispute',
      'a gift or offering',
      'a public speech',
    ],
    answer: 'a formal, solemn, and binding agreement',
    explanation:
      "A 'covenant' is a formal agreement or promise, particularly a legal contract.",
    clscore: 7,
  },
  {
    word: 'covert',
    question:
      "The spy engaged in a covert mission, operating secretly to avoid detection. 'Covert' most nearly means:",
    choices: [
      'not openly acknowledged or displayed; secret',
      'open and public',
      'known to everyone',
      'a public event',
    ],
    answer: 'not openly acknowledged or displayed; secret',
    explanation:
      "'Covert' is an adjective that describes something that is not openly done or displayed; it is secret.",
    clscore: 7,
  },
  {
    word: 'credulity',
    question:
      "His stories were so unbelievable that they stretched the limits of her credulity. 'Credulity' most nearly means:",
    choices: [
      'a tendency to be too ready to believe that something is true',
      'a state of wisdom',
      'a feeling of great knowledge',
      'a sense of doubt',
    ],
    answer: 'a tendency to be too ready to believe that something is true',
    explanation:
      "'Credulity' is the tendency to believe things too readily or easily, without careful examination.",
    clscore: 7,
  },
  {
    word: 'culpable',
    question:
      'The police investigation found the man to be culpable for the crime. The thief was found culpable for the crime.',
    choices: [
      'deserving of blame',
      'innocent and blameless',
      'without guilt',
      'a person who is without blame',
    ],
    answer: 'deserving of blame',
    explanation:
      "'Culpable' means deserving blame, which is what the investigation found the man to be.",
    clscore: 7,
  },
  {
    word: 'daunt',
    question:
      "The sight of the huge mountain did not daunt the experienced climbers; they were ready for the challenge. To 'daunt' most nearly means:",
    choices: [
      'to make someone feel intimidated or discouraged',
      'to motivate someone',
      'to praise someone',
      'to inspire with courage',
    ],
    answer: 'to make someone feel intimidated or discouraged',
    explanation:
      "To 'daunt' means to make someone feel intimidated or discouraged, which the mountain did not do to the climbers.",
    clscore: 7,
  },
  {
    word: 'dearth',
    question:
      "There was a dearth of water in the desert, which made it difficult to travel. What does 'dearth' mean?",
    choices: [
      'a scarcity or lack of something',
      'an abundance of something',
      'a feeling of wealth',
      'a great deal of plenty',
    ],
    answer: 'a scarcity or lack of something',
    explanation:
      "A 'dearth' is a scarcity or lack of something, which in this case was water.",
    clscore: 7,
  },
  {
    word: 'decrepit',
    question:
      "The decrepit old barn was falling apart, with a roof that was collapsing and walls that were rotting. 'Decrepit' most nearly means:",
    choices: [
      'worn out or ruined because of age or neglect',
      'young and new',
      'strong and well-built',
      'healthy and in good condition',
    ],
    answer: 'worn out or ruined because of age or neglect',
    explanation:
      "'Decrepit' describes something that is old, worn out, or in a state of disrepair due to age.",
    clscore: 7,
  },
  {
    word: 'defection',
    question:
      "The spy's defection to the other side was seen as an act of betrayal. What does 'defection' mean?",
    choices: [
      "the desertion of one's country or cause",
      'a strong sense of loyalty',
      'a safe return',
      'a feeling of support',
    ],
    answer: "the desertion of one's country or cause",
    explanation:
      "A 'defection' is the act of abandoning one's country or cause in favor of an opposing one.",
    clscore: 7,
  },
  {
    word: 'definitive',
    question:
      "The lab results gave a definitive answer, confirming that the new drug was effective. A 'definitive' answer is:",
    choices: [
      'conclusive, final, and no longer in question',
      'unclear or vague',
      'temporary and subject to change',
      'uncertain and questionable',
    ],
    answer: 'conclusive, final, and no longer in question',
    explanation:
      "'Definitive' means that something is conclusive, final, and not open to doubt.",
    clscore: 7,
  },
  {
    word: 'deleterious',
    question:
      "The storm had a deleterious effect on the crops, completely ruining the harvest. 'Deleterious' most nearly means:",
    choices: [
      'causing harm or damage',
      'helpful and beneficial',
      'useful and productive',
      'completely safe',
    ],
    answer: 'causing harm or damage',
    explanation:
      "'Deleterious' is an adjective used to describe something that causes harm or damage.",
    clscore: 7,
  },
  {
    word: 'delineate',
    question:
      "The teacher asked the students to delineate the key points of the chapter in their notes. To 'delineate' means:",
    choices: [
      'to describe or portray something precisely',
      'to ignore or disregard',
      'to hide or conceal',
      'to destroy a concept',
    ],
    answer: 'to describe or portray something precisely',
    explanation:
      "To 'delineate' means to describe or outline something precisely and in detail.",
    clscore: 7,
  },
  {
    word: 'demeanor',
    question:
      "He had a calm and confident demeanor during the interview, which impressed the hiring manager. What does 'demeanor' mean?",
    choices: [
      'outward behavior or appearance',
      'the type of clothing someone wears',
      "the sound of a person's voice",
      "a person's physical appearance",
    ],
    answer: 'outward behavior or appearance',
    explanation:
      "'Demeanor' is a person's outward behavior, attitude, or appearance.",
    clscore: 7,
  },
  {
    word: 'demure',
    question:
      "The demure young woman blushed and looked away when she was complimented. 'Demure' most nearly means:",
    choices: [
      'reserved, modest, and shy',
      'outgoing and social',
      'bold and courageous',
      'talkative and friendly',
    ],
    answer: 'reserved, modest, and shy',
    explanation:
      "'Demure' describes a person who is reserved, modest, and shy.",
    clscore: 7,
  },
  {
    word: 'deplore',
    question:
      "Many people deplore the use of plastic bags and want a new law to ban them. To 'deplore' means:",
    choices: [
      'to feel or express strong disapproval of something',
      'to fully accept something',
      'to admire or respect something',
      'to support an idea',
    ],
    answer: 'to feel or express strong disapproval of something',
    explanation:
      "To 'deplore' means to feel or express strong disapproval or condemnation of something.",
    clscore: 7,
  },
  {
    word: 'desecrate',
    question:
      "The vandals were arrested for trying to desecrate the monument by painting graffiti on it. What does 'desecrate' mean?",
    choices: [
      'to treat a sacred place or thing with violent disrespect',
      'to honor something sacred',
      'to show deep respect',
      'to clean or repair something',
    ],
    answer: 'to treat a sacred place or thing with violent disrespect',
    explanation:
      "To 'desecrate' means to violate or treat something sacred with disrespect.",
    clscore: 7,
  },
  {
    word: 'desist',
    question:
      "The police officer told the protesters to desist from blocking the road. 'Desist' most nearly means:",
    choices: [
      'to cease or stop an action',
      'to continue on a path',
      'to argue a point',
      'to ignore a request',
    ],
    answer: 'to cease or stop an action',
    explanation:
      "To 'desist' means to stop doing something, which is what the police officer ordered the protestors to do.",
    clscore: 7,
  },
  {
    word: 'devoid',
    question:
      'The old woman’s face was devoid of any emotion when she heard the bad news. The desert is devoid of water.',
    choices: [
      'completely lacking in something',
      'full of something',
      'overflowing with something',
      'packed with things',
    ],
    answer: 'completely lacking in something',
    explanation:
      "'Devoid' is an adjective used to describe something that is empty or completely lacking.",
    clscore: 7,
  },
  {
    word: 'diffident',
    question:
      "He was a diffident boy who was too shy to speak up in class. 'Diffident' most nearly means:",
    choices: [
      'lacking in self-confidence; shy',
      'full of confidence and courage',
      'bold and outgoing',
      'talkative and social',
    ],
    answer: 'lacking in self-confidence; shy',
    explanation:
      "'Diffident' is an adjective that describes a person who is modest or shy due to a lack of self-confidence.",
    clscore: 7,
  },
  {
    word: 'disconsolate',
    question:
      'After losing the championship game, the team was disconsolate and sat in silence, too sad to speak. She was disconsolate after the loss.',
    choices: [
      'without comfort; extremely unhappy',
      'cheerful and happy',
      'full of joy',
      'a feeling of great happiness',
    ],
    answer: 'without comfort; extremely unhappy',
    explanation:
      "'Disconsolate' describes a person who is unable to be comforted or is extremely unhappy.",
    clscore: 7,
  },
  {
    word: 'discordant',
    question:
      "The sound of the squealing violin made a discordant noise that was out of tune with the rest of the orchestra. 'Discordant' most nearly means:",
    choices: [
      'disagreeing or harsh-sounding',
      'harmonious and melodic',
      'peaceful and gentle',
      'in tune',
    ],
    answer: 'disagreeing or harsh-sounding',
    explanation:
      "'Discordant' describes sounds that are harsh and clashing because they are out of tune.",
    clscore: 7,
  },
  {
    word: 'dissipate',
    question:
      "The morning fog began to dissipate as the sun rose, scattering into the air. What does 'dissipate' mean?",
    choices: [
      'to scatter or disappear',
      'to save or gather something carefully',
      'to gather things together',
      'to hide something secretly',
    ],
    answer: 'to scatter or disappear',
    explanation:
      "To 'dissipate' means to disappear or cause to disappear, as the fog did in the sun.",
    clscore: 7,
  },
  {
    word: 'dissonant',
    question:
      "The music was made up of dissonant chords that created an unpleasant sound. 'Dissonant' most nearly means:",
    choices: [
      'lacking harmony; harsh and clashing',
      'in perfect tune',
      'melodic and smooth',
      'peaceful and calm',
    ],
    answer: 'lacking harmony; harsh and clashing',
    explanation:
      "'Dissonant' is an adjective that describes a combination of notes that are not in harmony and sound harsh or unpleasant.",
    clscore: 7,
  },
  {
    word: 'diverge',
    question:
      "The two roads diverge at the bottom of the hill, going in opposite directions. To 'diverge' means:",
    choices: [
      'to separate or branch off from a common point',
      'to come together or converge',
      'to stay on the same path',
      'to be in agreement',
    ],
    answer: 'to separate or branch off from a common point',
    explanation:
      "To 'diverge' means to separate from a common point and go in different directions.",
    clscore: 7,
  },
  {
    word: 'docile',
    question:
      "The docile puppy was easy to train and listened to all of the commands. 'Docile' most nearly means:",
    choices: [
      'ready to accept control or instruction; submissive',
      'wild and untamable',
      'stubborn and disobedient',
      'aggressive and violent',
    ],
    answer: 'ready to accept control or instruction; submissive',
    explanation:
      "'Docile' describes a person or animal that is easily taught and managed.",
    clscore: 7,
  },
  {
    word: 'dogmatic',
    question:
      "The speaker was so dogmatic in his views that he refused to even listen to anyone else's opinion. A 'dogmatic' person is:",
    choices: [
      'inclined to lay down principles as undeniably true',
      'kind and forgiving',
      'quiet and timid',
      'friendly and open-minded',
    ],
    answer: 'inclined to lay down principles as undeniably true',
    explanation:
      "'Dogmatic' describes someone who asserts their opinions as if they are established facts, refusing to consider other viewpoints.",
    clscore: 7,
  },
  {
    word: 'enervate',
    question:
      'Which of the following would NOT be a symptom of being enervated?',
    choices: ['exhaustion', 'fatigue', 'weakness', 'vigilance'],
    answer: 'vigilance',
    explanation:
      "To 'enervate' is to feel drained of energy or weakened. Therefore, vigilance, which means to be alert or watchful, is the opposite of a symptom of being enervated.",
    clscore: 8,
  },
  {
    word: 'ephemeral',
    question:
      'The blooming of the cherry blossoms is often described as an ephemeral event because the blossoms:',
    choices: [
      'last for only a short time',
      'return every spring',
      'are a beautiful sight',
      'are an important cultural symbol',
    ],
    answer: 'last for only a short time',
    explanation:
      'The word ephemeral means lasting for a very short time. The blooming of the cherry blossoms is a classic example of this, as their beauty is short-lived.',
    clscore: 8,
  },
  {
    word: 'epitome',
    question:
      "Which of the following scenarios best demonstrates the meaning of 'epitome'?",
    choices: [
      'A student who gets perfect grades on every test is considered the epitome of academic excellence.',
      'A student who struggles in one subject excels in another.',
      'A student who studies hard but still gets a low grade on a test.',
      'A student who is very good at sports and also enjoys art.',
    ],
    answer:
      'A student who gets perfect grades on every test is considered the epitome of academic excellence.',
    explanation:
      "Epitome means a perfect or typical example of a particular quality. The student's perfect grades serve as a prime example of the concept of academic excellence.",
    clscore: 8,
  },
  {
    word: 'esoteric',
    question:
      "The philosopher's lectures were considered 'esoteric' because they were:",
    choices: [
      'so complex that only specialists could understand them',
      'widely popular and accessible to a general audience',
      'simple and easy for anyone to follow',
      'full of entertaining stories and jokes',
    ],
    answer: 'so complex that only specialists could understand them',
    explanation:
      "Esoteric knowledge is specialized and understood by only a small group of people. If lectures are 'esoteric', it implies they are too complex for a general audience and are only comprehensible to experts.",
    clscore: 8,
  },
  {
    word: 'exacerbate',
    question:
      'Which of the following actions would most likely exacerbate a conflict?',
    choices: [
      'blaming one person for the entire problem',
      'listening to both sides of the argument calmly',
      'offering a solution that helps everyone involved',
      'taking a break to cool down before continuing the discussion',
    ],
    answer: 'blaming one person for the entire problem',
    explanation:
      "To 'exacerbate' a situation is to make it worse. Blaming one person would likely intensify anger and resentment, making the conflict more severe, rather than resolving it.",
    clscore: 8,
  },
  {
    word: 'dregs',
    question:
      'The last remaining bits of coffee at the bottom of a cup, or the most worthless parts of something, are called:',
    choices: ['the dregs', 'the foam', 'the grinds', 'the brew'],
    answer: 'the dregs',
    explanation:
      'Dregs refer to the last remaining liquid and sediment at the bottom of a cup, or more generally, the least desirable part of something.',
    clscore: 8,
  },
  {
    word: 'effigy',
    question:
      'The townspeople burned a crude figure of the politician in protest. This figure is best described as an:',
    choices: ['effigy', 'idol', 'sculpture', 'statue'],
    answer: 'effigy',
    explanation:
      "An effigy is a crude representation of a person, often used to express hatred or mockery. The townspeople's action is a classic use of an effigy in protest.",
    clscore: 8,
  },
  {
    word: 'elucidate',
    question:
      "A good teacher's primary goal is to ___ difficult concepts so students can understand them clearly.",
    choices: ['elucidate', 'obscure', 'complicate', 'summarize'],
    answer: 'elucidate',
    explanation:
      "To 'elucidate' means to make something clear, or to explain it. This is a key function of a good teacher when dealing with difficult concepts.",
    clscore: 8,
  },
  {
    word: 'emaciated',
    question:
      "Which of these animals would most likely be described as 'emaciated'?",
    choices: [
      'A stray dog that has not eaten in weeks.',
      'A healthy, well-fed domestic cat.',
      'A wild bear preparing for hibernation.',
      'A muscular racehorse.',
    ],
    answer: 'A stray dog that has not eaten in weeks.',
    explanation:
      'Emaciated means abnormally thin or weak, especially from illness or lack of food. A stray dog that has not eaten is the most fitting example.',
    clscore: 8,
  },
  {
    word: 'emanate',
    question:
      'In a dark room, light seems to ___ from the single candle, filling the space with a soft glow.',
    choices: ['emanate', 'absorb', 'vanish', 'reflect'],
    answer: 'emanate',
    explanation:
      "To 'emanate' means to flow out or issue forth from a source. The light flowing from the candle is an example of emanation.",
    clscore: 8,
  },
  {
    word: 'embezzle',
    question:
      "A company CFO who secretly transfers money from the company's accounts into their personal bank account is committing which crime?",
    choices: ['embezzlement', 'larceny', 'counterfeiting', 'money laundering'],
    answer: 'embezzlement',
    explanation:
      "Embezzlement is the fraudulent appropriation of funds that have been entrusted to one's care. The CFO stealing money from the company is a classic case of this crime.",
    clscore: 8,
  },
  {
    word: 'empirical',
    question:
      "The scientific method relies on 'empirical' evidence, meaning the conclusions are based on:",
    choices: [
      'verifiable observations and experiments',
      'philosophical theories and abstract ideas',
      'popular opinions and anecdotal stories',
      'historical documents and legends',
    ],
    answer: 'verifiable observations and experiments',
    explanation:
      'Empirical means based on, concerned with, or verifiable by observation or experience rather than theory or pure logic. The scientific method is the best example of an empirical approach.',
    clscore: 8,
  },
  {
    word: 'emulate',
    question:
      "A young artist's goal is to ___ their favorite painter, not by copying them exactly, but by matching their level of skill and innovation.",
    choices: ['emulate', 'deride', 'scorn', 'ignore'],
    answer: 'emulate',
    explanation:
      "To 'emulate' means to imitate a person with the goal of matching or surpassing their achievements. The artist's ambition to match the painter's skill is a perfect example.",
    clscore: 8,
  },
  {
    word: 'enjoin',
    question:
      "A court order to 'enjoin' a construction company from building on a protected wetland is a command to:",
    choices: [
      'legally prohibit the action',
      'allow the project to continue',
      'encourage the company to build more homes',
      'offer them a permit to build',
    ],
    answer: 'legally prohibit the action',
    explanation:
      "To 'enjoin' means to legally prohibit or strongly command. In this case, the court order is a command to stop the construction.",
    clscore: 8,
  },
  {
    word: 'abate',
    question:
      "After the storm, the winds and rain began to ___, and the city's residents were finally able to go outside safely.",
    choices: ['abate', 'intensify', 'continue', 'worsen'],
    answer: 'abate',
    explanation:
      'Abate means to lessen or reduce in intensity. As the storm passes, the winds and rain would naturally lessen, allowing for safety.',
    clscore: 8,
  },
  {
    word: 'abhor',
    question:
      "Which of the following emotions is most closely associated with the word 'abhor'?",
    choices: ['deep hatred', 'slight dislike', 'indifference', 'curiosity'],
    answer: 'deep hatred',
    explanation:
      "To 'abhor' means to regard with disgust and hatred. The emotion is much stronger than a simple dislike.",
    clscore: 8,
  },
  {
    word: 'accolade',
    question:
      "The highest 'accolade' in the field of science is the Nobel Prize. The word 'accolade' here means:",
    choices: [
      'an award or honor',
      'a scientific discovery',
      'a difficult challenge',
      'a public critique',
    ],
    answer: 'an award or honor',
    explanation:
      'An accolade is an honor, award, or praise. The Nobel Prize, being a prestigious honor, serves as the best example of an accolade in this context.',
    clscore: 8,
  },
  {
    word: 'admonish',
    question:
      'The coach had to ___ the player for being late to practice, reminding him of the team rules.',
    choices: ['admonish', 'commend', 'forgive', 'ignore'],
    answer: 'admonish',
    explanation:
      "To 'admonish' means to warn or reprimand someone firmly. The coach's action of reminding the player of the rules fits this definition.",
    clscore: 8,
  },
  {
    word: 'adroit',
    question:
      'A magician is typically an ___ performer, as they must be skilled and clever with their hands to perform tricks.',
    choices: ['adroit', 'awkward', 'clumsy', 'unskilled'],
    answer: 'adroit',
    explanation:
      "Adroit means clever or skillful, especially in the use of hands or the mind. This quality is essential for a magician's performance.",
    clscore: 8,
  },
  {
    word: 'affable',
    question:
      'Due to her ___ nature, the new student quickly made friends and was well-liked by everyone in class.',
    choices: ['affable', 'arrogant', 'aloof', 'hostile'],
    answer: 'affable',
    explanation:
      'Affable means friendly and easy to talk to. This quality would make it easy for a new student to make friends.',
    clscore: 8,
  },
  {
    word: 'affluence',
    question:
      "The royal family's great wealth and extravagant lifestyle were a clear sign of their ___.",
    choices: ['affluence', 'poverty', 'simplicity', 'hardship'],
    answer: 'affluence',
    explanation:
      "Affluence means the state of having a great deal of money. The royal family's wealth and lifestyle are indicators of their affluence.",
    clscore: 8,
  },
  {
    word: 'agnostic',
    question:
      "An ___ person would say, 'I can't say for certain whether God exists or not, because it is unknowable.'",
    choices: ['agnostic', 'atheist', 'theist', 'dogmatist'],
    answer: 'agnostic',
    explanation:
      'An agnostic is someone who believes that the existence of God or a divine power is unknown and possibly unknowable. Their statement reflects this uncertainty.',
    clscore: 8,
  },
  {
    word: 'agrarian',
    question:
      'A society that is primarily concerned with farming and agriculture is known as an ___ society.',
    choices: ['agrarian', 'industrial', 'urban', 'political'],
    answer: 'agrarian',
    explanation:
      'Agrarian means relating to cultivated land or the cultivation of land. It is the term used to describe a society focused on farming.',
    clscore: 8,
  },
  {
    word: 'allegory',
    question:
      "George Orwell's 'Animal Farm' is an ___ that uses talking animals to comment on political events in the Soviet Union.",
    choices: ['allegory', 'autobiography', 'biography', 'fable'],
    answer: 'allegory',
    explanation:
      "An allegory is a story, poem, or picture that can be interpreted to reveal a hidden meaning, typically a moral or political one. 'Animal Farm' fits this perfectly, as it uses animals to represent political figures and events.",
    clscore: 8,
  },
  {
    word: 'allocate',
    question:
      'The city council voted to ___ more funds to the school system to help improve teacher salaries and buy new books.',
    choices: ['allocate', 'subtract', 'hoard', 'divert'],
    answer: 'allocate',
    explanation:
      "To 'allocate' means to distribute something for a particular purpose. In this case, the council is distributing funds to the school system.",
    clscore: 8,
  },
  {
    word: 'allude',
    question:
      'The speech was carefully worded to ___ to the recent scandal without mentioning it directly, so as not to cause a public outrage.',
    choices: ['allude', 'declare', 'state', 'specify'],
    answer: 'allude',
    explanation:
      "To 'allude' is to refer to something indirectly. The speaker's intention was to hint at the scandal without explicitly stating it.",
    clscore: 8,
  },
  {
    word: 'altercation',
    question:
      "A simple disagreement between the two coworkers quickly escalated into a heated ___ that required a manager's intervention.",
    choices: ['altercation', 'negotiation', 'discussion', 'agreement'],
    answer: 'altercation',
    explanation:
      'An altercation is a noisy argument or disagreement, especially in public. The escalation of the disagreement into a heated argument fits this description.',
    clscore: 8,
  },
  {
    word: 'ameliorate',
    question:
      "The charity's primary mission is to ___ the living conditions of those in poverty by providing them with food and clean water.",
    choices: ['ameliorate', 'worsen', 'negate', 'ignore'],
    answer: 'ameliorate',
    explanation:
      "Ameliorate means to make something better or more tolerable. The charity's actions are aimed at improving the living conditions of those in need.",
    clscore: 8,
  },
  {
    word: 'amiable',
    question: "Which of the following describes an 'amiable' personality?",
    choices: [
      'pleasant and friendly',
      'serious and reserved',
      'unpredictable and moody',
      'loud and aggressive',
    ],
    answer: 'pleasant and friendly',
    explanation:
      'Amiable means having or displaying a friendly and pleasant manner. The word is used to describe a person who is easy to get along with.',
    clscore: 8,
  },
  {
    word: 'amnesty',
    question:
      'The government granted ___ to all political prisoners as a gesture of goodwill toward the new regime.',
    choices: ['amnesty', 'punishment', 'imprisonment', 'prosecution'],
    answer: 'amnesty',
    explanation:
      'Amnesty is an official pardon for people who have been convicted of political offenses. Granting it to political prisoners is a direct application of the word.',
    clscore: 8,
  },
  {
    word: 'animosity',
    question:
      'A long-standing dispute between the two rival teams fueled a feeling of deep ___ among their fans.',
    choices: ['animosity', 'camaraderie', 'respect', 'friendship'],
    answer: 'animosity',
    explanation:
      'Animosity means strong hostility. The rivalry between the teams and the resulting deep dislike among their fans is an example of animosity.',
    clscore: 8,
  },
  {
    word: 'anthology',
    question:
      'A book containing a collection of poems from different poets is best described as an:',
    choices: ['anthology', 'biography', 'novel', 'monograph'],
    answer: 'anthology',
    explanation:
      'An anthology is a published collection of poems or other pieces of writing. The collection of poems from different poets is a perfect example.',
    clscore: 8,
  },
  {
    word: 'antipathy',
    question: 'A person who has a strong ___ toward cats would most likely:',
    choices: [
      'avoid all cats at all costs',
      'be indifferent to cats',
      'want to adopt a cat',
      'enjoy watching cat videos',
    ],
    answer: 'avoid all cats at all costs',
    explanation:
      'Antipathy is a deep-seated feeling of aversion or dislike. A person with a strong antipathy for cats would avoid them completely.',
    clscore: 8,
  },
  {
    word: 'antithesis',
    question:
      'Love is often considered the ___ of hate, as they are two opposing and contrary emotions.',
    choices: ['antithesis', 'synonym', 'exemplar', 'category'],
    answer: 'antithesis',
    explanation:
      'Antithesis means a person or thing that is the direct opposite of someone or something else. Love and hate are classic examples of antithetical concepts.',
    clscore: 8,
  },
  {
    word: 'apathy',
    question:
      'A student who shows a complete ___ toward their grades is likely to:',
    choices: [
      'not care if they pass or fail',
      'study diligently to get a good grade',
      'get very upset about a bad grade',
      'ask the teacher for extra credit',
    ],
    answer: 'not care if they pass or fail',
    explanation:
      'Apathy is a lack of interest, enthusiasm, or concern. A student who shows apathy toward their grades would not care about the outcome.',
    clscore: 8,
  },
  {
    word: 'aplomb',
    question:
      'The experienced performer handled the stage mishap with great ___, continuing the show without missing a beat.',
    choices: ['aplomb', 'confusion', 'panic', 'awkwardness'],
    answer: 'aplomb',
    explanation:
      "Aplomb means self-confidence or assurance. The performer's ability to handle the mistake flawlessly demonstrates great confidence and composure.",
    clscore: 8,
  },
  {
    word: 'arduous',
    question:
      "Which of these tasks would most likely be described as 'arduous'?",
    choices: [
      'climbing Mount Everest',
      'walking to the store',
      'typing a short email',
      'making a cup of tea',
    ],
    answer: 'climbing Mount Everest',
    explanation:
      'Arduous means involving or requiring strenuous effort. Climbing Mount Everest is a perfect example of a difficult and demanding task.',
    clscore: 8,
  },
  {
    word: 'astute',
    question:
      'The ___ detective was able to piece together the clues and solve the case long before anyone else.',
    choices: ['astute', 'obtuse', 'careless', 'foolish'],
    answer: 'astute',
    explanation:
      "Astute means having or showing an ability to accurately assess situations or people and turn this to one's advantage; shrewd. A clever detective is the perfect example of an astute person.",
    clscore: 8,
  },
  {
    word: 'atheist',
    question: 'An ___ would be a person who:',
    choices: [
      'believes there is no God or gods',
      'worships multiple gods',
      'is unsure whether God exists',
      'believes in a single creator God',
    ],
    answer: 'believes there is no God or gods',
    explanation:
      'An atheist is a person who disbelieves or lacks belief in the existence of God or gods.',
    clscore: 8,
  },
  {
    word: 'atrophy',
    question:
      'A patient who has been in a coma for a long time might suffer from muscle ___ because the muscles have not been used.',
    choices: ['atrophy', 'hypertrophy', 'strength', 'expansion'],
    answer: 'atrophy',
    explanation:
      'Atrophy means to waste away, especially due to the degeneration of cells. The disuse of muscles over time leads to their wasting away, which is muscle atrophy.',
    clscore: 8,
  },
  {
    word: 'attest',
    question:
      'The eyewitness was asked to ___ to the facts of the crime in court, confirming what they had seen.',
    choices: ['attest', 'refute', 'disprove', 'deny'],
    answer: 'attest',
    explanation:
      "To 'attest' means to provide or serve as clear evidence of. The eyewitness's testimony confirms the facts of the crime.",
    clscore: 8,
  },
  {
    word: 'audacious',
    question:
      "The 'audacious' act of climbing the skyscraper without a rope was seen as both reckless and:",
    choices: ['bold', 'fearful', 'cautious', 'timid'],
    answer: 'bold',
    explanation:
      'Audacious means showing a willingness to take surprisingly bold risks. The act of climbing a skyscraper without a rope is a prime example of a bold and daring act.',
    clscore: 8,
  },
  {
    word: 'autocratic',
    question:
      'A leader who makes all decisions without consulting anyone else and expects absolute obedience is considered:',
    choices: ['autocratic', 'democratic', 'collaborative', 'egalitarian'],
    answer: 'autocratic',
    explanation:
      'An autocratic leader is one who has absolute power and makes all decisions on their own, without input from others. This is a defining characteristic of an autocratic ruler.',
    clscore: 8,
  },
  {
    word: 'avarice',
    question:
      'The character was driven by ___ and would do anything, including harming others, to accumulate more wealth.',
    choices: ['avarice', 'generosity', 'altruism', 'contentment'],
    answer: 'avarice',
    explanation:
      "Avarice means extreme greed for wealth or material gain. The character's willingness to harm others for money is a result of their extreme greed.",
    clscore: 8,
  },
  {
    word: 'avow',
    question:
      "During the public meeting, the CEO had to ___ that the company's financial reports were inaccurate and apologize for misleading the public.",
    choices: ['avow', 'conceal', 'deny', 'dispute'],
    answer: 'avow',
    explanation:
      "To 'avow' is to assert or confess openly. The CEO's public confession of the inaccurate reports is an example of avowing the truth.",
    clscore: 8,
  },
  {
    word: 'balk',
    question:
      "The horse would ___ at the fence, refusing to jump over it despite the jockey's urging.",
    choices: ['balk', 'leap', 'clear', 'trot'],
    answer: 'balk',
    explanation:
      "To 'balk' is to hesitate or be unwilling to accept an idea or undertaking. The horse's refusal to jump is a physical example of balking.",
    clscore: 8,
  },
  {
    word: 'bane',
    question:
      'The constant noise from the construction site was the ___ of my existence, preventing me from getting any work done.',
    choices: ['bane', 'boon', 'blessing', 'source'],
    answer: 'bane',
    explanation:
      "Bane means a cause of great distress or annoyance. The noise, as a constant source of annoyance, is the 'bane' of the person's existence.",
    clscore: 8,
  },
  {
    word: 'beguile',
    question:
      'The con artist was able to ___ his victims by charming them with his lies and promises of great wealth.',
    choices: ['beguile', 'enlighten', 'repel', 'disgust'],
    answer: 'beguile',
    explanation:
      "To 'beguile' is to charm or enchant someone, sometimes in a deceptive way. The con artist's charming lies are used to deceive his victims.",
    clscore: 8,
  },
  {
    word: 'beset',
    question:
      'The general reported that his troops were ___ by enemy forces from all sides, making it difficult to mount a defense.',
    choices: ['beset', 'supported', 'surrounded', 'flanked'],
    answer: 'beset',
    explanation:
      "To 'beset' means to be troubled or threatened with attack from all sides. The troops being surrounded by enemy forces is a direct example of this word in use.",
    clscore: 8,
  },
  {
    word: 'brusque',
    question:
      "The manager's ___ response to the employee's question was, 'I don't have time for this.'",
    choices: ['brusque', 'polite', 'courteous', 'gentle'],
    answer: 'brusque',
    explanation:
      "Brusque means abrupt or offhand in speech or manner. The manager's short and rude response is a classic example of brusque behavior.",
    clscore: 8,
  },
  {
    word: 'canvass',
    question:
      'Political volunteers will often ___ a neighborhood, going door-to-door to ask for votes and opinions.',
    choices: ['canvass', 'ignore', 'alienate', 'avoid'],
    answer: 'canvass',
    explanation:
      "To 'canvass' is to solicit votes or opinions from people. The volunteers' actions of going door-to-door to ask for votes is a form of canvassing.",
    clscore: 8,
  },
  {
    word: 'censure',
    question:
      'A public official who is found to have abused their power will likely face a vote of ___ from their colleagues.',
    choices: ['censure', 'praise', 'endorsement', 'acclaim'],
    answer: 'censure',
    explanation:
      "Censure means the expression of formal disapproval. A vote of censure is a formal way of expressing disapproval of a public official's actions.",
    clscore: 8,
  },
  {
    word: 'chagrin',
    question:
      'To her great ___, the aspiring actress forgot her lines in the middle of her audition.',
    choices: ['chagrin', 'satisfaction', 'amusement', 'joy'],
    answer: 'chagrin',
    explanation:
      "Chagrin is a feeling of distress or embarrassment at having failed or been humiliated. The actress's embarrassment at forgetting her lines is a classic example of chagrin.",
    clscore: 8,
  },
  {
    word: 'chaste',
    question:
      "The 'chaste' design of the new building was praised for its simple, unadorned elegance.",
    choices: [
      'simple and pure',
      'ornate and gaudy',
      'complex and elaborate',
      'colorful and flashy',
    ],
    answer: 'simple and pure',
    explanation:
      "Chaste means without unnecessary adornment; simple or plain. The building's design is praised for its elegant simplicity, which is a fitting description.",
    clscore: 8,
  },
  {
    word: 'chauvinism',
    question:
      "The politician's extreme nationalism was seen as a form of ___, as he believed his country was superior to all others and had a right to dominate them.",
    choices: ['chauvinism', 'patriotism', 'globalism', 'altruism'],
    answer: 'chauvinism',
    explanation:
      "Chauvinism means fanatical patriotism or a belief that one's own country or gender is superior to all others. The politician's extreme nationalism is an example of this.",
    clscore: 8,
  },
  {
    word: 'chide',
    question:
      'A parent might ___ a child for not cleaning their room, but not in a way that is overly harsh or cruel.',
    choices: ['chide', 'commend', 'praise', 'applaud'],
    answer: 'chide',
    explanation:
      "To 'chide' is to scold or rebuke. A parent's scolding of a child for not cleaning their room is a good example of chiding.",
    clscore: 8,
  },
  {
    word: 'commensurate',
    question:
      "The job's salary was ___ with the amount of experience required, so a highly skilled professional could expect to be well compensated.",
    choices: ['commensurate', 'unrelated', 'inferior', 'unjust'],
    answer: 'commensurate',
    explanation:
      'Commensurate means in proportion or corresponding in size or degree. The salary is directly proportional to the experience required.',
    clscore: 8,
  },
  {
    word: 'complacent',
    question:
      'The champion boxer became ___ after a few easy victories and did not train for his next fight, leading to a shocking defeat.',
    choices: ['complacent', 'vigilant', 'anxious', 'motivated'],
    answer: 'complacent',
    explanation:
      "Complacent means feeling smug or self-satisfied. The boxer's self-satisfaction led to a lack of preparation, which resulted in his defeat.",
    clscore: 8,
  },
  {
    word: 'concomitant',
    question:
      'The rise of a new technology often has a ___ decline in the use of older technologies.',
    choices: ['concomitant', 'unrelated', 'independent', 'separate'],
    answer: 'concomitant',
    explanation:
      'Concomitant means occurring or existing concurrently with something else. The rise of new technology and the decline of older technology happen at the same time.',
    clscore: 8,
  },
  {
    word: 'condolence',
    question:
      'After the tragic accident, friends and family offered their ___ to the grieving family.',
    choices: ['condolence', 'celebration', 'congratulations', 'gifts'],
    answer: 'condolence',
    explanation:
      'A condolence is an expression of sympathy with someone in sorrow. This is the correct word for expressing sympathy after a tragic event.',
    clscore: 8,
  },
  {
    word: 'configuration',
    question:
      "The 'configuration' of the new computer system was complex, with many different parts arranged in a specific way.",
    choices: ['arrangement', 'destruction', 'addition', 'removal'],
    answer: 'arrangement',
    explanation:
      'Configuration means an arrangement of parts or elements in a particular form, figure, or combination. The arrangement of the computer parts is a fitting example.',
    clscore: 8,
  },
  {
    word: 'congenital',
    question:
      'A medical condition that is present from birth, such as a heart defect, is known as a ___ condition.',
    choices: ['congenital', 'contagious', 'temporary', 'acquired'],
    answer: 'congenital',
    explanation:
      'Congenital means present from birth. This is the correct term for a medical condition that someone is born with.',
    clscore: 8,
  },
  {
    word: 'connote',
    question:
      "While the word 'home' literally means a place of residence, it can also ___ feelings of warmth, family, and safety.",
    choices: ['connote', 'denote', 'avoid', 'ignore'],
    answer: 'connote',
    explanation:
      "To 'connote' means to imply or suggest something in addition to the literal meaning. The word 'home' suggests feelings that are not part of its direct definition.",
    clscore: 8,
  },
  {
    word: 'consternation',
    question:
      'The sudden announcement of the school closing caused great ___ among the students and parents, who were confused and worried.',
    choices: ['consternation', 'calmness', 'joy', 'relief'],
    answer: 'consternation',
    explanation:
      'Consternation means a feeling of dismay or anxiety. The surprise and worry caused by the school closing is a good example of this feeling.',
    clscore: 8,
  },
  {
    word: 'contiguous',
    question:
      'The United States is made up of 48 ___ states, all of which share a border with at least one other state.',
    choices: ['contiguous', 'separated', 'distant', 'isolated'],
    answer: 'contiguous',
    explanation:
      'Contiguous means sharing a common border; touching. The 48 states are all touching one another, so they are contiguous.',
    clscore: 8,
  },
  {
    word: 'contingent',
    question:
      "The company's yearly bonus is ___ on the overall profit, so a good year means a bigger bonus for everyone.",
    choices: ['contingent', 'guaranteed', 'unrelated', 'independent'],
    answer: 'contingent',
    explanation:
      "Contingent means dependent on or conditioned by something else. The bonus is dependent on the company's profit.",
    clscore: 8,
  },
  {
    word: 'corroborate',
    question:
      "The witness's testimony was used to ___ the alibi of the suspect, confirming that he was at the park at the time of the crime.",
    choices: ['corroborate', 'discredit', 'contradict', 'disprove'],
    answer: 'corroborate',
    explanation:
      "To 'corroborate' is to confirm or give support to a statement, theory, or finding. The witness's testimony supports the alibi.",
    clscore: 8,
  },
  {
    word: 'equitable',
    question:
      'A judge must strive to make a decision that is ___ and just for all parties involved.',
    choices: ['equitable', 'biased', 'unjust', 'partial'],
    answer: 'equitable',
    explanation:
      'Equitable means fair and impartial. A judge is expected to be fair and just in their decisions.',
    clscore: 8,
  },
  {
    word: 'equivocal',
    question:
      'The politician gave an ___ answer that did not commit to either side of the issue, leaving the audience confused about his position.',
    choices: ['equivocal', 'unequivocal', 'clear', 'direct'],
    answer: 'equivocal',
    explanation:
      "Equivocal means open to more than one interpretation; ambiguous. The politician's answer was unclear and could be interpreted in multiple ways.",
    clscore: 8,
  },
  {
    word: 'eulogy',
    question:
      'During the funeral, the son gave a heartfelt ___ for his father, praising his life and accomplishments.',
    choices: ['eulogy', 'diatribe', 'critique', 'sermon'],
    answer: 'eulogy',
    explanation:
      'A eulogy is a speech or piece of writing that praises someone highly, especially someone who has just died. This is the correct term for a speech given at a funeral to honor the deceased.',
    clscore: 8,
  },
  {
    word: 'exculpate',
    question:
      'The new evidence was able to ___ the suspect, proving that he was innocent of the crime.',
    choices: ['exculpate', 'incriminate', 'convict', 'accuse'],
    answer: 'exculpate',
    explanation:
      "To 'exculpate' means to clear from blame or guilt. The new evidence proved the suspect was not guilty, clearing him of the crime.",
    clscore: 8,
  },
  {
    word: 'exonerate',
    question:
      'After new DNA evidence came to light, the court was forced to ___ the man who had been in prison for 20 years, clearing his name.',
    choices: ['exonerate', 'condemn', 'punish', 'sentence'],
    answer: 'exonerate',
    explanation:
      "To 'exonerate' is to officially absolve someone from blame. The court's action of clearing the man's name is a direct example of exoneration.",
    clscore: 8,
  },
  {
    word: 'expound',
    question:
      'The professor was asked to ___ on his theory during the lecture, providing more details and examples to the students.',
    choices: ['expound', 'simplify', 'summarize', 'abridge'],
    answer: 'expound',
    explanation:
      "To 'expound' is to present and explain a theory or idea in detail. The professor's action of providing more details is an example of expounding on a theory.",
    clscore: 8,
  },
  {
    word: 'extol',
    question:
      "After the concert, the music critic wrote a review that seemed to ___ the musician's performance, calling it 'a masterpiece.'",
    choices: ['extol', 'condemn', 'criticize', 'mock'],
    answer: 'extol',
    explanation:
      "To 'extol' is to praise enthusiastically. The music critic's review, which called the performance a masterpiece, is a form of enthusiastic praise.",
    clscore: 8,
  },
  {
    word: 'extricate',
    question:
      'The firefighters worked tirelessly to ___ the driver from the wreckage of the car.',
    choices: ['extricate', 'entangle', 'trap', 'secure'],
    answer: 'extricate',
    explanation:
      "To 'extricate' means to free someone or something from a difficulty or constraint. The firefighters are freeing the driver from the wreckage, which is a difficult situation.",
    clscore: 8,
  },
  {
    word: 'fastidious',
    question: 'A ___ person would likely:',
    choices: [
      'insist that every detail in a project is perfect',
      'be easy to please and not care about small mistakes',
      'be careless and often miss deadlines',
      'dislike organizing and cleaning',
    ],
    answer: 'insist that every detail in a project is perfect',
    explanation:
      'Fastidious means very attentive to and concerned about accuracy and detail. A fastidious person would insist on perfection in every detail.',
    clscore: 8,
  },
  {
    word: 'feign',
    question:
      'The child would often ___ a stomachache to avoid going to school on days when there was a test.',
    choices: ['feign', 'admit', 'reveal', 'confess'],
    answer: 'feign',
    explanation:
      "To 'feign' is to pretend to be affected by a feeling, state, or injury. The child is pretending to be sick to avoid going to school.",
    clscore: 8,
  },
  {
    word: 'felicity',
    question:
      'The family reunion was a time of great ___, as everyone was happy to see each other and share stories.',
    choices: ['felicity', 'sorrow', 'distress', 'anger'],
    answer: 'felicity',
    explanation:
      'Felicity means intense happiness. The reunion, as a time of happiness and joy, is a good example of felicity.',
    clscore: 8,
  },
  {
    word: 'ferret',
    question:
      'The journalist worked to ___ out the truth of the scandal, tirelessly searching through documents and sources.',
    choices: ['ferret', 'conceal', 'hide', 'ignore'],
    answer: 'ferret',
    explanation:
      "To 'ferret out' means to search out or discover something, often with difficulty. The journalist's persistent search for the truth is an example of ferreting it out.",
    clscore: 8,
  },
  {
    word: 'fetish',
    question:
      'His ___ for rare books led him to spend most of his savings on an old, first-edition novel.',
    choices: ['fetish', 'dislike', 'aversion', 'disinterest'],
    answer: 'fetish',
    explanation:
      'A fetish is a strong and unusual need or desire for something. His obsession with rare books, leading to him spending a large amount of money on one, is a clear example of a fetish.',
    clscore: 8,
  },
  {
    word: 'flagrant',
    question:
      "The student's act of cheating was so ___ that the teacher could not ignore it and had to give a severe punishment.",
    choices: ['flagrant', 'minor', 'hidden', 'subtle'],
    answer: 'flagrant',
    explanation:
      'Flagrant means conspicuously or obviously offensive. The cheating was so obvious that it could not be overlooked.',
    clscore: 8,
  },
  {
    word: 'flamboyant',
    question:
      "The rock star's ___ stage presence, with bright costumes and wild gestures, made him a captivating performer.",
    choices: ['flamboyant', 'subdued', 'plain', 'boring'],
    answer: 'flamboyant',
    explanation:
      "Flamboyant means tending to attract attention because of their exuberance, confidence, and stylishness. The rock star's showy behavior and costumes are a good example of being flamboyant.",
    clscore: 8,
  },
  {
    word: 'forte',
    question:
      'While she was a good writer, her true ___ was public speaking, where she could captivate an audience with her words.',
    choices: ['forte', 'weakness', 'dislike', 'challenge'],
    answer: 'forte',
    explanation:
      'Forte means a thing at which one excels. Public speaking is her strength, or forte, in this example.',
    clscore: 8,
  },
  {
    word: 'fortnight',
    question:
      'The international student will be visiting for a ___, staying for a total of two weeks.',
    choices: ['fortnight', 'month', 'week', 'season'],
    answer: 'fortnight',
    explanation:
      "A fortnight is a period of two weeks. The student's two-week visit is a perfect example of a fortnight.",
    clscore: 8,
  },
  {
    word: 'frugal',
    question:
      'The ___ couple saved a lot of money by cooking at home and rarely eating out at restaurants.',
    choices: ['frugal', 'extravagant', 'wasteful', 'profligate'],
    answer: 'frugal',
    explanation:
      "Frugal means sparing or economical with regard to money or food. The couple's habit of cooking at home is a way of being economical and saving money.",
    clscore: 8,
  },
  {
    word: 'garrulous',
    question:
      'The ___ tour guide talked nonstop for the entire bus ride, providing a constant stream of facts and anecdotes.',
    choices: ['garrulous', 'taciturn', 'silent', 'reserved'],
    answer: 'garrulous',
    explanation:
      "Garrulous means excessively talkative, especially on trivial matters. The tour guide's nonstop talking is a clear example of being garrulous.",
    clscore: 8,
  },
  {
    word: 'generic',
    question:
      "The 'generic' brand of cereal was much cheaper than the name brand, but it tasted the same and had a similar box design.",
    choices: [
      'common and unbranded',
      'unique and expensive',
      'rare and special',
      'branded and unique',
    ],
    answer: 'common and unbranded',
    explanation:
      'Generic means of a general kind or unbranded. The unbranded cereal, which is similar to the name brand, is an example of a generic product.',
    clscore: 8,
  },
  {
    word: 'genre',
    question:
      'The new film was a hybrid of two different ___, combining elements of both a romantic comedy and a sci-fi thriller.',
    choices: ['genres', 'characters', 'plots', 'reviews'],
    answer: 'genres',
    explanation:
      'Genre means a category of artistic composition, as in music or literature, characterized by similarities in form, style, or subject matter. The film is a combination of two different categories, or genres.',
    clscore: 8,
  },
  {
    word: 'glib',
    question:
      "The politician's 'glib' explanation for his actions was met with suspicion because it was too smooth and seemed insincere.",
    choices: [
      'smooth but insincere',
      'well-thought-out and honest',
      'clumsy and awkward',
      'straightforward and truthful',
    ],
    answer: 'smooth but insincere',
    explanation:
      "Glib means fluent but superficial or insincere. The politician's smooth, but untrustworthy, explanation is an example of glib speech.",
    clscore: 8,
  },
  {
    word: 'hapless',
    question:
      'The ___ traveler seemed to have a constant run of bad luck, missing every flight and losing their luggage.',
    choices: ['hapless', 'fortunate', 'lucky', 'carefree'],
    answer: 'hapless',
    explanation:
      "Hapless means unfortunate. The traveler's continuous bad luck is a clear example of being hapless.",
    clscore: 8,
  },
  {
    word: 'heterogeneous',
    question:
      "The city's population was incredibly ___, with people from all different cultures, backgrounds, and ethnicities.",
    choices: ['heterogeneous', 'homogeneous', 'uniform', 'singular'],
    answer: 'heterogeneous',
    explanation:
      'Heterogeneous means diverse in character or content. A city with people from many different backgrounds is a heterogeneous population.',
    clscore: 8,
  },
  {
    word: 'heyday',
    question:
      "The 'heyday' of the classic car industry was in the 1950s, when new models were introduced every year.",
    choices: [
      'prime period of success',
      'period of decline',
      'beginning stages of development',
      'final stages of production',
    ],
    answer: 'prime period of success',
    explanation:
      "A heyday is the period of a person's or thing's greatest success, popularity, or influence. The 1950s was the peak period for classic cars, making it their heyday.",
    clscore: 8,
  },
  {
    word: 'recant',
    question:
      'After facing pressure from the community, the politician was forced to ___ his previous statement and apologize for his controversial remarks.',
    choices: ['recant', 'defend', 'reiterate', 'maintain'],
    answer: 'recant',
    explanation:
      "To 'recant' is to say that one no longer holds a belief or opinion, especially one that has been publicly stated. The politician's withdrawal of his statement is an act of recanting.",
    clscore: 8,
  },
  {
    word: 'reprehensible',
    question:
      "The leader's actions were so ___ that he was widely condemned by both his supporters and his opponents.",
    choices: ['reprehensible', 'commendable', 'praiseworthy', 'admirable'],
    answer: 'reprehensible',
    explanation:
      "Reprehensible means deserving of censure or condemnation. The leader's actions were so bad that they deserved to be condemned.",
    clscore: 8,
  },
  {
    word: 'reticence',
    question: "A person who shows 'reticence' would be most likely to:",
    choices: [
      'remain silent during a conversation',
      'talk a lot about themselves',
      'share their feelings openly',
      'voice their opinion frequently',
    ],
    answer: 'remain silent during a conversation',
    explanation:
      'Reticence is the quality of being reserved and not inclined to speak freely. A reticent person would remain silent rather than speak openly.',
    clscore: 8,
  },
  {
    word: 'scintillate',
    question:
      "The movie star's ___ performance on stage captivated the audience with its brilliance.",
    choices: ['scintillating', 'dull', 'uninspired', 'boring'],
    answer: 'scintillating',
    explanation:
      'Scintillate means to emit flashes of light; sparkle. A scintillating performance would be brilliant and captivating, full of energy and sparkle.',
    clscore: 8,
  },
  {
    word: 'semblance',
    question:
      'After the earthquake, the town was in ruins, but the people tried to maintain a ___ of normalcy by reopening a few shops.',
    choices: ['semblance', 'reality', 'fact', 'truth'],
    answer: 'semblance',
    explanation:
      "Semblance means the outward appearance of something, especially when the reality is different. The town's appearance of normalcy was a facade, as the reality was that it was in ruins.",
    clscore: 8,
  },
  {
    word: 'tactile',
    question:
      'A book written in braille is a ___ experience, as it is meant to be read with the sense of touch.',
    choices: ['tactile', 'visual', 'auditory', 'olfactory'],
    answer: 'tactile',
    explanation:
      'Tactile means of or connected with the sense of touch. Reading braille is a physical act that relies on the sense of touch.',
    clscore: 8,
  },
  {
    word: 'transcribe',
    question:
      "A court reporter's job is to ___ every word spoken in the courtroom, creating a written record of the proceedings.",
    choices: ['transcribe', 'summarize', 'paraphrase', 'translate'],
    answer: 'transcribe',
    explanation:
      "To 'transcribe' means to put thoughts, speech, or data into written or printed form. The court reporter's job is to write down everything that is said.",
    clscore: 8,
  },
  {
    word: 'transmute',
    question:
      'In the fairy tale, the wizard had the power to ___ a lump of coal into a flawless diamond.',
    choices: ['transmute', 'shatter', 'break', 'destroy'],
    answer: 'transmute',
    explanation:
      "To 'transmute' means to change in form, nature, or substance. The wizard is changing the substance of the coal into a diamond.",
    clscore: 8,
  },
  {
    word: 'undulate',
    question:
      'The long grass began to ___ in the wind, creating a beautiful wavelike motion across the field.',
    choices: ['undulate', 'stiffen', 'stand still', 'shrivel'],
    answer: 'undulate',
    explanation:
      "To 'undulate' is to move with a smooth, wavelike motion. The grass's movement in the wind is an example of undulation.",
    clscore: 8,
  },
  {
    word: 'unequivocal',
    question:
      "The team's victory was ___, as they won by a wide margin and left no doubt about their superiority.",
    choices: ['unequivocal', 'doubtful', 'uncertain', 'questionable'],
    answer: 'unequivocal',
    explanation:
      "Unequivocal means leaving no doubt. The team's victory was so decisive that there was no doubt about their win.",
    clscore: 8,
  },
  {
    word: 'vacillation',
    question:
      "The politician's constant ___ on the issue made the public lose trust in his leadership.",
    choices: ['vacillation', 'determination', 'firmness', 'certainty'],
    answer: 'vacillation',
    explanation:
      "Vacillation means the inability to decide between different opinions or actions; indecision. The politician's constant indecisiveness caused the public to lose trust.",
    clscore: 8,
  },
  {
    word: 'vantage',
    question:
      'The photographer climbed to the top of the hill to get a better ___ point for a panoramic view of the city.',
    choices: ['vantage', 'disadvantage', 'problem', 'obstacle'],
    answer: 'vantage',
    explanation:
      'Vantage means a place or position affording a good view of something. The top of the hill is an ideal spot for a good view, or vantage point.',
    clscore: 8,
  },
  {
    word: 'variegated',
    question:
      "The 'variegated' coat of the horse was a mix of different shades of brown and white, making it a truly unique animal.",
    choices: ['multi-colored', 'single-colored', 'plain', 'uniform'],
    answer: 'multi-colored',
    explanation:
      "Variegated means exhibiting different colors, especially as irregular patches or streaks. The horse's coat, with different shades of brown and white, is a perfect example of this.",
    clscore: 8,
  },
  {
    word: 'venial',
    question:
      "The boy's lie was a 'venial' sin, as it was a small and forgivable offense that harmed no one.",
    choices: ['forgivable', 'mortal', 'grave', 'unforgivable'],
    answer: 'forgivable',
    explanation:
      'Venial means easily excused or forgiven. The lie was small and harmless, making it an offense that could be easily forgiven.',
    clscore: 8,
  },
  {
    word: 'verdant',
    question:
      'After the spring rains, the once-dry landscape became a ___ field of lush green grass and flowers.',
    choices: ['verdant', 'arid', 'barren', 'parched'],
    answer: 'verdant',
    explanation:
      'Verdant means green with grass or other rich vegetation. The landscape, which became green and lush after the rain, is a good example of verdant.',
    clscore: 8,
  },
  {
    word: 'virile',
    question:
      'The old man was still remarkably ___, lifting heavy weights and running a marathon with ease.',
    choices: ['virile', 'weak', 'frail', 'infirm'],
    answer: 'virile',
    explanation:
      "Virile means having strength, energy, and a strong sex drive. The man's strength and physical prowess are a sign of his virility.",
    clscore: 8,
  },
  {
    word: 'virtuoso',
    question:
      'She was a violin ___ who could play even the most difficult pieces with a stunning level of skill and precision.',
    choices: ['virtuoso', 'novice', 'amateur', 'beginner'],
    answer: 'virtuoso',
    explanation:
      'A virtuoso is a person highly skilled in music or another artistic pursuit. Her high level of skill on the violin makes her a virtuoso.',
    clscore: 8,
  },
  {
    word: 'voluble',
    question:
      'The host of the talk show was a ___ conversationalist, known for their ability to speak fluently and at great length on any topic.',
    choices: ['voluble', 'reticent', 'taciturn', 'reserved'],
    answer: 'voluble',
    explanation:
      "Voluble means speaking or spoken incessantly and fluently. The host's ability to speak at length on any topic is a perfect example of being voluble.",
    clscore: 8,
  },
  {
    word: 'warp',
    question:
      'The moisture from the rain caused the wooden floorboards to ___ and twist out of shape.',
    choices: ['warp', 'flatten', 'straighten', 'harden'],
    answer: 'warp',
    explanation:
      "To 'warp' is to bend or twist out of shape. The moisture from the rain caused the wooden floorboards to twist and bend, or warp.",
    clscore: 8,
  },
  {
    word: 'winsome',
    question:
      "The little girl's ___ smile won over the hearts of everyone who saw it, as it was both charming and innocent.",
    choices: ['winsome', 'unpleasant', 'ugly', 'repulsive'],
    answer: 'winsome',
    explanation:
      "Winsome means attractive or appealing in a fresh, innocent way. The little girl's charming and innocent smile is an example of a winsome smile.",
    clscore: 8,
  },
  {
    word: 'wreak',
    question:
      'The storm was so powerful it was able to ___ havoc on the coastal town, destroying homes and infrastructure.',
    choices: ['wreak', 'avoid', 'repair', 'alleviate'],
    answer: 'wreak',
    explanation:
      "To 'wreak' means to cause or inflict (damage or havoc). The storm is inflicting damage on the town, which is an example of wreaking havoc.",
    clscore: 8,
  },
  {
    word: 'wrest',
    question:
      'The military general was able to ___ control of the government from the corrupt dictator, taking power by force.',
    choices: ['wrest', 'relinquish', 'surrender', 'cede'],
    answer: 'wrest',
    explanation:
      "To 'wrest' means to take by force. The general is taking power by force from the dictator, which is a clear example of wresting control.",
    clscore: 8,
  },
  {
    word: 'idyll',
    question: 'Which of the following describes an idyll?',
    choices: [
      'a scene of rustic, peaceful simplicity',
      'a loud, chaotic event',
      'a complex, urban cityscape',
      'a heated political debate',
    ],
    answer: 'a scene of rustic, peaceful simplicity',
    explanation:
      'An idyll is a peaceful or picturesque scene, especially one related to rural or pastoral life. The term often suggests a sense of calm and ideal simplicity.',
    clscore: 6,
  },
  {
    word: 'indulgence',
    question: 'An indulgence is best described as:',
    choices: [
      'a small, permissible pleasure or treat',
      'a severe punishment for a wrongdoing',
      'a mandatory and binding requirement',
      'a heavy emotional or physical burden',
    ],
    answer: 'a small, permissible pleasure or treat',
    explanation:
      "An indulgence is an act of yielding to one's desires, often for a pleasure or treat. It implies giving in to something you might not usually allow yourself.",
    clscore: 6,
  },
  {
    word: 'infernal',
    question:
      'A person might describe a terrible situation as infernal to emphasize that it is:',
    choices: [
      'hellish or extremely unpleasant',
      'heavenly and divine',
      'joyful and celebratory',
      'peaceful and calming',
    ],
    answer: 'hellish or extremely unpleasant',
    explanation:
      'Infernal directly relates to the underworld or hell. When used to describe a situation, it means it is devilish, dreadful, or extremely difficult and unpleasant.',
    clscore: 6,
  },
  {
    word: 'juxtaposed',
    question:
      "The painter juxtaposed bright colors with dark shades to create a strong contrast. In this sentence, 'juxtaposed' means:",
    choices: [
      'placed side by side',
      'intentionally separated',
      'cleverly hidden',
      'permanently removed',
    ],
    answer: 'placed side by side',
    explanation:
      'To juxtapose means to place two things close together, often with contrasting effect. This technique highlights their differences.',
    clscore: 6,
  },
  {
    word: 'lampoon',
    question: 'What is the primary purpose of a lampoon?',
    choices: [
      'to mock or satirize a person or institution',
      'to offer a formal piece of praise or honor',
      'to sing a traditional folk song',
      'to deliver a serious and thoughtful speech',
    ],
    answer: 'to mock or satirize a person or institution',
    explanation:
      "A lampoon is a form of satire that ridicules a person, group, or institution. It's often harsh and critical in its humor.",
    clscore: 6,
  },
  {
    word: 'lascivious',
    question: 'The term lascivious most nearly describes someone who is:',
    choices: [
      'overtly lustful or promiscuous',
      'innocent and pure of heart',
      'calm and emotionally reserved',
      'eager to please others',
    ],
    answer: 'overtly lustful or promiscuous',
    explanation:
      'Lascivious means to feel or show an offensive and strong sexual desire. The word carries a negative connotation of being lewd or crude.',
    clscore: 6,
  },
  {
    word: 'liturgy',
    question: 'A liturgy is most accurately defined as:',
    choices: [
      'a fixed set of public religious rituals and ceremonies',
      'a dramatic theatrical performance',
      'a form of ceremonial music or song',
      'a traditional folk story or tale',
    ],
    answer: 'a fixed set of public religious rituals and ceremonies',
    explanation:
      'A liturgy is a prescribed set of religious practices and rituals, particularly for public worship. It is the formal structure of a church service.',
    clscore: 6,
  },
  {
    word: 'mendicant',
    question: 'A mendicant is a person who is:',
    choices: [
      'a beggar, dependent on charity',
      'a highly respected religious teacher',
      'a wealthy merchant or trader',
      'a hard-working farmer or laborer',
    ],
    answer: 'a beggar, dependent on charity',
    explanation:
      'A mendicant is someone who begs for a living. The term is often used to describe members of religious orders who have taken vows of poverty.',
    clscore: 6,
  },
  {
    word: 'nativity',
    question: "The word nativity refers to a person's:",
    choices: [
      'birth, especially the circumstances of it',
      'death and burial rituals',
      'wedding or marriage ceremony',
      'favorite holiday or celebration',
    ],
    answer: 'birth, especially the circumstances of it',
    explanation:
      "Nativity is a formal term for the process of birth or the circumstances of a person's birth. It is most famously used in the context of the Nativity of Jesus.",
    clscore: 6,
  },
  {
    word: 'oblation',
    question:
      'In the context of religion, an oblation is most often a form of:',
    choices: [
      'an offering or a sacrifice to a deity',
      'a formal public punishment',
      'a hymn sung during a service',
      'a religious sermon or lecture',
    ],
    answer: 'an offering or a sacrifice to a deity',
    explanation:
      'An oblation is a religious offering or sacrifice. It can be a simple gift or a more ceremonial offering.',
    clscore: 6,
  },
  {
    word: 'patrimony',
    question: 'Patrimony is best defined as:',
    choices: [
      "an inheritance from one's father or ancestors",
      'a loan from a financial institution',
      'a generous gift from a stranger',
      'a high-paying professional job',
    ],
    answer: "an inheritance from one's father or ancestors",
    explanation:
      "Patrimony refers to an inheritance, particularly a piece of property or estate, that is passed down from a father or family ancestors. The root 'pater' means father.",
    clscore: 6,
  },
  {
    word: 'peccadillo',
    question: 'A peccadillo is a:',
    choices: [
      'small, relatively minor offense or fault',
      'serious crime or major sin',
      'positive personal characteristic or virtue',
      'strong personal habit or routine',
    ],
    answer: 'small, relatively minor offense or fault',
    explanation:
      "A peccadillo is a small, unimportant mistake or sin. It comes from the Spanish word *pecado*, meaning 'sin', with a diminutive suffix.",
    clscore: 6,
  },
  {
    word: 'pectoral',
    question: 'A pectoral muscle is found in the:',
    choices: ['chest', 'feet', 'hands', 'legs'],
    answer: 'chest',
    explanation:
      "Pectoral relates to the chest. The major chest muscles, such as the pectoralis major, are often called 'pecs'.",
    clscore: 6,
  },
  {
    word: 'pulchritude',
    question: 'The word pulchritude is a synonym for:',
    choices: ['beauty', 'ugliness', 'strength', 'intelligence'],
    answer: 'beauty',
    explanation:
      "Pulchritude is a formal or literary term for physical beauty. It comes from the Latin word *pulcher*, meaning 'beautiful'.",
    clscore: 6,
  },
  {
    word: 'quench',
    question:
      'After running a marathon, the athlete needed to quench his thirst. This means he needed to:',
    choices: [
      'satisfy his thirst',
      'increase his thirst',
      'ignore his thirst',
      'cause himself to be thirsty',
    ],
    answer: 'satisfy his thirst',
    explanation:
      'To quench means to satisfy a thirst by drinking. It can also mean to extinguish, as in quenching a fire.',
    clscore: 6,
  },
  {
    word: 'decant',
    question: 'To decant wine is to:',
    choices: [
      'pour it gently from one bottle to another',
      'drink it directly from the bottle',
      'spill it on the table or floor',
      'hold it securely without pouring',
    ],
    answer: 'pour it gently from one bottle to another',
    explanation:
      'Decanting is the process of pouring a liquid from one container to another, typically to separate it from sediment, as is often done with wine. ',
    clscore: 6,
  },
  {
    word: 'delta',
    question: 'In geography, a delta is a landform created at the:',
    choices: [
      'mouth of a river where it meets a larger body of water',
      'summit of a tall mountain',
      'center of a secluded island',
      'vast expanse of a desert plain',
    ],
    answer: 'mouth of a river where it meets a larger body of water',
    explanation:
      'A delta is a wetland that forms as a river deposits its sediment into a larger body of water, like a sea or lake. They are named for their triangular shape, like the Greek letter delta ($Δ$).',
    clscore: 6,
  },
  {
    word: 'desiccate',
    question: 'To desiccate something is to:',
    choices: [
      'remove all moisture to make it completely dry',
      'add a large amount of water to it',
      'clean it thoroughly and protect it from harm',
      'wrap it in a protective coating',
    ],
    answer: 'remove all moisture to make it completely dry',
    explanation:
      'Desiccate means to dry out completely. Dehydrating food, for example, is a form of desiccation.',
    clscore: 6,
  },
  {
    word: 'dilate',
    question: "When a cat's eyes dilate, its pupils:",
    choices: [
      'get wider and more open',
      'become smaller and constrict',
      'are hidden from view',
      'close completely',
    ],
    answer: 'get wider and more open',
    explanation:
      "Dilate means to expand or make wider. The pupils of a cat's eyes dilate in low light to let in more light.",
    clscore: 6,
  },
  {
    word: 'diurnal',
    question: 'A diurnal animal is one that is active during the:',
    choices: ['day', 'night', 'winter', 'summer'],
    answer: 'day',
    explanation:
      'Diurnal describes something that occurs during the day. The opposite is nocturnal.',
    clscore: 6,
  },
  {
    word: 'dolorous',
    question: 'A dolorous expression is one that shows:',
    choices: [
      'great sorrow or grief',
      'extreme joy and happiness',
      'enthusiastic excitement',
      'a deep sense of peace',
    ],
    answer: 'great sorrow or grief',
    explanation:
      "Dolorous is an adjective that describes something full of or causing sorrow or grief. The word is related to 'dolor,' meaning pain or sorrow.",
    clscore: 6,
  },
  {
    word: 'ductile',
    question: 'Copper is a ductile metal, which means it can be:',
    choices: [
      'easily stretched or molded into thin wires',
      'rigid and resistant to being shaped',
      'extremely hard and impossible to break',
      'fragile and prone to shattering',
    ],
    answer: 'easily stretched or molded into thin wires',
    explanation:
      "Ductile describes a material's ability to be drawn out into a thin wire without losing its strength or breaking. This is a key property in metallurgy.",
    clscore: 6,
  },
  {
    word: 'abominate',
    question:
      'Fill in the blank: She grew to ___ the cruelty she once ignored.',
    choices: ['abominate', 'admire', 'welcome', 'respect'],
    answer: 'abominate',
    explanation:
      'To abominate means to have an intense dislike or hatred for something. The word conveys a strong sense of loathing.',
    clscore: 6,
  },
  {
    word: 'aborigine',
    question: 'An aborigine is the:',
    choices: [
      'original or native inhabitant of a country or region',
      'temporary visitor or tourist',
      'wealthy foreign settler',
      'person who explores new territory',
    ],
    answer: 'original or native inhabitant of a country or region',
    explanation:
      "An aborigine is a member of the earliest known people of a country or region. The word comes from Latin roots meaning 'from the origin'.",
    clscore: 6,
  },
  {
    word: 'absolve',
    question: 'To absolve someone is to:',
    choices: [
      'formally pardon them of guilt or blame',
      'punish them for a crime',
      'accuse them of a wrongdoing',
      'blame them for an action',
    ],
    answer: 'formally pardon them of guilt or blame',
    explanation:
      "Absolve means to free someone from guilt, blame, or a responsibility. The judge's decision to absolve a person sets them free from the charges.",
    clscore: 6,
  },
  {
    word: 'accentuated',
    question: "'Accentuated' is best described as having been:",
    choices: [
      'made more prominent or noticeable',
      'intentionally hidden or concealed',
      'ignored or made less important',
      'lessened or decreased in size',
    ],
    answer: 'made more prominent or noticeable',
    explanation:
      'To accentuate means to emphasize something, making it stand out. A piece of clothing might be accentuated with a bold belt to draw attention to the waist.',
    clscore: 6,
  },
  {
    word: 'adulation',
    question: 'What is the key characteristic of adulation?',
    choices: [
      'excessive praise or flattery',
      'constructive criticism or feedback',
      'a deliberate refusal to speak',
      'a severe and formal punishment',
    ],
    answer: 'excessive praise or flattery',
    explanation:
      'Adulation is a strong and often excessive form of praise or admiration. It implies a level of worship or flattery that goes beyond simple respect.',
    clscore: 6,
  },
  {
    word: 'alimentary',
    question: 'The alimentary canal is the part of the body related to:',
    choices: [
      'digestion and nutrition',
      'political governance',
      'the legal system',
      'musical performance',
    ],
    answer: 'digestion and nutrition',
    explanation:
      'Alimentary relates to food, nourishment, or the digestive organs. The alimentary canal is the passage from the mouth to the anus, through which food passes.',
    clscore: 6,
  },
  {
    word: 'allay',
    question:
      'A doctor might give a patient an anxiety-reducing medication to allay their fears. In this context, to allay means:',
    choices: [
      'to calm or soothe',
      'to increase or worsen',
      'to hide or suppress',
      'to express frustration',
    ],
    answer: 'to calm or soothe',
    explanation:
      'To allay means to put a fear, doubt, or suspicion to rest. It implies a reduction in intensity or a calming effect.',
    clscore: 6,
  },
  {
    word: 'annals',
    question: 'What are annals?',
    choices: [
      'a chronological record of historical events',
      'a collection of fictional novels',
      'a book of ancient poems and songs',
      'a detailed set of geographical maps',
    ],
    answer: 'a chronological record of historical events',
    explanation:
      "Annals are historical records that detail events year by year. The word comes from the Latin *annus*, meaning 'year'.",
    clscore: 6,
  },
  {
    word: 'archaic',
    question:
      'The legal document contained some archaic language, making it difficult to understand today. This means the language was:',
    choices: [
      'old-fashioned and out of date',
      'modern and innovative',
      'highly useful and practical',
      'unnecessarily new and trendy',
    ],
    answer: 'old-fashioned and out of date',
    explanation:
      'Archaic means something that is very old and no longer in common use. It implies a sense of being outdated or primitive.',
    clscore: 6,
  },
  {
    word: 'archives',
    question:
      "A person goes to a city's archives to look for historical documents. This is a place where:",
    choices: [
      'official or historical records are stored',
      'food supplies are kept',
      'money and valuables are saved',
      'weapons and ammunition are kept',
    ],
    answer: 'official or historical records are stored',
    explanation:
      'An archive is a collection of records or the place where they are kept. The term is associated with documents of historical or public importance.',
    clscore: 6,
  },
  {
    word: 'arrears',
    question: 'What does it mean to be in arrears on a payment?',
    choices: [
      'to have an unpaid or overdue debt',
      'to have money in a savings account',
      'to have a profit from a business',
      'to have a large financial deposit',
    ],
    answer: 'to have an unpaid or overdue debt',
    explanation:
      'Arrears refers to money that is overdue and remains unpaid. It implies being behind on a scheduled payment.',
    clscore: 6,
  },
  {
    word: 'ascendant',
    question:
      'With his recent success, the young politician is now considered to be in the ascendant. This means he is:',
    choices: [
      'rising in power and influence',
      'losing his position and influence',
      'maintaining an unchanging status',
      'sinking into obscurity',
    ],
    answer: 'rising in power and influence',
    explanation:
      'Ascendant means rising in importance or gaining power and influence. It suggests a movement toward a higher position or rank.',
    clscore: 6,
  },
  {
    word: 'assay',
    question:
      'A scientist might assay a mineral to determine its purity. This means the scientist will:',
    choices: [
      'test or analyze the mineral',
      "disregard the mineral's composition",
      'intentionally hide the mineral',
      'completely destroy the mineral',
    ],
    answer: 'test or analyze the mineral',
    explanation:
      "To assay means to analyze or test a substance, often a metal or ore, to determine its components. It's a common term in chemistry and metallurgy.",
    clscore: 6,
  },
  {
    word: 'astral',
    question: 'What does the word astral relate to?',
    choices: [
      'stars or celestial bodies',
      'the planet Earth and its features',
      "the world's oceans and seas",
      'the forests and jungles',
    ],
    answer: 'stars or celestial bodies',
    explanation:
      "Astral is an adjective relating to or resembling the stars or constellations. It comes from the Latin word *astrum*, meaning 'star'.",
    clscore: 6,
  },
  {
    word: 'atoll',
    question: 'An atoll is a ring-shaped island that encloses a:',
    choices: [
      'calm body of water called a lagoon',
      'steep, rocky mountain peak',
      'large, barren desert plain',
      'swift-flowing river',
    ],
    answer: 'calm body of water called a lagoon',
    explanation:
      'An atoll is a ring-shaped coral reef or island that encircles a central lagoon. They are formed from the growth of coral around a submerged volcanic island.',
    clscore: 6,
  },
  {
    word: 'augur',
    question:
      'The economist’s poor report seemed to ___ a coming recession. The best word to fill the blank is:',
    choices: ['augur', 'ignore', 'clear', 'hide'],
    answer: 'augur',
    explanation:
      'To augur means to foretell or predict an event, often based on a sign or omen. The report was a sign of what was to come.',
    clscore: 6,
  },
  {
    word: 'auspices',
    question:
      "The charity event was held under the auspices of a large corporation. This means the event was conducted with the corporation's:",
    choices: [
      'guidance and sponsorship',
      'aggressive attack',
      'financial neglect',
      'direct danger',
    ],
    answer: 'guidance and sponsorship',
    explanation:
      'Auspices refers to the support, patronage, or guidance of a person, group, or organization. It implies a form of protection or endorsement.',
    clscore: 6,
  },
  {
    word: 'beatitude',
    question: 'What does the word beatitude mean?',
    choices: [
      'a state of supreme blessedness and happiness',
      'a feeling of deep sorrow and sadness',
      'an emotion of intense fear or anxiety',
      'a fit of violent anger',
    ],
    answer: 'a state of supreme blessedness and happiness',
    explanation:
      'Beatitude means a state of perfect happiness or bliss. The term is most famously associated with the blessings of Jesus in the Sermon on the Mount.',
    clscore: 6,
  },
  {
    word: 'benediction',
    question: "A priest's benediction at the end of a service is a:",
    choices: ['blessing', 'curse', 'narrative story', 'formal demand'],
    answer: 'blessing',
    explanation:
      "A benediction is a short blessing. The word comes from the Latin *bene* (well) and *dicere* (to speak), literally 'to speak well of'.",
    clscore: 6,
  },
  {
    word: 'biennial',
    question: 'A biennial plant is one that completes its life cycle over:',
    choices: ['two years', 'a single year', 'a few months', 'a daily basis'],
    answer: 'two years',
    explanation:
      'Biennial means something that occurs every two years. In botany, a biennial plant takes two years to grow from seed to flowering.',
    clscore: 6,
  },
  {
    word: 'bondage',
    question:
      'Fill in the blank: For centuries, people were held in ___ and forced to work without pay.',
    choices: ['bondage', 'freedom', 'wealth', 'luxury'],
    answer: 'bondage',
    explanation:
      "Bondage is the state of being a slave or being held in servitude. The word implies a lack of freedom and control over one's own life.",
    clscore: 6,
  },
  {
    word: 'boorish',
    question:
      'The student was expelled for his boorish behavior. This means he was:',
    choices: [
      'rude and ill-mannered',
      'respectful and considerate',
      'charming and elegant',
      'unusually quiet',
    ],
    answer: 'rude and ill-mannered',
    explanation:
      'Boorish describes someone who is rough, crude, or unrefined in their manners. It suggests a lack of sophistication.',
    clscore: 6,
  },
  {
    word: 'bourgeois',
    question: 'In sociology, the term bourgeois refers to the:',
    choices: [
      'middle class, often characterized by materialism',
      'royal or aristocratic elite',
      'working class or the poor',
      'bohemian or artistic class',
    ],
    answer: 'middle class, often characterized by materialism',
    explanation:
      'Bourgeois refers to the middle class, especially in reference to their conventional, materialistic, or conformist values.',
    clscore: 6,
  },
  {
    word: 'bovine',
    question:
      'The veterinary school focused on bovine medicine. This branch of study is concerned with:',
    choices: ['cows or cattle', 'horses', 'birds', 'sheep'],
    answer: 'cows or cattle',
    explanation:
      'Bovine is an adjective that relates to or resembles cows. The scientific name for cattle is *Bos taurus*.',
    clscore: 6,
  },
  {
    word: 'carp',
    question:
      'Fill in the blank: He would always ___ about the smallest details, making it impossible to finish the project.',
    choices: ['carp', 'praise', 'admire', 'enjoy'],
    answer: 'carp',
    explanation:
      'To carp means to complain or find fault in a persistent, nagging way. It suggests a trivial and bothersome criticism.',
    clscore: 6,
  },
  {
    word: 'carrion',
    question: 'Vultures are scavengers that feed on carrion. This is:',
    choices: [
      'the decaying flesh of dead animals',
      'freshly killed meat',
      'sweet, ripe fruit',
      'live fish',
    ],
    answer: 'the decaying flesh of dead animals',
    explanation:
      'Carrion is the carcass of a dead animal. It is an important part of the ecosystem, as it provides food for many scavengers.',
    clscore: 6,
  },
  {
    word: 'castigate',
    question:
      'The coach would castigate the players for their poor performance. To castigate them means to:',
    choices: [
      'punish or severely criticize them',
      'offer them praise and encouragement',
      'ignore their poor behavior',
      'reward them with extra playing time',
    ],
    answer: 'punish or severely criticize them',
    explanation:
      'To castigate means to reprimand or punish someone severely. It implies a strong and harsh criticism.',
    clscore: 6,
  },
  {
    word: 'chaff',
    question: 'When farmers separate wheat from chaff, they are removing the:',
    choices: [
      'worthless husks or debris',
      'valuable grain kernels',
      'precious stones found in the field',
      'important farming tools',
    ],
    answer: 'worthless husks or debris',
    explanation:
      "Chaff is the worthless husks and stems that are separated from the grain during threshing. The phrase 'separating the wheat from the chaff' means to distinguish the valuable from the worthless.",
    clscore: 6,
  },
  {
    word: 'coniferous',
    question: 'Trees that are coniferous are characterized by:',
    choices: [
      'producing cones and needles',
      'bearing fruit in the summer',
      'having large, showy flowers',
      'being leafless year-round',
    ],
    answer: 'producing cones and needles',
    explanation:
      "Coniferous trees, like pines and firs, bear cones and typically have needles instead of broad leaves. The word comes from Latin roots meaning 'cone-bearing'.",
    clscore: 6,
  },
  {
    word: 'constrict',
    question: 'To constrict a blood vessel is to cause it to:',
    choices: [
      'shrink or become narrower',
      'expand or become wider',
      'stretch out or lengthen',
      'loosen or become more flexible',
    ],
    answer: 'shrink or become narrower',
    explanation:
      'To constrict means to make or become narrower, tighter, or smaller. It is the opposite of dilate.',
    clscore: 6,
  },
  {
    word: 'convolution',
    question: 'A convolution is a:',
    choices: [
      'complex, twisted, or coiled shape',
      'perfectly straight or linear path',
      'smooth and completely flat surface',
      'a simple and clear idea',
    ],
    answer: 'complex, twisted, or coiled shape',
    explanation:
      'A convolution is a fold, twist, or coil. It is often used to describe the intricate folds of the brain. The word also refers to a complexity or difficulty in an argument.',
    clscore: 6,
  },
  {
    word: 'corpulent',
    question: "'Corpulent' is a formal synonym for:",
    choices: ['fat', 'thin', 'weak', 'tall'],
    answer: 'fat',
    explanation:
      "Corpulent is an adjective meaning fat or obese. It comes from the Latin word *corpus*, meaning 'body'.",
    clscore: 6,
  },
  {
    word: 'extrinsic',
    question:
      'The value of the diamond was extrinsic, as it was based on external factors like market demand. This means its value was:',
    choices: [
      'external or not part of its essential nature',
      'an essential or core part of the stone',
      'a hidden or inner quality',
      'a fundamental and unchangeable truth',
    ],
    answer: 'external or not part of its essential nature',
    explanation:
      'Extrinsic describes something that comes from outside; it is not inherent or essential to the nature of the thing itself. The opposite is intrinsic.',
    clscore: 6,
  },
  {
    word: 'fatuous',
    question:
      "The student's fatuous comments showed a lack of serious thought. 'Fatuous' most nearly means:",
    choices: [
      'foolish or silly',
      'wise or intelligent',
      'serious or sober',
      'thoughtful and contemplative',
    ],
    answer: 'foolish or silly',
    explanation:
      'Fatuous means silly, foolish, and often self-satisfied. It implies a kind of foolishness that is smug and absurd.',
    clscore: 6,
  },
  {
    word: 'fecund',
    question:
      'The fecund soil of the rainforest produced a rich abundance of plants. Fecund most nearly means:',
    choices: [
      'fertile and productive',
      'barren and unproductive',
      'dry and parched',
      'wasted or exhausted',
    ],
    answer: 'fertile and productive',
    explanation:
      'Fecund means fertile, productive, or capable of producing new growth. It can also describe a highly creative mind.',
    clscore: 6,
  },
  {
    word: 'flaccid',
    question:
      "The balloon became flaccid after the air was let out. 'Flaccid' most nearly means:",
    choices: [
      'limp, soft, and lacking firmness',
      'firm and rigid',
      'strong and resilient',
      'solid and immovable',
    ],
    answer: 'limp, soft, and lacking firmness',
    explanation:
      'Flaccid is an adjective that means soft, limp, or lacking firmness. It is often used to describe muscles or skin.',
    clscore: 6,
  },
  {
    word: 'fledge',
    question: 'A young bird that has fledged is ready to:',
    choices: [
      'begin to fly and leave the nest',
      'die or expire',
      'hatch from its egg',
      'build its first nest',
    ],
    answer: 'begin to fly and leave the nest',
    explanation:
      'To fledge means for a young bird to develop the feathers and wing muscles necessary for flight. The word also refers to the act of leaving the nest.',
    clscore: 6,
  },
  {
    word: 'fray',
    question:
      "The rope began to fray at the edges from constant use. 'Fray' most nearly means to:",
    choices: [
      'wear down or unravel',
      'strengthen or reinforce',
      'sew together',
      'bind securely',
    ],
    answer: 'wear down or unravel',
    explanation:
      'To fray means to unravel or wear at the edges, particularly of fabric or rope. It can also mean to strain or tense a relationship.',
    clscore: 6,
  },
  {
    word: 'gradient',
    question:
      "The gradient of the hill was very steep. The word 'gradient' refers to its:",
    choices: [
      'slope or incline',
      'overall height',
      'valley or low point',
      'mountain range',
    ],
    answer: 'slope or incline',
    explanation:
      'A gradient is the degree of a slope or incline. In mathematics, it is the rate of change of a function.',
    clscore: 6,
  },
  {
    word: 'guild',
    question: 'A medieval guild was a type of:',
    choices: [
      'professional association of craftsmen',
      'noble family or clan',
      'military team or unit',
      'casual social friendship group',
    ],
    answer: 'professional association of craftsmen',
    explanation:
      'A guild was a medieval association of craftsmen or merchants, formed for mutual aid and protection. They set standards and prices for their trade.',
    clscore: 6,
  },
  {
    word: 'rotundity',
    question:
      'The rotundity of the globe was a key concept for early explorers. Rotundity most nearly means:',
    choices: [
      'roundness or plumpness',
      'thinness or slenderness',
      'flatness or smoothness',
      'sharpness or angularity',
    ],
    answer: 'roundness or plumpness',
    explanation:
      "Rotundity is the quality or state of being round or plump. It can describe a shape, as in a globe, or a person's physical form.",
    clscore: 6,
  },
  {
    word: 'serrated',
    question: 'A serrated knife is most easily identified by its:',
    choices: [
      'saw-like, notched edge',
      'smooth, razor-sharp edge',
      'curved and pointed tip',
      'round and decorative handle',
    ],
    answer: 'saw-like, notched edge',
    explanation:
      'Serrated means having a jagged or saw-like edge. Serrated knives are particularly useful for cutting bread or tomatoes.',
    clscore: 6,
  },
  {
    word: 'sweltered',
    question:
      'After the air conditioning broke, the office workers sweltered. This means they were:',
    choices: [
      'suffering from the extreme heat',
      'freezing from the cold',
      'calmly resting',
      'playing a game',
    ],
    answer: 'suffering from the extreme heat',
    explanation:
      'To swelter is to suffer from oppressive heat. The word implies a feeling of being uncomfortably hot and often sweaty.',
    clscore: 6,
  },
  {
    word: 'travail',
    question:
      'The mountain climbers endured great travail to reach the summit. The word travail refers to:',
    choices: [
      'painful or laborious effort',
      'a relaxing vacation',
      'a peaceful moment of rest',
      'a festive holiday',
    ],
    answer: 'painful or laborious effort',
    explanation:
      'Travail is a formal term for arduous or difficult work. It comes from a Latin word for a torture rack, which shows its connotation of pain and struggle.',
    clscore: 6,
  },
  {
    word: 'turgid',
    question:
      "The river became turgid after the heavy rains. 'Turgid' most nearly means:",
    choices: [
      'swollen or bloated',
      'dry or empty',
      'clear and calm',
      'fast and turbulent',
    ],
    answer: 'swollen or bloated',
    explanation:
      'Turgid means swollen and distended, often with fluid. It can also describe language that is bombastic or overblown.',
    clscore: 6,
  },
  {
    word: 'uncouth',
    question: 'An uncouth person is someone who is considered:',
    choices: [
      'rude and lacking good manners',
      'polite and well-spoken',
      'elegant and sophisticated',
      'kind and generous',
    ],
    answer: 'rude and lacking good manners',
    explanation:
      "Uncouth describes someone who is unrefined, awkward, or lacking good manners. The word comes from Old English, meaning 'unknown' or 'unfamiliar', suggesting they are not from polite society.",
    clscore: 6,
  },
  {
    word: 'parsimony',
    question: 'A person known for their parsimony is someone who is:',
    choices: [
      'extremely unwilling to spend money',
      'generous and giving',
      'wasteful and extravagant',
      'indifferent to money',
    ],
    answer: 'extremely unwilling to spend money',
    explanation:
      'Parsimony is an excessive unwillingness to spend money or use resources. It is a synonym for stinginess.',
    clscore: 5,
  },
  {
    word: 'epitaph',
    question: 'An epitaph is a phrase or inscription found:',
    choices: [
      'on a tombstone or monument',
      'in a religious hymn',
      'during a sermon or speech',
      'on a marriage certificate',
    ],
    answer: 'on a tombstone or monument',
    explanation:
      'An epitaph is an inscription on a tombstone or a short text written in memory of a deceased person.',
    clscore: 5,
  },
];
