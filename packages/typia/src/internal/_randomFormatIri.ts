import { _randomFormatUrl } from "./_randomFormatUrl";
import { _ILengthProps } from "./_randomStringLength";

/**
 * Generate an IRI, which is an absolute URL.
 *
 * @evidence contracts/common.md#principled-implementation An absolute URL is also a valid IRI, so the generator reuses the URL builder and its length handling.
 * @evidence contracts/common.md#clear-and-simple-design One delegation.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It does not generate non-ASCII characters.
 * @evidence contracts/common.md#meaningful-documentation The doc states that an IRI is an absolute URL here and that the URL builder owns the length rule.
 */
export const _randomFormatIri = (props?: _ILengthProps): string =>
  _randomFormatUrl(props);
