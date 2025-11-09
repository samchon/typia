import typia from "typia";
import { TypeTagCustom } from "../../structures/TypeTagCustom";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TypeTagCustom = (): void =>
  _test_reflect_metadata("TypeTagCustom")(
    typia.reflect.metadata<[TypeTagCustom]>()
  );