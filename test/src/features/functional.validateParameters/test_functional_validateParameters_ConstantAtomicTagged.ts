import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_validateParameters_ConstantAtomicTagged =
  (): void =>
    _test_functional_validateParameters("ConstantAtomicTagged")(
      ConstantAtomicTagged,
    )((p: (input: ConstantAtomicTagged) => ConstantAtomicTagged) =>
      typia.functional.validateParameters(p),
    );
