import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectHttpAtomic = _test_assert(CustomGuardError)(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(
    ObjectHttpAtomic
)((input) => typia.assert<ObjectHttpAtomic>(input, (p) => new CustomGuardError(p)));
