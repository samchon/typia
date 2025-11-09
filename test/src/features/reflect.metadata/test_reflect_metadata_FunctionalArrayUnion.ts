import typia from "typia";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_FunctionalArrayUnion = (): void =>
  _test_reflect_metadata("FunctionalArrayUnion")(
    typia.reflect.metadata<[FunctionalArrayUnion]>()
  );