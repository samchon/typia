import { _randomFormatUrl } from "./_randomFormatUrl";
import { _ILengthProps } from "./_randomStringLength";

/**
 * Generate an IRI from the ASCII HTTPS URL subset.
 *
 * The URI syntax is also valid IRI syntax. {@link _randomFormatUrl} owns the
 * length bounds and throws when they exclude its shortest 12-character form.
 *
 * @evidence contracts/common.md#principled-implementation An absolute URL is also a valid IRI, so the generator reuses the URL builder and its length handling.
 * @evidence contracts/common.md#clear-and-simple-design One delegation.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It does not generate non-ASCII characters.
 * @evidence contracts/common.md#meaningful-documentation Native prose distinguishes the sampled ASCII HTTPS subset from the full IRI grammar and identifies the delegated length floor/failure.
 */
export const _randomFormatIri = (props?: _ILengthProps): string =>
  _randomFormatUrl(props);
