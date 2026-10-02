import { _randomFormatUrl } from "./_randomFormatUrl";
import { _ILengthProps } from "./_randomStringLength";

/**
 * Generate a URI template with no expressions.
 *
 * Samples an absolute HTTPS literal template. {@link _randomFormatUrl} owns the
 * length bounds and throws when they exclude its shortest 12-character form;
 * template expressions are outside this generator's sample shapes.
 *
 * @evidence contracts/common.md#principled-implementation A URL with no expressions is a valid URI template, so the generator reuses the URL builder.
 * @evidence contracts/common.md#clear-and-simple-design One delegation.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It does not generate template expressions.
 * @evidence contracts/common.md#meaningful-documentation Native prose identifies literal HTTPS templates and the delegated length floor/failure, without promising expression generation.
 */
export const _randomFormatUriTemplate = (props?: _ILengthProps): string =>
  _randomFormatUrl(props);
