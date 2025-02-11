import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectHttpArray = _test_assertEquals(CustomGuardError)(
    "ObjectHttpArray",
)<ObjectHttpArray>(
    ObjectHttpArray
)(typia.createAssertEquals<ObjectHttpArray>((p) => new CustomGuardError(p)));
