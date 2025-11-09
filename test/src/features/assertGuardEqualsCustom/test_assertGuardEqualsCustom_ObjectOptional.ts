import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ObjectOptional = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)((input) => typia.assertGuardEquals<ObjectOptional>(input, (p) => new CustomGuardError(p)));
