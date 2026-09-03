import typia, { tags } from "typia";

/**
 * Verifies `MaxItems` rejects a number while naming its declared array target.
 *
 * The rejected tag used to report the number host as its target, hiding the
 * array-only contract that actually made the intersection invalid.
 *
 * 1. Apply the array-only `MaxItems` tag to a number.
 * 2. Require transform rejection to identify the declared array target.
 */
typia.createIs<number & tags.MaxItems<2>>();
