import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_assertEqualsFunctionCustom_ObjectUnionCompositePointer =
  _test_functional_assertEqualsFunction(CustomGuardError)(
    "ObjectUnionCompositePointer",
  )(ObjectUnionCompositePointer)(
    (p: (input: ObjectUnionCompositePointer) => ObjectUnionCompositePointer) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
