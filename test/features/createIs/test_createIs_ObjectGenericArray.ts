import typia from "typia";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectGenericArray = _test_is(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createIs<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
