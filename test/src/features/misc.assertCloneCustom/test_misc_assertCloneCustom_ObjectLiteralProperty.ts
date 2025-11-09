import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_ObjectLiteralProperty = (): void => _test_misc_assertClone(CustomGuardError)(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(
    ObjectLiteralProperty
)((input) => typia.misc.assertClone<ObjectLiteralProperty>(input, (p) => new CustomGuardError(p)));
