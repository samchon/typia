import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_standardSchema_createValidate_ObjectPartialAndRequired = _test_standardSchema_validate(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(
    ObjectPartialAndRequired
)(typia.createValidate<ObjectPartialAndRequired>());
