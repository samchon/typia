import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_assertFunctionCustom_ObjectUnionExplicitPointer =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)(
      "ObjectUnionExplicitPointer",
    )(ObjectUnionExplicitPointer)(
      (p: (input: ObjectUnionExplicitPointer) => ObjectUnionExplicitPointer) =>
        typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
