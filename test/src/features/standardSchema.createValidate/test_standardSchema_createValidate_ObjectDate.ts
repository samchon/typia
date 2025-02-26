import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_standardSchema_createValidate_ObjectDate = _test_standardSchema_validate(
    "ObjectDate",
)<ObjectDate>(
    ObjectDate
)(typia.createValidate<ObjectDate>());
