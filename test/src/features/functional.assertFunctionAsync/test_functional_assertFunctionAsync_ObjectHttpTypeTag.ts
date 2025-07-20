import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_assertFunctionAsync_ObjectHttpTypeTag =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ObjectHttpTypeTag")(
      ObjectHttpTypeTag,
    )((p: (input: ObjectHttpTypeTag) => Promise<ObjectHttpTypeTag>) =>
      typia.functional.assertFunction(p),
    );
