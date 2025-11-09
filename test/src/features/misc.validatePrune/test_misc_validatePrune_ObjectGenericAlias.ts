import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_validatePrune_ObjectGenericAlias = (): void => _test_misc_validatePrune(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(
    ObjectGenericAlias
)((input) => typia.misc.validatePrune<ObjectGenericAlias>(input));
