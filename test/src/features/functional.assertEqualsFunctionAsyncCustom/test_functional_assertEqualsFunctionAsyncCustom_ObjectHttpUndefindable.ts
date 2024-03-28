import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectHttpUndefindable =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectHttpUndefindable",
  )(ObjectHttpUndefindable)(
    (p: (input: ObjectHttpUndefindable) => Promise<ObjectHttpUndefindable>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
