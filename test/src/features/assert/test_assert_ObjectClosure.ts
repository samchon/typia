import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectClosure } from "../../structures/ObjectClosure";

import { TypeGuardError } from "typia";

export const test_assert_ObjectClosure = _test_assert(TypeGuardError)(
    "ObjectClosure",
)<ObjectClosure>(
    ObjectClosure
)((input) => typia.assert<ObjectClosure>(input));
