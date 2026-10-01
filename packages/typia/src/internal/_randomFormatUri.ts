import { _randomFormatUrl } from "./_randomFormatUrl";
import { _ILengthProps } from "./_randomStringLength";

/**
 * Generate a URI, which is an absolute URL.
 *
 * @evidence contracts/common.md#principled-implementation An absolute URL is a valid URI, so the generator reuses the URL builder.
 * @evidence contracts/common.md#clear-and-simple-design One delegation.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It does not generate other schemes.
 * @evidence contracts/common.md#meaningful-documentation The doc states that a URI is an absolute URL here and that the URL builder owns the length rule.
 */
export const _randomFormatUri = (props?: _ILengthProps): string =>
  _randomFormatUrl(props);
