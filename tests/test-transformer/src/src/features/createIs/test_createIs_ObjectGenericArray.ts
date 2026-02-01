import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createIs_ObjectGenericArray = (): void => _test_is(
    "ObjectGenericArray",
)<ObjectGenericArray>(
    ObjectGenericArray
)(typia.createIs<ObjectGenericArray>());
