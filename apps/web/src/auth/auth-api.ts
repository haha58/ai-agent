import { http } from '@/http'
import { tokenStore } from './token-store'

interface LoginResponse {
    accessToken: string
    user: {
        id: string
        name: string
    }
}

interface RefreshResponse {
    accessToken: string
}

export const loginByPassword = async (email: string, password: string) => {
    const response = await http.post('/auth/web/password/login', { email, password }, {
        init: { credentials: 'include' },
    })

    if (!response.ok) {
        throw new Error('登录失败')
    }

    const data = (await response.data) as LoginResponse
    tokenStore.setAccessToken(data.accessToken)
    return data
}

export const refreshAccessToken = async () => {
    const response = await http.post('/auth/web/token/refresh', undefined, {
        init: { credentials: 'include' },
    })

    if (!response.ok) {
        tokenStore.clear()
        throw new Error('刷新 access token 失败')
    }

    const data = response.data as RefreshResponse
    tokenStore.setAccessToken(data.accessToken)
    return data.accessToken
}