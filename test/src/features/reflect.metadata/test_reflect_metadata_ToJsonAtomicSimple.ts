import typia from "typia";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ToJsonAtomicSimple = 
  _test_reflect_metadata("ToJsonAtomicSimple")(
    typia.reflect.metadata<[ToJsonAtomicSimple]>()
  );