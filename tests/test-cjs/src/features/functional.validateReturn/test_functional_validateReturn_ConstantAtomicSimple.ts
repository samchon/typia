import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_validateReturn_ConstantAtomicSimple = (): void =>
  _test_functional_validateReturn("ConstantAtomicSimple")(ConstantAtomicSimple)(
    (p: (input: ConstantAtomicSimple) => ConstantAtomicSimple) =>
      typia.functional.validateReturn(p),
  );
