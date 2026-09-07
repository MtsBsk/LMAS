import { carnet } from "@/lib/data"
import { TerrainTag } from "@/components/terrain-tag"

export function Carnet() {
  return (
    <div className="relative -rotate-1 rounded-sm bg-card shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)]">
      <div className="absolute -top-2.5 left-8 h-5 w-5 rotate-6 rounded-full bg-lantern shadow-[0_2px_4px_rgba(0,0,0,0.35)]" />
      <div className="border-b border-dashed border-border/80 px-6 py-4">
        <p className="font-heading text-sm font-medium italic text-muted-foreground">
          Carnet de terrain
        </p>
      </div>
      <ul className="divide-y divide-dashed divide-border/80">
        {carnet.map((entry) => (
          <li key={`${entry.date}-${entry.lieu}`} className="px-6 py-4">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-sm font-medium">{entry.lieu}</p>
              <span className="shrink-0 font-heading text-xs italic text-muted-foreground">
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
