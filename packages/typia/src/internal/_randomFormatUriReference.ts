import { _randomFormatUrl } from "./_randomFormatUrl";
import { _ILengthProps } from "./_randomStringLength";

/**
 * Generate a URI reference from the absolute HTTPS URL subset.
 *
 * {@link _randomFormatUrl} owns the length bounds and throws when they exclude
 * its shortest 12-character form. Relative references are valid members of the
 * format but are outside this generator's sample shapes.
 *
 * @evidence contracts/common.md#principled-implementation An absolute URL is a valid URI reference, so the generator reuses the URL builder.
 * @evidence contracts/common.md#clear-and-simple-design One delegation.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It does not generate relative references.
 * @evidence contracts/common.md#meaningful-documentation Native prose identifies the sampled absolute HTTPS form, unsampled relative forms and delegated length floor/failure.
 */
export const _randomFormatUriReference = (props?: _ILengthProps): string =>
  _randomFormatUrl(props);
