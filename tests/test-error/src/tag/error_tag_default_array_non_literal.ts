import typia, { tags } from "typia";

// This tuple fixes its length but leaves its element unspecified. Default
// accepts the tuple shape so typia can issue the tag diagnostic at the
// transformed call site, where every member must be a concrete literal.
typia.json.schema<string[] & tags.Default<readonly [string]>>();
