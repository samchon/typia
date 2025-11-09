import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_assertParametersAsyncCustom_ObjectHttpAtomic =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "ObjectHttpAtomic",
    )(ObjectHttpAtomic)(
      (p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
