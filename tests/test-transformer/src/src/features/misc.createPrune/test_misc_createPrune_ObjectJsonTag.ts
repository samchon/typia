import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_misc_createPrune_ObjectJsonTag = (): void => _test_misc_prune(
    "ObjectJsonTag",
)<ObjectJsonTag>(
    ObjectJsonTag
)(typia.misc.createPrune<ObjectJsonTag>());
