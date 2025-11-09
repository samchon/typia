import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_misc_createIsPrune_ObjectUnionImplicit = (): void => _test_misc_isPrune(
    "ObjectUnionImplicit",
)<ObjectUnionImplicit>(
    ObjectUnionImplicit
)(typia.misc.createIsPrune<ObjectUnionImplicit>());
