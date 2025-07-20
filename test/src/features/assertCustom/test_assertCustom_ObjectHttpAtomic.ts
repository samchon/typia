import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_assertCustom_ObjectHttpAtomic = (): void =>
  _test_assert(CustomGuardError)("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )((input) =>
    typia.assert<ObjectHttpAtomic>(input, (p) => new CustomGuardError(p)),
  );
