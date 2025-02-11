import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectOptional = _test_assertEquals(CustomGuardError)(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)(typia.createAssertEquals<ObjectOptional>((p) => new CustomGuardError(p)));
