export type CategoryType = 'dating' | 'hobby' | 'career' | 'trade' | 'misc'

export interface Category {
  type: CategoryType
  name: string
  icon: string
  description: string
  color: string
}

export interface CategoryProfile {
  isActive: boolean
  fields: Record<string, string | number | boolean>
  visibility: ConnectionLevel
}

export interface DatingProfile {
  ageRange: string
  location: string
  interests: string
  relationshipGoal: string
  lifestyle: string
}

export interface HobbyProfile {
  activityType: string
  experienceLevel: string
  preferredTime: string
  preferredLocation: string
  groupSize: string
  commitment: string
}

export interface CareerProfile {
  currentPosition: string
  experienceYears: string
  skills: string
  industry: string
  salaryRange: string
  workStyle: string
  seekingRole: string
}

export interface MiscProfile {
  purpose: string
  offering: string
  seeking: string
  meetingType: string
  availability: string
}

export interface TradeProfile {
  itemType: string
  condition: string
  price: string
  location: string
  tradingMethod: string
  description: string
}

export type ConnectionLevel = "friends" | "friendsOfFriends" | "extended"

export interface ExtendedProfile {
  // 기존 필드
  id?: string
  name: string
  age: number
  occupation: string
  location: string
  bio: string
  interests: string[]
  photo: string | null
  profileVisibility: ConnectionLevel

  // 새로운 카테고리 필드
  activeCategories: CategoryType[]
  categoryProfiles: {
    dating?: DatingProfile
    hobby?: HobbyProfile
    career?: CareerProfile
    misc?: MiscProfile
    trade?: TradeProfile
  }

  // 각 카테고리별 공개 설정
  categoryVisibility: Record<CategoryType, ConnectionLevel>
}

export const CATEGORIES: Record<CategoryType, Category> = {
  dating: {
    type: 'dating',
    name: '만남',
    icon: '💕',
    description: '소개팅, 연애, 결혼',
    color: 'bg-pink-100 text-pink-800'
  },
  hobby: {
    type: 'hobby',
    name: '취미',
    icon: '🎯',
    description: '동호회, 스터디, 운동',
    color: 'bg-blue-100 text-blue-800'
  },
  career: {
    type: 'career',
    name: '채용',
    icon: '💼',
    description: '구직, 구인, 네트워킹',
    color: 'bg-green-100 text-green-800'
  },
  trade: {
    type: 'trade',
    name: '거래',
    icon: '🛒',
    description: '중고거래, 판매, 구매',
    color: 'bg-emerald-100 text-emerald-800'
  },
  misc: {
    type: 'misc',
    name: '기타',
    icon: '🤝',
    description: '멘토링, 협업, 모임',
    color: 'bg-amber-100 text-amber-800'
  }
}

export const getCategoryInfo = (type: CategoryType): Category => CATEGORIES[type]

export const getAllCategories = (): Category[] => Object.values(CATEGORIES)
