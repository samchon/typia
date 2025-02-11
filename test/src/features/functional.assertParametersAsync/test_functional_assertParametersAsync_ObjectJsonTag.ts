import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_assertParametersAsync_ObjectJsonTag =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectJsonTag")(
    ObjectJsonTag,
  )((p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
    typia.functional.assertParameters(p),
  );
