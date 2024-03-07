import typia from "typia";
import { ObjectPartial } from "../../structures/ObjectPartial";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectPartial = _test_reflect_metadata(
  "ObjectPartial",
)(typia.reflect.metadata<[ObjectPartial]>());
