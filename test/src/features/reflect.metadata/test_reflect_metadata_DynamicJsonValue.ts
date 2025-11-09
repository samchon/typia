import typia from "typia";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_DynamicJsonValue = (): void =>
  _test_reflect_metadata("DynamicJsonValue")(
    typia.reflect.metadata<[DynamicJsonValue]>()
  );