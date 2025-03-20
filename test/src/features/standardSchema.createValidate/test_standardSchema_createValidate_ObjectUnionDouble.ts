import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_standardSchema_createValidate_ObjectUnionDouble = _test_standardSchema_validate(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)(typia.createValidate<ObjectUnionDouble>());
