import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ObjectUnionCompositePointer =
  _test_functional_assertEqualsReturn(TypeGuardError)(
    "ObjectUnionCompositePointer",
  )(ObjectUnionCompositePointer)(
    (p: (input: ObjectUnionCompositePointer) => ObjectUnionCompositePointer) =>
      typia.functional.assertEqualsReturn(p),
  );
