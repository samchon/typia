import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_assertEqualsFunction_ObjectUnionCompositePointer =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)(
      "ObjectUnionCompositePointer",
    )(ObjectUnionCompositePointer)(
      (
        p: (input: ObjectUnionCompositePointer) => ObjectUnionCompositePointer,
      ) => typia.functional.assertEqualsFunction(p),
    );
