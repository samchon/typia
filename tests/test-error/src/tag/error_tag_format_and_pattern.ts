import typia, { tags } from "typia";

// Format and Pattern both declare `exclusive: ["format", "pattern"]`, and
// Format's doc comment states it is "Mutually exclusive with Pattern". The
// declaration is the spec, so intersecting them on one property must be a
// compile error, even though each writes a different JSON Schema keyword.
typia.createIs<string & tags.Format<"uuid"> & tags.Pattern<"^[0-9a-f]+$">>();
