import typia from "typia";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_FunctionalTuple = (): void =>
  _test_reflect_metadata("FunctionalTuple")(
    typia.reflect.metadata<[FunctionalTuple]>()
  );