import typia from "../../../src";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_misc_clone_ObjectPartialAndRequired = _test_misc_clone(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(
    ObjectPartialAndRequired
)((input) => typia.misc.clone<ObjectPartialAndRequired>(input));
