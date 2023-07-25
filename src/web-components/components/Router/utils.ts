import pathMatch from "path-match"

const matcher = pathMatch({
  sensitive: false,
  strict: false,
  end: false,
})

export function match(routes: string[], uri: string) {
  const exists = routes.find((route) => matcher(route)(uri))

  if (!exists) {
    return null
  }

  return { ...exists, params: matcher(exists.path)(uri), uri }
}
