import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectHttpAtomic = (): void => _test_assert(CustomGuardError)(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(
    ObjectHttpAtomic
)(typia.createAssert<ObjectHttpAtomic>((p) => new CustomGuardError(p)));
