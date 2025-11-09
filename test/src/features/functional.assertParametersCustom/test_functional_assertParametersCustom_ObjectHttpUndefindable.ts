import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_assertParametersCustom_ObjectHttpUndefindable =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)(
      "ObjectHttpUndefindable",
    )(ObjectHttpUndefindable)(
      (p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
