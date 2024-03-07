import typia from "typia";
import { ConstantIntersection } from "../../structures/ConstantIntersection";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ConstantIntersection =
  _test_reflect_metadata("ConstantIntersection")(
    typia.reflect.metadata<[ConstantIntersection]>(),
  );
