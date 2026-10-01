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

/**
 * Applies a registered string format and accepts unknown format annotations.
 *
 * Format names are arbitrary schema strings. Only the registry's own entries
 * select predicates; inherited object members are not supported formats.
 * Consumers still apply their independent type, pattern and length checks.
 *
 * @evidence contracts/common.md#principled-implementation Own-key membership distinguishes registered predicates from arbitrary format annotations, including Object.prototype names. Unknown annotations return literal true; known names delegate the same grammar checks used by validator and string-constant coverage consumers.
 * @evidence contracts/common.md#clear-and-simple-design One fixed dispatch table owns name-to-predicate selection. The membership check and invocation stay together, so both consumers share unknown-format semantics without separate lists or exception handlers.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Registered names are supported schema formats, not consumer or fixture exceptions. Own-key selection applies uniformly to arbitrary names and changes no foreign prototype or checker.
 * @evidence contracts/common.md#meaningful-documentation Native prose explains unknown annotations, inherited-name exclusion and the independent constraints owned by consumers. The registry gives the exact supported population; descriptive prose is separate from acknowledgments.
 * @evidence contracts/performance.md#efficient-algorithms Own-key testing and keyed lookup avoid scanning the fixed registry. Dispatch adds constant work to the selected predicate's input-dependent cost and allocates no per-call registry or format-name list.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work This operation selects and runs a predicate for one value; it coordinates no equivalent request population or result cache. Fixed predicate references are initialized once and reused by calls without storing validated values.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources The module retains one fixed registry of predicate references. Calls retain no input, result history, task or handle; predicate-local allocations belong to the invoked checker and become reclaimable after its execution.
 */
export const _isStringFormat = (format: string, value: string): boolean => {
  const checker: ((input: string) => boolean) | undefined = Object.hasOwn(
    FORMAT,
    format,
  )
    ? FORMAT[format]
    : undefined;
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
