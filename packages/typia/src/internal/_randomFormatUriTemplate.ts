import { _randomFormatUrl } from "./_randomFormatUrl";
import { _ILengthProps } from "./_randomStringLength";

/**
 * Generate a URI template, which is a URL without expressions.
 *
 * @evidence contracts/common.md#principled-implementation A URL with no expressions is a valid URI template, so the generator reuses the URL builder.
 * @evidence contracts/common.md#clear-and-simple-design One delegation.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It does not generate template expressions.
 * @evidence contracts/common.md#meaningful-documentation The doc states that a URI template is a URL without expressions here and that the URL builder owns the length rule.
 */
export const _randomFormatUriTemplate = (props?: _ILengthProps): string =>
  _randomFormatUrl(props);
