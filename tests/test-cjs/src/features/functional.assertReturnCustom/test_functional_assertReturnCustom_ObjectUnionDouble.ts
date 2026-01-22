import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_assertReturnCustom_ObjectUnionDouble = (): void =>
  _test_functional_assertReturn(CustomGuardError)("ObjectUnionDouble")(
    ObjectUnionDouble,
  )((p: (input: ObjectUnionDouble) => ObjectUnionDouble) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
