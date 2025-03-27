import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_standardSchema_createValidate_ObjectUndefined = _test_standardSchema_validate(
    "ObjectUndefined",
)<ObjectUndefined>(
    ObjectUndefined
)(typia.createValidate<ObjectUndefined>());
