import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_misc_prune_ObjectHttpConstant = (): void => _test_misc_prune(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)((input) => typia.misc.prune<ObjectHttpConstant>(input));
