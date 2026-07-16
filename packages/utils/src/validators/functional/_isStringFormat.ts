import { _isFormatByte } from "./_isFormatByte";
import { _isFormatDate } from "./_isFormatDate";
import { _isFormatDateTime } from "./_isFormatDateTime";
import { _isFormatDuration } from "./_isFormatDuration";
import { _isFormatEmail } from "./_isFormatEmail";
import { _isFormatHostname } from "./_isFormatHostname";
import { _isFormatIdnEmail } from "./_isFormatIdnEmail";
import { _isFormatIdnHostname } from "./_isFormatIdnHostname";
import { _isFormatIpv4 } from "./_isFormatIpv4";
import { _isFormatIpv6 } from "./_isFormatIpv6";
import { _isFormatIri } from "./_isFormatIri";
import { _isFormatIriReference } from "./_isFormatIriReference";
import { _isFormatJsonPointer } from "./_isFormatJsonPointer";
import { _isFormatRegex } from "./_isFormatRegex";
import { _isFormatRelativeJsonPointer } from "./_isFormatRelativeJsonPointer";
import { _isFormatTime } from "./_isFormatTime";
import { _isFormatUri } from "./_isFormatUri";
import { _isFormatUriReference } from "./_isFormatUriReference";
import { _isFormatUriTemplate } from "./_isFormatUriTemplate";
import { _isFormatUrl } from "./_isFormatUrl";
import { _isFormatUuid } from "./_isFormatUuid";

export const _isStringFormat = (format: string, value: string): boolean => {
  const checker: ((input: string) => boolean) | undefined = FORMAT[format];
  return checker === undefined || checker(value);
};

const FORMAT: Record<string, (input: string) => boolean> = {
  byte: _isFormatByte,
  regex: _isFormatRegex,
  uuid: _isFormatUuid,
  email: _isFormatEmail,
  hostname: _isFormatHostname,
  "idn-email": _isFormatIdnEmail,
  "idn-hostname": _isFormatIdnHostname,
  iri: _isFormatIri,
  "iri-reference": _isFormatIriReference,
  ipv4: _isFormatIpv4,
  ipv6: _isFormatIpv6,
  uri: _isFormatUri,
  "uri-reference": _isFormatUriReference,
  "uri-template": _isFormatUriTemplate,
  url: _isFormatUrl,
  "date-time": _isFormatDateTime,
  date: _isFormatDate,
  time: _isFormatTime,
  duration: _isFormatDuration,
  "json-pointer": _isFormatJsonPointer,
  "relative-json-pointer": _isFormatRelativeJsonPointer,
};
