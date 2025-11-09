import typia from "typia";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_DynamicConstant = (): void =>
  _test_reflect_metadata("DynamicConstant")(
    typia.reflect.metadata<[DynamicConstant]>()
  );