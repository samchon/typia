import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_isClone_ObjectGenericAlias = (): void => _test_misc_isClone(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(
    ObjectGenericAlias
)((input) => typia.misc.isClone<ObjectGenericAlias>(input));
