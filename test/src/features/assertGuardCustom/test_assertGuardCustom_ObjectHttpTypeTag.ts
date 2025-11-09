import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectHttpTypeTag = (): void => _test_assertGuard(CustomGuardError)(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)((input) => typia.assertGuard<ObjectHttpTypeTag>(input, (p) => new CustomGuardError(p)));
