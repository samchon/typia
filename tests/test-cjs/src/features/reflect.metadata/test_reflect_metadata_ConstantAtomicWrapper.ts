import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_reflect_metadata_ConstantAtomicWrapper = (): void =>
  _test_reflect_metadata("ConstantAtomicWrapper")(
    typia.reflect.metadata<[ConstantAtomicWrapper]>(),
  );
