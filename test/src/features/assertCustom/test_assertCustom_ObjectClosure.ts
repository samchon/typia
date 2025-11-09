import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectClosure } from "../../structures/ObjectClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectClosure = (): void => _test_assert(CustomGuardError)(
    "ObjectClosure",
)<ObjectClosure>(
    ObjectClosure
)((input) => typia.assert<ObjectClosure>(input, (p) => new CustomGuardError(p)));
