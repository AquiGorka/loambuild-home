const MOBILE_BREAKPOINT = 800

interface Dimensions {
  width: number
  height: number
  isMobile: boolean
}

export function getWindowDimensions(): Dimensions {
  const { innerWidth: width, innerHeight: height } = window
  const isMobile = width < MOBILE_BREAKPOINT
  return { isMobile, width, height }
}
