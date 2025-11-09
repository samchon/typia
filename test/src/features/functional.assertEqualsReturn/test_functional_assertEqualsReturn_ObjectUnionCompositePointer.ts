import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_assertEqualsReturn_ObjectUnionCompositePointer =
  (): void =>
    _test_functional_assertEqualsReturn(TypeGuardError)(
      "ObjectUnionCompositePointer",
    )(ObjectUnionCompositePointer)(
      (
        p: (input: ObjectUnionCompositePointer) => ObjectUnionCompositePointer,
      ) => typia.functional.assertEqualsReturn(p),
    );
