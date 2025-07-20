import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_validateEqualsParameters_ConstantAtomicTagged =
  (): void =>
    _test_functional_validateEqualsParameters("ConstantAtomicTagged")(
      ConstantAtomicTagged,
    )((p: (input: ConstantAtomicTagged) => ConstantAtomicTagged) =>
      typia.functional.validateEqualsParameters(p),
    );
