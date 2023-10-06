import typia from "../../../src";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_misc_prune_ObjectRequired = _test_misc_prune(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)((input) => typia.misc.prune<ObjectRequired>(input));
