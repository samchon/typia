import typia, { tags } from "typia";

// Format declares `exclusive: ["format", "pattern"]`, naming its own kind, so
// two Format tags on one property are forbidden: the emitted schema keeps one
// `format` while the generated validator enforces both. The check rejects both
// this same-kind duplicate and the cross-kind Format & Pattern conflict (see
// error_tag_format_and_pattern.ts).
typia.createIs<string & tags.Format<"uuid"> & tags.Format<"email">>();
