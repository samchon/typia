import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_reflect_metadata_ConstantAtomicSimple =
  _test_reflect_metadata("ConstantAtomicSimple")(
    typia.reflect.metadata<[ConstantAtomicSimple]>(),
  );
