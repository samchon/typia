import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ObjectHttpTypeTag = (): void => _test_assertEquals(CustomGuardError)(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)((input) => typia.assertEquals<ObjectHttpTypeTag>(input, (p) => new CustomGuardError(p)));
