/**
 * Format a date to a readable string
 */
export function formatDate(date: Date | string): string {
  if (!date) return '';
  
  const d = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

/**
 * Calculate years between two dates
 */
export function calculateYears(startDate: Date | string, endDate: Date | string): number {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
  
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  
  return Math.floor(diffYears);
}

/**
 * Format a date range for a lifetime (e.g., "1945 - 2023")
 */
export function formatLifespan(birthDate: Date | string, deathDate: Date | string): string {
  if (!birthDate || !deathDate) return '';
  
  const birth = typeof birthDate === 'string' ? new Date(birthDate) : birthDate;
  const death = typeof deathDate === 'string' ? new Date(deathDate) : deathDate;
  
  return `${birth.getFullYear()} - ${death.getFullYear()}`;
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (!text || text.length <= maxLength) return text;
  
  return text.slice(0, maxLength) + '...';
}

/**
 * Generate a random ID
 */
export function generateId(length: number = 8): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return result;
}
