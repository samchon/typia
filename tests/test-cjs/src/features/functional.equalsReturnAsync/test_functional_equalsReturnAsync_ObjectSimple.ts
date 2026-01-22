import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_equalsReturnAsync_ObjectSimple =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ObjectSimple")(ObjectSimple)(
      (p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
        typia.functional.equalsReturn(p),
    );
