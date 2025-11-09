import typia from "typia";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_DynamicUndefined = (): void =>
  _test_reflect_metadata("DynamicUndefined")(
    typia.reflect.metadata<[DynamicUndefined]>()
  );