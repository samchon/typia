import typia from "typia";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_DynamicTree = (): void =>
  _test_reflect_metadata("DynamicTree")(
    typia.reflect.metadata<[DynamicTree]>()
  );