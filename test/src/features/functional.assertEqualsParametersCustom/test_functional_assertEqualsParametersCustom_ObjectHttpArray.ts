import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_assertEqualsParametersCustom_ObjectHttpArray =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "ObjectHttpArray",
    )(ObjectHttpArray)((p: (input: ObjectHttpArray) => ObjectHttpArray) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
