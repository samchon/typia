import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_createPrune_ObjectUnionDouble = (): void => _test_misc_prune(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)(typia.misc.createPrune<ObjectUnionDouble>());
