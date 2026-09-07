import { carnet } from "@/lib/data"
import { TerrainTag } from "@/components/terrain-tag"

export function Carnet() {
  return (
    <div className="rounded-xl border border-border/70 bg-card">
      <div className="border-b border-border/70 px-5 py-3">
        <p className="text-sm font-medium text-muted-foreground">
          Carnet de terrain
        </p>
      </div>
      <ul className="divide-y divide-border/70">
        {carnet.map((entry) => (
          <li key={`${entry.date}-${entry.lieu}`} className="px-5 py-4">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-sm font-medium">{entry.lieu}</p>
              <span className="shrink-0 text-xs text-muted-foreground">
                {entry.date}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{entry.note}</p>
            <TerrainTag terrain={entry.terrain} className="mt-2" />
          </li>
        ))}
      </ul>
    </div>
  )
}
