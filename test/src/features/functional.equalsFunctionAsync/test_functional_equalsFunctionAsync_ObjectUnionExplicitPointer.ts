import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_equalsFunctionAsync_ObjectUnionExplicitPointer =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("ObjectUnionExplicitPointer")(
      ObjectUnionExplicitPointer,
    )(
      (
        p: (
          input: ObjectUnionExplicitPointer,
        ) => Promise<ObjectUnionExplicitPointer>,
      ) => typia.functional.equalsFunction(p),
    );
