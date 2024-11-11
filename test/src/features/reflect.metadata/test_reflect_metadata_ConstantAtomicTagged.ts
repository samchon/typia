import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_reflect_metadata_ConstantAtomicTagged =
  _test_reflect_metadata("ConstantAtomicTagged")(
    typia.reflect.metadata<[ConstantAtomicTagged]>(),
  );
