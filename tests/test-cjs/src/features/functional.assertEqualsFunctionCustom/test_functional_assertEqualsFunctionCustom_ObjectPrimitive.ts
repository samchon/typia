import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_assertEqualsFunctionCustom_ObjectPrimitive =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)("ObjectPrimitive")(
      ObjectPrimitive,
    )((p: (input: ObjectPrimitive) => ObjectPrimitive) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
