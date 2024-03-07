import typia from "typia";
import { TypeTagPattern } from "../../structures/TypeTagPattern";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TypeTagPattern = _test_reflect_metadata(
  "TypeTagPattern",
)(typia.reflect.metadata<[TypeTagPattern]>());
