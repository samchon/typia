import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_validateFunctionAsync_ObjectUnionCompositePointer =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ObjectUnionCompositePointer")(
      ObjectUnionCompositePointer,
    )(
      (
        p: (
          input: ObjectUnionCompositePointer,
        ) => Promise<ObjectUnionCompositePointer>,
      ) => typia.functional.validateFunction(p),
    );
