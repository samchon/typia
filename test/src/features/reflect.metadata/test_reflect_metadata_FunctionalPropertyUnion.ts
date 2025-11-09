import typia from "typia";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_FunctionalPropertyUnion = (): void =>
  _test_reflect_metadata("FunctionalPropertyUnion")(
    typia.reflect.metadata<[FunctionalPropertyUnion]>()
  );