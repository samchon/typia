import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_assertCustom_ObjectUnionDouble = (): void =>
  _test_assert(CustomGuardError)("ObjectUnionDouble")<ObjectUnionDouble>(
    ObjectUnionDouble,
  )((input) =>
    typia.assert<ObjectUnionDouble>(input, (p) => new CustomGuardError(p)),
  );
