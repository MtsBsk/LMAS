export type CarnetEntry = {
  date: string
  lieu: string
  terrain: "maraude" | "etranger"
  note: string
}

export const carnet: CarnetEntry[] = [
  {
    date: "Mardi",
    lieu: "Gare du Nord",
    terrain: "maraude",
    note: "27 repas chauds, 4 nouvelles rencontres",
  },
  {
    date: "Mars",
    lieu: "Kaolack, Sénégal",
    terrain: "etranger",
    note: "Puits n°3 mis en service pour le village",
  },
  {
    date: "Jeudi",
    lieu: "Place de la République",
    terrain: "maraude",
    note: "Distribution de duvets avant le froid",
  },
  {
    date: "Juin",
    lieu: "Antsirabe, Madagascar",
    terrain: "etranger",
    note: "12 élèves équipés pour la rentrée",
  },
]

export type Projet = {
  slug: string
  titre: string
  lieu: string
  periode: string
  terrain: "maraude" | "etranger"
  resume: string
  detail: string
}

export const projets: Projet[] = [
  {
    slug: "maraudes-paris",
    titre: "Maraudes de Paris",
    lieu: "Paris et petite couronne",
    periode: "Toute l’année, 3 sorties par semaine",
    terrain: "maraude",
    resume:
      "Des tournées à pied pour apporter un repas chaud, des vêtements et surtout un moment d’écoute aux personnes qui dorment à la rue.",
    detail:
      "Nos équipes partent en fin de journée avec de quoi nourrir et réchauffer une trentaine de personnes. Chaque maraude suit un itinéraire fixe, pensé pour retrouver les mêmes visages et suivre l’évolution de chaque situation. L’objectif n’est pas seulement de distribuer, mais de maintenir un lien dans la durée et d’orienter vers les structures d’accueil quand une personne est prête à franchir ce pas.",
  },
  {
    slug: "maraudes-lyon",
    titre: "Maraudes de Lyon",
    lieu: "Lyon, Presqu’île et Part-Dieu",
    periode: "Toute l’année, 2 sorties par semaine",
    terrain: "maraude",
    resume:
      "Une équipe plus jeune, lancée en 2024, qui couvre désormais les principaux points de rassemblement du centre-ville.",
    detail:
      "Née à l’initiative de bénévoles lyonnais, cette maraude s’appuie sur les mêmes principes que celle de Paris : itinéraires réguliers, petites équipes, et priorité donnée à l’écoute. Elle travaille en lien avec les associations locales pour éviter les doublons et couvrir les zones les moins visitées.",
  },
  {
    slug: "puits-kaolack",
    titre: "Accès à l’eau à Kaolack",
    lieu: "Kaolack, Sénégal",
    periode: "2022 — en cours",
    terrain: "etranger",
    resume:
      "Forage et entretien de puits dans trois villages qui n’avaient jusque-là qu’un accès saisonnier à l’eau potable.",
    detail:
      "Le projet a permis le forage de trois puits depuis 2022, chacun équipé d’une pompe manuelle simple à réparer sur place. Un comité de village assure l’entretien courant ; LMAS forme les référents locaux et finance les grosses réparations. Un quatrième puits est en préparation pour 2027.",
  },
  {
    slug: "scolarisation-antsirabe",
    titre: "Scolarisation à Antsirabe",
    lieu: "Antsirabe, Madagascar",
    periode: "2023 — en cours",
    terrain: "etranger",
    resume:
      "Fournitures, uniformes et frais de scolarité pour des enfants dont les familles ne peuvent pas assumer seules la rentrée.",
    detail:
      "Chaque rentrée, LMAS identifie avec une école partenaire les familles qui risquent de ne pas pouvoir scolariser leurs enfants. Le soutien couvre l’uniforme, les fournitures et une partie des frais annuels. En 2026, 34 enfants ont pu commencer ou poursuivre leur scolarité grâce à ce dispositif.",
  },
]

export const chiffresCles = [
  { valeur: "3", unite: "villes", label: "où nos maraudes sortent chaque semaine" },
  { valeur: "180", unite: "bénévoles", label: "actifs sur le terrain et à l’étranger" },
  { valeur: "4", unite: "pays", label: "où nos projets de développement sont menés" },
  { valeur: "12 ans", unite: "", label: "d’existence de l’association" },
]
