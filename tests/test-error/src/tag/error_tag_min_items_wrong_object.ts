import typia, { tags } from "typia";

// Object intersections otherwise remain valid metadata, but MinItems is still
// array-only and must report its declared target rather than the object host.
typia.createIs<{ value: string } & tags.MinItems<1>>();
