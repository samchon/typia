import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectClosure } from "../../structures/ObjectClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectClosure = (): void => _test_assertEquals(CustomGuardError)(
    "ObjectClosure",
)<ObjectClosure>(
    ObjectClosure
)(typia.createAssertEquals<ObjectClosure>((p) => new CustomGuardError(p)));
