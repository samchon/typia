import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectHttpTypeTag = _test_assert(CustomGuardError)(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)((input) => typia.assert<ObjectHttpTypeTag>(input, (p) => new CustomGuardError(p)));
