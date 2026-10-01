/**
 * Checks the RFC 6570 URI template spelling of the `uri-template` format.
 *
 * Accepts literal characters and `{...}` expressions with an optional operator,
 * a list of variable names that may carry a prefix length or the explode
 * modifier. It checks the syntax and does not expand a template.
 *
 * @evidence contracts/common.md#principled-implementation RFC 6570 allows literal characters and brace expressions with an optional operator and a comma-separated variable list whose names may carry a prefix length or an explode modifier; the expression encodes that syntax and does not expand templates or check operator-specific rules beyond the operator set.
 * @evidence contracts/common.md#clear-and-simple-design One predicate and one private pattern, identical to the copy in @typia/utils.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The grammar is the standard's.
 * @evidence contracts/common.md#meaningful-documentation The doc states the expression forms.
 */
export const _isFormatUriTemplate = (str: string): boolean => PATTERN.test(str);

const PATTERN =
  /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i;
