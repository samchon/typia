import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_reflect_metadata_ConstantAtomicUnion = (): void =>
  _test_reflect_metadata("ConstantAtomicUnion")(
    typia.reflect.metadata<[ConstantAtomicUnion]>(),
  );
