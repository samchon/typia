import typia from "../../../src";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_misc_prune_ObjectHttpConstant = _test_misc_prune(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)((input) => typia.misc.prune<ObjectHttpConstant>(input));
