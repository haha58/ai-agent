import { http } from '@/http'
import { PingRequest, PingResponse } from '@repo/contracts'

export function postPing(payload: PingRequest) {
  return http.post<PingRequest, PingResponse>(
    '/rpc/system/ping',
    payload,
  )
}