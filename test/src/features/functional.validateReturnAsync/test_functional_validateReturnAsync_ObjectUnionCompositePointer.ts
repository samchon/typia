import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_validateReturnAsync_ObjectUnionCompositePointer =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ObjectUnionCompositePointer")(
      ObjectUnionCompositePointer,
    )(
      (
        p: (
          input: ObjectUnionCompositePointer,
        ) => Promise<ObjectUnionCompositePointer>,
      ) => typia.functional.validateReturn(p),
    );
