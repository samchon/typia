import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_assertEqualsReturnCustom_ObjectHttpUndefindable =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)(
      "ObjectHttpUndefindable",
    )(ObjectHttpUndefindable)(
      (p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
