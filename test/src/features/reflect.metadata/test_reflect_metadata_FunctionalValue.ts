import typia from "typia";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_FunctionalValue = (): void =>
  _test_reflect_metadata("FunctionalValue")(
    typia.reflect.metadata<[FunctionalValue]>()
  );