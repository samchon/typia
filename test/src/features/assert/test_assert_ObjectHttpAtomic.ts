import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { TypeGuardError } from "typia";

export const test_assert_ObjectHttpAtomic = _test_assert(TypeGuardError)(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
  typia.assert<ObjectHttpAtomic>(input),
);
