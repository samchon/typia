import typia from "typia";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TypeTagBigInt = _test_reflect_metadata(
  "TypeTagBigInt",
)(typia.reflect.metadata<[TypeTagBigInt]>());
