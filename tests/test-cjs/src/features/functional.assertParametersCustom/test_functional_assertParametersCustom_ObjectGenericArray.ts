import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_assertParametersCustom_ObjectGenericArray =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("ObjectGenericArray")(
      ObjectGenericArray,
    )((p: (input: ObjectGenericArray) => ObjectGenericArray) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
