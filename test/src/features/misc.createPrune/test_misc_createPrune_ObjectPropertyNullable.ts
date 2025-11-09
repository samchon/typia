import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_createPrune_ObjectPropertyNullable = (): void => _test_misc_prune(
    "ObjectPropertyNullable",
)<ObjectPropertyNullable>(
    ObjectPropertyNullable
)(typia.misc.createPrune<ObjectPropertyNullable>());
