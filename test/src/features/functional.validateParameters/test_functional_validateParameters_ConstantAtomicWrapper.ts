import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_validateParameters_ConstantAtomicWrapper =
  (): void =>
    _test_functional_validateParameters("ConstantAtomicWrapper")(
      ConstantAtomicWrapper,
    )((p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) =>
      typia.functional.validateParameters(p),
    );
