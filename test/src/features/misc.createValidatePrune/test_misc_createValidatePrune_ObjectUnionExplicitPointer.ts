import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_misc_createValidatePrune_ObjectUnionExplicitPointer = (): void => _test_misc_validatePrune(
    "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(
    ObjectUnionExplicitPointer
)(typia.misc.createValidatePrune<ObjectUnionExplicitPointer>());
