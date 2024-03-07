import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_validateReturnAsync_ObjectUnionExplicitPointer =
  _test_functional_validateReturnAsync("ObjectUnionExplicitPointer")(
    ObjectUnionExplicitPointer,
  )(
    (
      p: (
        input: ObjectUnionExplicitPointer,
      ) => Promise<ObjectUnionExplicitPointer>,
    ) => typia.functional.validateReturn(p),
  );
