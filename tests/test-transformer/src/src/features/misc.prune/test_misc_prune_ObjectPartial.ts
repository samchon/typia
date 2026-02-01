import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_misc_prune_ObjectPartial = (): void => _test_misc_prune(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)((input) => typia.misc.prune<ObjectPartial>(input));
