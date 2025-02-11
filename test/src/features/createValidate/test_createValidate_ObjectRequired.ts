import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_createValidate_ObjectRequired = _test_validate(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)(typia.createValidate<ObjectRequired>());
