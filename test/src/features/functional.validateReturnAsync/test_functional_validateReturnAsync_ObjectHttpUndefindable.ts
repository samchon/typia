import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_validateReturnAsync_ObjectHttpUndefindable =
  _test_functional_validateReturnAsync("ObjectHttpUndefindable")(
    ObjectHttpUndefindable,
  )((p: (input: ObjectHttpUndefindable) => Promise<ObjectHttpUndefindable>) =>
    typia.functional.validateReturn(p),
  );
