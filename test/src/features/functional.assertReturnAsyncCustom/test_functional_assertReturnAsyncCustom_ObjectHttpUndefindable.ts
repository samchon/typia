import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ObjectHttpUndefindable =
  _test_functional_assertReturnAsync(CustomGuardError)(
    "ObjectHttpUndefindable",
  )(ObjectHttpUndefindable)(
    (p: (input: ObjectHttpUndefindable) => Promise<ObjectHttpUndefindable>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
