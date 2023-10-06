import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_validate_ObjectPartialAndRequired = _test_validate(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(
    ObjectPartialAndRequired
)((input) => typia.validate<ObjectPartialAndRequired>(input));
