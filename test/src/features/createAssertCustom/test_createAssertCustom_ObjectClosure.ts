import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectClosure } from "../../structures/ObjectClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectClosure = _test_assert(CustomGuardError)(
    "ObjectClosure",
)<ObjectClosure>(
    ObjectClosure
)(typia.createAssert<ObjectClosure>((p) => new CustomGuardError(p)));
