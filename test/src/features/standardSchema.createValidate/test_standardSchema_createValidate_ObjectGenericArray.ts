import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_standardSchema_createValidate_ObjectGenericArray = _test_standardSchema_validate(
    "ObjectGenericArray",
)<ObjectGenericArray>(
    ObjectGenericArray
)(typia.createValidate<ObjectGenericArray>());
