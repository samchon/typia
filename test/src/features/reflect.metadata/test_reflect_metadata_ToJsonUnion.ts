import typia from "typia";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ToJsonUnion = (): void =>
  _test_reflect_metadata("ToJsonUnion")(
    typia.reflect.metadata<[ToJsonUnion]>()
  );