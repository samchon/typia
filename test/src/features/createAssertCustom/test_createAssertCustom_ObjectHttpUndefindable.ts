import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectHttpUndefindable = (): void => _test_assert(CustomGuardError)(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)(typia.createAssert<ObjectHttpUndefindable>((p) => new CustomGuardError(p)));
