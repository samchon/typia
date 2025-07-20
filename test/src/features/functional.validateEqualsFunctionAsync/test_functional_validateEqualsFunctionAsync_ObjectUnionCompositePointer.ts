import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_validateEqualsFunctionAsync_ObjectUnionCompositePointer =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ObjectUnionCompositePointer")(
      ObjectUnionCompositePointer,
    )(
      (
        p: (
          input: ObjectUnionCompositePointer,
        ) => Promise<ObjectUnionCompositePointer>,
      ) => typia.functional.validateEqualsFunction(p),
    );
