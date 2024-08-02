import { tags } from "typia";

export interface DynamicTag {
  [key: string & tags.Format<"uuid">]: string & tags.Format<"email">;
}
