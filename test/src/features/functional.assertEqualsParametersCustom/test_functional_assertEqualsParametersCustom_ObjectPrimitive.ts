import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_assertEqualsParametersCustom_ObjectPrimitive =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "ObjectPrimitive",
    )(ObjectPrimitive)((p: (input: ObjectPrimitive) => ObjectPrimitive) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
