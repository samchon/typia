import typia, { tags } from "typia";

/**
 * Verifies `UniqueItems` rejects a string with its declared array target.
 *
 * The rejected tag used to report the string host instead of the array-only
 * contract that consumers need to correct the annotation.
 *
 * 1. Apply the array-only `UniqueItems` tag to a string.
 * 2. Require transform rejection to identify the declared array target.
 */
typia.createIs<string & tags.UniqueItems>();
