import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_prune_ObjectGenericAlias = (): void => _test_misc_prune(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(
    ObjectGenericAlias
)((input) => typia.misc.prune<ObjectGenericAlias>(input));
