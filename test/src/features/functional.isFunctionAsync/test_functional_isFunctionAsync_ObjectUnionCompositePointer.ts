import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_isFunctionAsync_ObjectUnionCompositePointer =
  _test_functional_isFunctionAsync("ObjectUnionCompositePointer")(
    ObjectUnionCompositePointer,
  )(
    (
      p: (
        input: ObjectUnionCompositePointer,
      ) => Promise<ObjectUnionCompositePointer>,
    ) => typia.functional.isFunction(p),
  );
