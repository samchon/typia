import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ObjectUnionExplicitPointer =
  _test_functional_assertEqualsReturn(CustomGuardError)(
    "ObjectUnionExplicitPointer",
  )(ObjectUnionExplicitPointer)(
    (p: (input: ObjectUnionExplicitPointer) => ObjectUnionExplicitPointer) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
