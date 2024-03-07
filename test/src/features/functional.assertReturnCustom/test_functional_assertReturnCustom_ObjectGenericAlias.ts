import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ObjectGenericAlias =
  _test_functional_assertReturn(CustomGuardError)("ObjectGenericAlias")(
    ObjectGenericAlias,
  )((p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
