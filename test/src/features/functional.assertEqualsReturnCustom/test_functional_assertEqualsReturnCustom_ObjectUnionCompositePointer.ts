import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_assertEqualsReturnCustom_ObjectUnionCompositePointer =
  _test_functional_assertEqualsReturn(CustomGuardError)(
    "ObjectUnionCompositePointer",
  )(ObjectUnionCompositePointer)(
    (p: (input: ObjectUnionCompositePointer) => ObjectUnionCompositePointer) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
