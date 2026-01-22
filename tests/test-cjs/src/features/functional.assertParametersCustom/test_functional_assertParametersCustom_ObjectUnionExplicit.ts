import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_assertParametersCustom_ObjectUnionExplicit =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("ObjectUnionExplicit")(
      ObjectUnionExplicit,
    )((p: (input: ObjectUnionExplicit) => ObjectUnionExplicit) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
