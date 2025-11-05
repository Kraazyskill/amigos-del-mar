import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatWhatsAppLink(phone: string, message: string): string {
  // Remove all non-numeric characters except leading +
  const cleanPhone = phone.replace(/[^0-9]/g, '')
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`
}

export function formatEmail(email: string): string {
  return `mailto:${email}`
}

export function formatPhone(phone: string): string {
  return `tel:${phone}`
}

