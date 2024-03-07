import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ObjectAlias =
  _test_functional_assertParameters(CustomGuardError)("ObjectAlias")(
    ObjectAlias,
  )((p: (input: ObjectAlias) => ObjectAlias) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
