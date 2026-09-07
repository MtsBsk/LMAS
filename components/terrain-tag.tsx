import { cn } from "@/lib/utils"

export function TerrainTag({
  terrain,
  className,
}: {
  terrain: "maraude" | "etranger"
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-medium",
        terrain === "maraude" ? "text-lantern" : "text-terrain",
        className
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          terrain === "maraude" ? "bg-lantern" : "bg-terrain"
        )}
      />
      {terrain === "maraude" ? "Maraude" : "À l'étranger"}
    </span>
  )
}
