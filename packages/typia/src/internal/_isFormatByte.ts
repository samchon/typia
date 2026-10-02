/**
 * Checks the padded Base64 spelling accepted by the byte format.
 *
 * Empty data is valid. The predicate checks alphabet, four-character grouping
 * and terminal padding; it does not decode bytes or require canonical zero
 * padding bits.
 *
 * @evidence contracts/common.md#principled-implementation Full-input grouping admits complete four-symbol blocks and only the two valid padded tail lengths. The fixed alphabet and suffix positions establish lexical validity without byte allocation.
 * @evidence contracts/common.md#clear-and-simple-design One private expression owns this lexical check; decoding and content interpretation remain with their consumers.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Alphabet and grouping are format rules rather than special inputs. The predicate applies the same expression to every supplied string.
 * @evidence contracts/common.md#meaningful-documentation The doc states the accepted padded Base64 spelling, that empty data is valid, and that bytes are not decoded and zero padding bits are not required to be canonical.
 */
export const _isFormatByte = (str: string): boolean => PATTERN.test(str);

const PATTERN =
  /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
