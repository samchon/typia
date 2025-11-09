import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_misc_validateClone_ObjectPartialAndRequired = (): void => _test_misc_validateClone(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(
    ObjectPartialAndRequired
)((input) => typia.misc.validateClone<ObjectPartialAndRequired>(input));
