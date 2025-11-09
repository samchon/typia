import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectClosure } from "../../structures/ObjectClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectClosure = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ObjectClosure",
)<ObjectClosure>(
    ObjectClosure
)(typia.createAssertGuardEquals<ObjectClosure>((p) => new CustomGuardError(p)));
