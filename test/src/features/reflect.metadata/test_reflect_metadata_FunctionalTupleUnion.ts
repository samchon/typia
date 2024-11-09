import typia from "typia";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_FunctionalTupleUnion = 
  _test_reflect_metadata("FunctionalTupleUnion")(
    typia.reflect.metadata<[FunctionalTupleUnion]>()
  );