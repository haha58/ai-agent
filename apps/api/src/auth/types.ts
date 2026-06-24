export type AuthAppName = 'admin' | 'web'

// 这是服务端在“登录成功 / 刷新成功”两个阶段都要用到的会话视图。
export type SessionContext = {
  sessionId: string
  userId: string
  app: AuthAppName
  roles: string[]
  expiresAtMs: number
}

// access token 面向请求鉴权，只保留当前请求真正会用到的身份信息。
export type AccessTokenClaims = {
  sub: string
  sid: string
  app: AuthAppName
  roles: string[]
}

// refresh token 多一个 jti，用来把每次续签都映射到数据库里的一条独立状态记录。
export type RefreshTokenClaims = {
  sub: string
  sid: string
  app: AuthAppName
  jti: string
}