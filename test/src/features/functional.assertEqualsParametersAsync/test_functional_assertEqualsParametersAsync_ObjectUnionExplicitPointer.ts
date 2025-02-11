import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_assertEqualsParametersAsync_ObjectUnionExplicitPointer =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ObjectUnionExplicitPointer",
  )(ObjectUnionExplicitPointer)(
    (
      p: (
        input: ObjectUnionExplicitPointer,
      ) => Promise<ObjectUnionExplicitPointer>,
    ) => typia.functional.assertEqualsParameters(p),
  );
