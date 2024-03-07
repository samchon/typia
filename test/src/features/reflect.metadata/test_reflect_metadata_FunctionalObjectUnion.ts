import typia from "typia";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_FunctionalObjectUnion =
  _test_reflect_metadata("FunctionalObjectUnion")(
    typia.reflect.metadata<[FunctionalObjectUnion]>(),
  );
