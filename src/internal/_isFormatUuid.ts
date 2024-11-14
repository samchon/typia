export const _isFormatUuid = (str: string): boolean => PATTERN.test(str);

const PATTERN = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
