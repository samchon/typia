import typia, { tags } from "typia";

interface DynamicTag {
  [key: number & tags.Minimum<0> & tags.ExclusiveMaximum<10>]: number;
  [key: string & tags.Format<"uuid">]: string;
}
typia.misc.createPrune<DynamicTag>();
