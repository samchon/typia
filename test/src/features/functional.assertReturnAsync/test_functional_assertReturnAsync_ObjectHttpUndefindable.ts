import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ObjectHttpUndefindable =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectHttpUndefindable")(
    ObjectHttpUndefindable,
  )((p: (input: ObjectHttpUndefindable) => Promise<ObjectHttpUndefindable>) =>
    typia.functional.assertReturn(p),
  );
