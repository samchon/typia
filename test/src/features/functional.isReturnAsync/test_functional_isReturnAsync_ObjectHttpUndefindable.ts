import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_isReturnAsync_ObjectHttpUndefindable =
  _test_functional_isReturnAsync("ObjectHttpUndefindable")(
    ObjectHttpUndefindable,
  )((p: (input: ObjectHttpUndefindable) => Promise<ObjectHttpUndefindable>) =>
    typia.functional.isReturn(p),
  );
