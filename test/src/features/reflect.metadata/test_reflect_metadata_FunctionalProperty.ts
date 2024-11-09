import typia from "typia";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_FunctionalProperty = 
  _test_reflect_metadata("FunctionalProperty")(
    typia.reflect.metadata<[FunctionalProperty]>()
  );