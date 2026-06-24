export interface AuthContext {
  userId: string
  sessionId: string
  application: 'web' | 'admin'
  roles: string[]
}