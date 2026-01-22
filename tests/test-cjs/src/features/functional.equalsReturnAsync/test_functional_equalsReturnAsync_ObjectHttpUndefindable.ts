import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_equalsReturnAsync_ObjectHttpUndefindable =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ObjectHttpUndefindable")(
      ObjectHttpUndefindable,
    )((p: (input: ObjectHttpUndefindable) => Promise<ObjectHttpUndefindable>) =>
      typia.functional.equalsReturn(p),
    );
