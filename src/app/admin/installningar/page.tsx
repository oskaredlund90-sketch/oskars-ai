'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Save, Globe, Database, Shield, Palette } from 'lucide-react'

export default function AdminSettings() {
  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Inställningar</h1>
          <p className="text-muted-foreground text-sm">Konfigurera sajten och systemet</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Allmänna inställningar */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Allmänt</CardTitle>
            </div>
            <CardDescription>Grundläggande inställningar för sajten</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1.5">Sajtnamn</label>
              <input
                type="text"
                defaultValue="Oskars AI"
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Beskrivning</label>
              <textarea
                defaultValue="En lärandeplattform för lärare som vill integrera AI i sin undervisning"
                rows={2}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm resize-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Kontakt-epost</label>
              <input
                type="email"
                defaultValue="oskar.edlund@osteraker.se"
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
          </CardContent>
        </Card>

        {/* Nivåtest-inställningar */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Nivåtest</CardTitle>
            </div>
            <CardDescription>Inställningar för nivåtestet</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1.5">Kunskapsvikt (%)</label>
                <input
                  type="number"
                  defaultValue={60}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Självskattningsvikt (%)</label>
                <input
                  type="number"
                  defaultValue={40}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Antal nivåer</label>
              <input
                type="number"
                defaultValue={5}
                disabled
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm opacity-50"
              />
              <p className="text-xs text-muted-foreground mt-1">Kan inte ändras (hårdkodat i systemet)</p>
            </div>
          </CardContent>
        </Card>

        {/* Databasinfo */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Databas</CardTitle>
            </div>
            <CardDescription>Supabase-anslutning och status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Status</span>
                <Badge variant="secondary">Ej konfigurerad</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Supabase URL</span>
                <span className="text-sm text-muted-foreground font-mono">—</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Tabeller</span>
                <span className="text-sm text-muted-foreground">0 / 10</span>
              </div>
              <p className="text-xs text-muted-foreground pt-2 border-t">
                Supabase-projektet behöver konfigureras med riktiga nycklar för att aktivera databasen.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Säkerhet */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Säkerhet</CardTitle>
            </div>
            <CardDescription>Autentisering och behörigheter</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Admin-autentisering</span>
                <Badge variant="outline">Utvecklingsläge</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Supabase Auth</span>
                <Badge variant="secondary">Ej aktiverad</Badge>
              </div>
              <p className="text-xs text-muted-foreground pt-2 border-t">
                I produktion hanteras autentiseringen via Supabase Auth med RLS-skydd.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Spara inställningar
          </Button>
        </div>
      </div>
    </div>
  )
}
