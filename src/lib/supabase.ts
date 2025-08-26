import { createClient } from '@supabase/supabase-js'

// Server-side client
const supabaseUrl = process.env.SUPABASE_URL || ''
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  v6: {
    Tables: {
      v6_profiles: {
        Row: {
          id: string
          user_id: string
          gender: 'male' | 'female'
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
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          gender: 'male' | 'female'
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
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          gender?: 'male' | 'female'
          age_min?: number
          age_max?: number
          height_min?: number
          height_max?: number
          occupation?: string
          education?: string
          location?: string
          drinking?: string
          smoking?: string
          religion?: string
          mbti?: string
          hobbies?: string[]
          personality?: string[]
          dating_style?: string[]
          pets?: string
          interests?: string[]
          vacation_style?: string
          face_type?: string
          marriage_thoughts?: string
          created_at?: string
          updated_at?: string
        }
      }
      v6_ideal_profiles: {
        Row: {
          id: string
          user_id: string
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
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
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
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          age_min?: number
          age_max?: number
          height_min?: number
          height_max?: number
          occupation?: string
          education?: string
          location?: string
          drinking?: string
          smoking?: string
          religion?: string
          mbti?: string
          hobbies?: string[]
          personality?: string[]
          dating_style?: string[]
          pets?: string
          interests?: string[]
          vacation_style?: string
          face_type?: string
          marriage_thoughts?: string
          created_at?: string
          updated_at?: string
        }
      }
      v6_verification_codes: {
        Row: {
          id: string
          code: string
          user_id: string | null
          profile_data: Record<string, unknown>
          ideal_profile_data: Record<string, unknown>
          created_at: string
          expires_at: string
          used: boolean
        }
        Insert: {
          id?: string
          code: string
          user_id?: string | null
          profile_data?: Record<string, unknown>
          ideal_profile_data?: Record<string, unknown>
          created_at?: string
          expires_at?: string
          used?: boolean
        }
        Update: {
          id?: string
          code?: string
          user_id?: string | null
          profile_data?: Record<string, unknown>
          ideal_profile_data?: Record<string, unknown>
          created_at?: string
          expires_at?: string
          used?: boolean
        }
      }
    }
  }
}
