import { _randomFormatUrl } from "./_randomFormatUrl";
import { _ILengthProps } from "./_randomStringLength";

/**
 * Generate an IRI reference from the ASCII absolute HTTPS URL subset.
 *
 * {@link _randomFormatUrl} owns the length bounds and throws when they exclude
 * its shortest 12-character form. Relative references are valid members of the
 * format but are outside this generator's sample shapes.
 *
 * @evidence contracts/common.md#principled-implementation An absolute IRI is also a valid IRI reference, so the generator reuses the URL builder.
 * @evidence contracts/common.md#clear-and-simple-design One delegation.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It does not generate relative references.
 * @evidence contracts/common.md#meaningful-documentation Native prose identifies the absolute ASCII HTTPS sample, the unsampled relative forms and the delegated length floor/failure.
 */
export const _randomFormatIriReference = (props?: _ILengthProps): string =>
  _randomFormatUrl(props);
