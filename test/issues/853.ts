import fs from "fs";
import typia, { tags } from "typia";

export interface DynamicTag {
  [key: number & tags.Minimum<0> & tags.ExclusiveMaximum<10>]: bigint &
    tags.Type<"uint64">;
  [key: string & tags.Format<"uuid">]: string & tags.Format<"email">;
}

fs.writeFileSync(
  __dirname + "/853.js",
  typia.createIs<DynamicTag>().toString(),
  "utf8",
);
