import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_prune_ObjectGenericUnion = (): void => _test_misc_prune(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(
    ObjectGenericUnion
)((input) => typia.misc.prune<ObjectGenericUnion>(input));
