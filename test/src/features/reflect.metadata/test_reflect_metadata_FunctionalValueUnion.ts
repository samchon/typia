import typia from "typia";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_FunctionalValueUnion =
  _test_reflect_metadata("FunctionalValueUnion")(
    typia.reflect.metadata<[FunctionalValueUnion]>(),
  );
