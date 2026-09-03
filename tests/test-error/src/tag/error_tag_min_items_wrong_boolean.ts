import typia, { tags } from "typia";

/**
 * Verifies `MinItems` rejects a boolean while naming its declared array target.
 *
 * Boolean literal-union analysis used to report the boolean host and duplicate
 * the same rejected tag, obscuring the array-only contract.
 *
 * 1. Apply the array-only `MinItems` tag to a boolean.
 * 2. Require one transform rejection that identifies the declared array target.
 */
typia.createIs<boolean & tags.MinItems<1>>();
