import { _randomFormatUrl } from "./_randomFormatUrl";
import { _ILengthProps } from "./_randomStringLength";

/**
 * Generate an IRI reference, which is an absolute URL.
 *
 * @evidence contracts/common.md#principled-implementation An absolute IRI is also a valid IRI reference, so the generator reuses the URL builder.
 * @evidence contracts/common.md#clear-and-simple-design One delegation.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It does not generate relative references.
 * @evidence contracts/common.md#meaningful-documentation The doc states that an IRI reference is an absolute URL here and that the URL builder owns the length rule.
 */
export const _randomFormatIriReference = (props?: _ILengthProps): string =>
  _randomFormatUrl(props);
