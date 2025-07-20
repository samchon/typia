import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_assertFunctionCustom_ObjectUnionCompositePointer =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)(
      "ObjectUnionCompositePointer",
    )(ObjectUnionCompositePointer)(
      (
        p: (input: ObjectUnionCompositePointer) => ObjectUnionCompositePointer,
      ) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
