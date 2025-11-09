import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_assertParametersAsyncCustom_ObjectJsonTag =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("ObjectJsonTag")(
      ObjectJsonTag,
    )((p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
