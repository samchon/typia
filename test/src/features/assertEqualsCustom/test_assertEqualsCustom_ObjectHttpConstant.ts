import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ObjectHttpConstant = (): void => _test_assertEquals(CustomGuardError)(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)((input) => typia.assertEquals<ObjectHttpConstant>(input, (p) => new CustomGuardError(p)));
