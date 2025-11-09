import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_validateParameters_ConstantAtomicUnion =
  (): void =>
    _test_functional_validateParameters("ConstantAtomicUnion")(
      ConstantAtomicUnion,
    )((p: (input: ConstantAtomicUnion) => ConstantAtomicUnion) =>
      typia.functional.validateParameters(p),
    );
