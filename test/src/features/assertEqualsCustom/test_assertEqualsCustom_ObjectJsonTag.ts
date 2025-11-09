import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ObjectJsonTag = (): void => _test_assertEquals(CustomGuardError)(
    "ObjectJsonTag",
)<ObjectJsonTag>(
    ObjectJsonTag
)((input) => typia.assertEquals<ObjectJsonTag>(input, (p) => new CustomGuardError(p)));
