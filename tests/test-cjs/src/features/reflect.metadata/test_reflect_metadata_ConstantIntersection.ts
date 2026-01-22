import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_reflect_metadata_ConstantIntersection = (): void =>
  _test_reflect_metadata("ConstantIntersection")(
    typia.reflect.metadata<[ConstantIntersection]>(),
  );
