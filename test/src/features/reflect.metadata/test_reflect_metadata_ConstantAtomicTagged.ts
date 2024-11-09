import typia from "typia";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ConstantAtomicTagged = 
  _test_reflect_metadata("ConstantAtomicTagged")(
    typia.reflect.metadata<[ConstantAtomicTagged]>()
  );