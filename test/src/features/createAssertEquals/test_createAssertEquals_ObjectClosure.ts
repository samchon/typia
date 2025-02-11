import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectClosure } from "../../structures/ObjectClosure";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ObjectClosure = _test_assertEquals(TypeGuardError)(
    "ObjectClosure",
)<ObjectClosure>(
    ObjectClosure
)(typia.createAssertEquals<ObjectClosure>());
