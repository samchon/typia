import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_isReturnAsync_ObjectUnionExplicitPointer =
  (): Promise<void> =>
    _test_functional_isReturnAsync("ObjectUnionExplicitPointer")(
      ObjectUnionExplicitPointer,
    )(
      (
        p: (
          input: ObjectUnionExplicitPointer,
        ) => Promise<ObjectUnionExplicitPointer>,
      ) => typia.functional.isReturn(p),
    );
