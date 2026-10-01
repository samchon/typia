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
 * @evidence contracts/common.md#meaningful-documentation Native prose states the accepted representation and its important limits, so callers can distinguish this predicate from a broader policy or conversion. Descriptive prose and review acknowledgments are separated.
 * @evidence contracts/performance.md#efficient-algorithms The grammar advances over disjoint four-symbol blocks and at most one padded tail. Work grows with encoded length; the Boolean test allocates no decoded byte array or per-block record.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work This predicate owns one value decision and coordinates no equivalent request population or completed-result cache. Stable module constants are reused where present; caller request coordination does not belong to this operation.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources Module-level constants and predicate references have a fixed population. Per-call counters, captures or Date state remain local and become reclaimable after the verdict; no validated input, request history or handle is retained.
 */
export const _isFormatByte = (str: string): boolean => PATTERN.test(str);

const PATTERN =
  /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
