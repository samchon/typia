import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_misc_createPrune_ObjectHttpTypeTag = (): void => _test_misc_prune(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)(typia.misc.createPrune<ObjectHttpTypeTag>());
