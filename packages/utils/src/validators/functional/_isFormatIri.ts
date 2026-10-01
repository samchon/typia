import { _isFormatIriReference } from "./_isFormatIriReference";

/**
 * Checks the `iri` format: an IRI reference that begins with a scheme.
 *
 * The scheme must be a letter followed by letters, digits, `+`, `.` or `-` and
 * a colon. The rest is judged by {@link _isFormatIriReference}.
 *
 * @evidence contracts/common.md#principled-implementation An IRI is an IRI reference that begins with a scheme, so the predicate requires the scheme prefix and delegates the character rules to the reference predicate.
 * @evidence contracts/common.md#clear-and-simple-design One predicate that composes the scheme test and the reference predicate, identical to the typia copy.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The composition follows the definition of an IRI as an absolute reference.
 * @evidence contracts/common.md#meaningful-documentation A doc was added that states the scheme requirement and the delegation.
 */
export const _isFormatIri = (str: string): boolean =>
  SCHEME.test(str) && _isFormatIriReference(str);

const SCHEME = /^[A-Za-z][A-Za-z0-9+.-]*:/u;
