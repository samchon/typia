import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_validateEquals_ObjectAlias = (): void => _test_validateEquals(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)((input) => typia.validateEquals<ObjectAlias>(input));
