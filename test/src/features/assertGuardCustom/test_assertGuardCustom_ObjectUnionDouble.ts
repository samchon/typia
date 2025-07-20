import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_assertGuardCustom_ObjectUnionDouble = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectUnionDouble")<ObjectUnionDouble>(
    ObjectUnionDouble,
  )((input) =>
    typia.assertGuard<ObjectUnionDouble>(input, (p) => new CustomGuardError(p)),
  );
