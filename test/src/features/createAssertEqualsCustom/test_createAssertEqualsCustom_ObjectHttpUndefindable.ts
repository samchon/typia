import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectHttpUndefindable = (): void => _test_assertEquals(CustomGuardError)(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)(typia.createAssertEquals<ObjectHttpUndefindable>((p) => new CustomGuardError(p)));
