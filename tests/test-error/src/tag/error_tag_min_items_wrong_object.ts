import typia, { tags } from "typia";

/**
 * Verifies `MinItems` rejects an object while naming its declared array target.
 *
 * Object intersections remain valid metadata, so the diagnostic must explain
 * that this specific array-only tag makes the intersection invalid.
 *
 * 1. Apply the array-only `MinItems` tag to an object.
 * 2. Require transform rejection to identify the declared array target.
 */
typia.createIs<{ value: string } & tags.MinItems<1>>();
