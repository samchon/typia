import typia from "typia";
import { TypeTagFormat } from "../../structures/TypeTagFormat";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TypeTagFormat = _test_reflect_metadata(
  "TypeTagFormat",
)(typia.reflect.metadata<[TypeTagFormat]>());
