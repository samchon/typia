import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_equalsReturnAsync_ObjectPartialAndRequired =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ObjectPartialAndRequired")(
      ObjectPartialAndRequired,
    )(
      (
        p: (
          input: ObjectPartialAndRequired,
        ) => Promise<ObjectPartialAndRequired>,
      ) => typia.functional.equalsReturn(p),
    );
