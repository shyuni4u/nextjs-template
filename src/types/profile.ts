//  Profile Types

export interface Profile {
  age_min: number
  age_max: number
  height_min: number
  height_max: number
  occupation: string
  education: string
  location: string
  drinking: string
  smoking: string
  religion: string
  mbti: string
  hobbies: string[]
  personality: string[]
  dating_style: string[]
  pets: string
  interests: string[]
  vacation_style: string
  face_type: string
  marriage_thoughts: string
}

export type IdealProfile = Profile

export type Gender = 'male' | 'female'

// Survey form options
export const SURVEY_OPTIONS = {
  OCCUPATIONS: ["직장인", "학생", "프리랜서", "창업가", "전문직", "공무원", "기타", "상관없음"] as string[],
  EDUCATIONS: ["고등학교 졸업", "전문대 졸업", "대학교 졸업", "대학원 졸업", "기타", "상관없음"] as string[],
  LOCATIONS: ["서울", "경기", "인천", "부산", "대구", "광주", "대전", "울산", "세종", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주", "상관없음"] as string[],
  DRINKING: ["전혀 안함", "가끔", "자주", "매일", "상관없음"] as string[],
  SMOKING: ["비흡연", "가끔", "자주", "매일", "상관없음"] as string[],
  RELIGIONS: ["무교", "기독교", "천주교", "불교", "이슬람교", "기타", "상관없음"] as string[],
  MBTI_TYPES: ["INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP", "상관없음"] as string[],
  HOBBIES: ["운동", "독서", "영화감상", "음악감상", "여행", "요리", "게임", "쇼핑", "사진", "그림", "춤", "노래", "악기연주", "등산", "낚시", "상관없음"] as string[],
  PERSONALITIES: ["외향적", "내향적", "활발한", "조용한", "유머러스", "진지한", "로맨틱", "현실적", "감성적", "이성적", "상관없음"] as string[],
  DATING_STYLES: ["천천히", "빠르게", "자연스럽게", "계획적으로", "로맨틱하게", "실용적으로", "상관없음"] as string[],
  PETS: ["반려동물 있음", "반려동물 없음", "상관없음"] as string[],
  INTERESTS: ["문화예술", "스포츠", "테크놀로지", "패션뷰티", "푸드", "자기계발", "투자", "창업", "상관없음"] as string[],
  VACATION_STYLES: ["휴식", "모험", "문화탐방", "자연체험", "도시탐방", "맛집투어", "상관없음"] as string[],
  FACE_TYPES: ["귀여운상", "시크한상", "청순한상", "섹시한상", "지적인상", "자연스러운상", "상관없음"] as string[],
  MARRIAGE_THOUGHTS: ["적극적", "긍정적", "신중함", "부정적", "미정", "상관없음"] as string[]
}

// Default profile values
export const DEFAULT_PROFILE: Profile = {
  age_min: 25,
  age_max: 35,
  height_min: 160,
  height_max: 180,
  occupation: '',
  education: '',
  location: '',
  drinking: '',
  smoking: '',
  religion: '',
  mbti: '',
  hobbies: [],
  personality: [],
  dating_style: [],
  pets: '',
  interests: [],
  vacation_style: '',
  face_type: '',
  marriage_thoughts: ''
}

// Test data
export const TEST_USER_PROFILE: Profile = {
  age_min: 25,
  age_max: 32,
  height_min: 165,
  height_max: 180,
  occupation: '직장인',
  education: '대학교 졸업',
  location: '서울',
  drinking: '가끔',
  smoking: '비흡연',
  religion: '무교',
  mbti: 'ENFP',
  hobbies: ['운동', '영화감상', '여행'],
  personality: ['외향적', '유머러스', '로맨틱'],
  dating_style: ['자연스럽게', '로맨틱하게'],
  pets: '반려동물 없음',
  interests: ['문화예술', '스포츠', '자기계발'],
  vacation_style: '문화탐방',
  face_type: '자연스러운상',
  marriage_thoughts: '긍정적'
}

export const TEST_IDEAL_PROFILE: IdealProfile = {
  age_min: 27,
  age_max: 35,
  height_min: 170,
  height_max: 185,
  occupation: '전문직',
  education: '대학교 졸업',
  location: '서울',
  drinking: '가끔',
  smoking: '비흡연',
  religion: '상관없음',
  mbti: 'INTJ',
  hobbies: ['운동', '독서', '음악감상'],
  personality: ['지적인', '진지한', '로맨틱'],
  dating_style: ['천천히', '계획적으로'],
  pets: '상관없음',
  interests: ['자기계발', '테크놀로지', '투자'],
  vacation_style: '휴식',
  face_type: '지적인상',
  marriage_thoughts: '적극적'
}
