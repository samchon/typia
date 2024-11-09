import typia from "typia";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ConstantAtomicUnion = 
  _test_reflect_metadata("ConstantAtomicUnion")(
    typia.reflect.metadata<[ConstantAtomicUnion]>()
  );