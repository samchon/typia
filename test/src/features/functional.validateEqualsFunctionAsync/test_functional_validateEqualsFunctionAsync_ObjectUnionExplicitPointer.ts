import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_validateEqualsFunctionAsync_ObjectUnionExplicitPointer =
  _test_functional_validateEqualsFunctionAsync("ObjectUnionExplicitPointer")(
    ObjectUnionExplicitPointer,
  )(
    (
      p: (
        input: ObjectUnionExplicitPointer,
      ) => Promise<ObjectUnionExplicitPointer>,
    ) => typia.functional.validateEqualsFunction(p),
  );
