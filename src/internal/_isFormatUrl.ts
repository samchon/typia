export const _isFormatUrl = (str: string): boolean => { try { return new URL(str) != null } catch { return false } };
