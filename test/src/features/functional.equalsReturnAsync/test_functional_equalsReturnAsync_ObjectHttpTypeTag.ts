import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_equalsReturnAsync_ObjectHttpTypeTag =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ObjectHttpTypeTag")(ObjectHttpTypeTag)(
      (p: (input: ObjectHttpTypeTag) => Promise<ObjectHttpTypeTag>) =>
        typia.functional.equalsReturn(p),
    );
