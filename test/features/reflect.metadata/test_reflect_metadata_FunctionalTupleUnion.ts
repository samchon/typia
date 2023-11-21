import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_reflect_metadata_FunctionalTupleUnion =
  _test_reflect_metadata("FunctionalTupleUnion")(
    typia.reflect.metadata<[FunctionalTupleUnion]>(),
  );
