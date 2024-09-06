import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const truncateAddress = (
  address: string,
  { prefix = 8, suffix = 6 }: { prefix?: number; suffix?: number } = {}
) => {
  return `${address.slice(0, prefix)}•••${address.slice(-suffix)}`
}

export const getRpId = (url: string) => {
  try {
    // Create a URL object to parse the URL
    const parsedUrl = new URL(url)
    return parsedUrl.hostname
  } catch (error) {
    console.error("Invalid URL:", error)
    return null
  }
}
