import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_assertParametersCustom_ObjectPrimitive =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("ObjectPrimitive")(
      ObjectPrimitive,
    )((p: (input: ObjectPrimitive) => ObjectPrimitive) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
