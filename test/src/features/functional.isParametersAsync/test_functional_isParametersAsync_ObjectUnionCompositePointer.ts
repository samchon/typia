import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_isParametersAsync_ObjectUnionCompositePointer =
  (): Promise<void> =>
    _test_functional_isParametersAsync("ObjectUnionCompositePointer")(
      ObjectUnionCompositePointer,
    )(
      (
        p: (
          input: ObjectUnionCompositePointer,
        ) => Promise<ObjectUnionCompositePointer>,
      ) => typia.functional.isParameters(p),
    );
