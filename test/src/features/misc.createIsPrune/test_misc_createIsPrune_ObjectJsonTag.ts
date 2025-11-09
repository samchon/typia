import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_misc_createIsPrune_ObjectJsonTag = (): void => _test_misc_isPrune(
    "ObjectJsonTag",
)<ObjectJsonTag>(
    ObjectJsonTag
)(typia.misc.createIsPrune<ObjectJsonTag>());
