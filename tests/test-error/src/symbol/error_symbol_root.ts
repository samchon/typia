import typia from "typia";

// A symbol value must produce a transform diagnostic, not an accept-all guard.
typia.createIs<symbol>();
