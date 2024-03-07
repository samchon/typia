import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ObjectHttpTypeTag =
  _test_functional_assertParametersAsync(CustomGuardError)("ObjectHttpTypeTag")(
    ObjectHttpTypeTag,
  )((p: (input: ObjectHttpTypeTag) => Promise<ObjectHttpTypeTag>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
