import typia from "typia";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ConstantAtomicAbsorbed = 
  _test_reflect_metadata("ConstantAtomicAbsorbed")(
    typia.reflect.metadata<[ConstantAtomicAbsorbed]>()
  );