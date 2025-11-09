import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ObjectLiteralProperty = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(
    ObjectLiteralProperty
)((input) => typia.misc.assertPrune<ObjectLiteralProperty>(input));
