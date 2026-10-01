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
 */
export const _isFormatPassword = (): boolean => true;
