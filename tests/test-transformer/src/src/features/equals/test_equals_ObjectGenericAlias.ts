import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_equals_ObjectGenericAlias = (): void => _test_equals(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(
    ObjectGenericAlias
)((input) => typia.equals<ObjectGenericAlias>(input));
