import typia from "../../../src";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_misc_createPrune_ObjectRequired = _test_misc_prune(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)(typia.misc.createPrune<ObjectRequired>());
