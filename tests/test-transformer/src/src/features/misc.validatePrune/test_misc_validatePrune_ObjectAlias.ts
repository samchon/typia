import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_validatePrune_ObjectAlias = (): void => _test_misc_validatePrune(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)((input) => typia.misc.validatePrune<ObjectAlias>(input));
