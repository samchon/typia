import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_reflect_metadata_ConstantAtomicAbsorbed = (): void =>
  _test_reflect_metadata("ConstantAtomicAbsorbed")(
    typia.reflect.metadata<[ConstantAtomicAbsorbed]>(),
  );
