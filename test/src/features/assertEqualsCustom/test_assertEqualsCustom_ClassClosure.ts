import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassClosure } from "../../structures/ClassClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ClassClosure = _test_assertEquals(CustomGuardError)(
    "ClassClosure",
)<ClassClosure>(
    ClassClosure
)((input) => typia.assertEquals<ClassClosure>(input, (p) => new CustomGuardError(p)));
