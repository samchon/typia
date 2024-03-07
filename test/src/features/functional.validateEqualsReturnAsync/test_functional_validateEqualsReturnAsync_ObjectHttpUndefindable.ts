import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_validateEqualsReturnAsync_ObjectHttpUndefindable =
  _test_functional_validateEqualsReturnAsync("ObjectHttpUndefindable")(
    ObjectHttpUndefindable,
  )((p: (input: ObjectHttpUndefindable) => Promise<ObjectHttpUndefindable>) =>
    typia.functional.validateEqualsReturn(p),
  );
