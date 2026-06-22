import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@repo/ui/card'
import { getAdminServerEnv } from '../src/env.server'
import { AdminEnvBadge } from '../src/admin-env-badge'

export default function Home() {
  const env = getAdminServerEnv()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Environment overview</CardTitle>
        <CardDescription>
          The admin app reads private server variables and public browser variables separately.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <p>APP_ENV</p>
            <p>{env.APP_ENV}</p>
          </div>
          <div>
            <p>API_BASE_URL</p>
            <p>{env.API_BASE_URL}</p>
          </div>
        </div>
        <AdminEnvBadge />
      </CardContent>
    </Card>
  )
}