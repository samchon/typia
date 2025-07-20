import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_equalsReturnAsync_ObjectUnionNonPredictable =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ObjectUnionNonPredictable")(
      ObjectUnionNonPredictable,
    )(
      (
        p: (
          input: ObjectUnionNonPredictable,
        ) => Promise<ObjectUnionNonPredictable>,
      ) => typia.functional.equalsReturn(p),
    );
