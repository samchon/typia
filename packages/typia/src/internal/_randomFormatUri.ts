import { _randomFormatUrl } from "./_randomFormatUrl";
import { _ILengthProps } from "./_randomStringLength";

/**
 * Generate a URI from the absolute HTTPS URL subset.
 *
 * {@link _randomFormatUrl} owns the length bounds and throws when they exclude
 * its shortest 12-character form. Other URI schemes remain outside the sample
 * shapes of this generator.
 *
 * @evidence contracts/common.md#principled-implementation An absolute URL is a valid URI, so the generator reuses the URL builder.
 * @evidence contracts/common.md#clear-and-simple-design One delegation.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It does not generate other schemes.
 * @evidence contracts/common.md#meaningful-documentation Native prose identifies the sampled HTTPS scheme and the delegated length floor/failure without equating all URIs with URLs.
 */
export const _randomFormatUri = (props?: _ILengthProps): string =>
  _randomFormatUrl(props);
