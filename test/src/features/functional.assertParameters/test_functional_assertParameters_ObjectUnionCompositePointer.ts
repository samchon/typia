import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_assertParameters_ObjectUnionCompositePointer =
  (): void =>
    _test_functional_assertParameters(TypeGuardError)(
      "ObjectUnionCompositePointer",
    )(ObjectUnionCompositePointer)(
      (
        p: (input: ObjectUnionCompositePointer) => ObjectUnionCompositePointer,
      ) => typia.functional.assertParameters(p),
    );
