import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ObjectInternal = _test_assertEquals(CustomGuardError)(
    "ObjectInternal",
)<ObjectInternal>(
    ObjectInternal
)((input) => typia.assertEquals<ObjectInternal>(input, (p) => new CustomGuardError(p)));
