import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_assertReturnAsyncCustom_ObjectHttpUndefindable =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)(
      "ObjectHttpUndefindable",
    )(ObjectHttpUndefindable)(
      (p: (input: ObjectHttpUndefindable) => Promise<ObjectHttpUndefindable>) =>
        typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
