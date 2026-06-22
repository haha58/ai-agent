import { getWebServerEnv } from '../src/env.server'
import { WebEnvBadge } from '../src/web-env-badge'

export default async function Home() {
  const env = getWebServerEnv()

  return (
    <section>
      <span>server {env.APP_ENV}</span>
      <span>{env.API_BASE_URL}</span>
      <WebEnvBadge />
    </section>
  )
}