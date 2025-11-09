import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_isParametersAsync_ObjectUnionExplicitPointer =
  (): Promise<void> =>
    _test_functional_isParametersAsync("ObjectUnionExplicitPointer")(
      ObjectUnionExplicitPointer,
    )(
      (
        p: (
          input: ObjectUnionExplicitPointer,
        ) => Promise<ObjectUnionExplicitPointer>,
      ) => typia.functional.isParameters(p),
    );
