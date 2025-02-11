import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createValidate_ObjectGenericArray = _test_validate(
    "ObjectGenericArray",
)<ObjectGenericArray>(
    ObjectGenericArray
)(typia.createValidate<ObjectGenericArray>());
