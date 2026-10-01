/**
 * Accepts the password annotation without imposing a content rule.
 *
 * The owning schema validator verifies the string type. Password strength,
 * secrecy and presentation policy are not format validation decisions here.
 *
 * @evidence contracts/common.md#principled-implementation Password supplies no additional lexical restriction, so literal true expresses annotation-only behavior after the type check owned by the consumer.
 * @evidence contracts/common.md#clear-and-simple-design A zero-argument constant predicate exposes that there is no content analysis or policy configuration to coordinate.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The unrestricted verdict is the annotation contract, not a bypass for a consumer or fixture. No external password policy is substituted.
 * @evidence contracts/common.md#meaningful-documentation Native prose states the accepted representation and its important limits, so callers can distinguish this predicate from a broader policy or conversion. Descriptive prose and review acknowledgments are separated.
 * @evidence contracts/performance.md#efficient-algorithms Returning a Boolean constant performs no input traversal, allocation or password-policy calculation; the annotation adds constant work to the consumer type check.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work This predicate owns one value decision and coordinates no equivalent request population or completed-result cache. Stable module constants are reused where present; caller request coordination does not belong to this operation.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources Module-level constants and predicate references have a fixed population. Per-call counters, captures or Date state remain local and become reclaimable after the verdict; no validated input, request history or handle is retained.
 */
export const _isFormatPassword = (): boolean => true;
