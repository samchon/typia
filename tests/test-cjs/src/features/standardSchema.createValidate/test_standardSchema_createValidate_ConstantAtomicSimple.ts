import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_standardSchema_createValidate_ConstantAtomicSimple =
  (): void =>
    _test_standardSchema_validate("ConstantAtomicSimple")<ConstantAtomicSimple>(
      ConstantAtomicSimple,
    )(typia.createValidate<ConstantAtomicSimple>());
