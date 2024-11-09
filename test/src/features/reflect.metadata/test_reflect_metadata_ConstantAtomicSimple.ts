import typia from "typia";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ConstantAtomicSimple = 
  _test_reflect_metadata("ConstantAtomicSimple")(
    typia.reflect.metadata<[ConstantAtomicSimple]>()
  );