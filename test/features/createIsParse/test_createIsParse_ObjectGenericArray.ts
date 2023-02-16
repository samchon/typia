import typia from "typia";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectGenericArray = _test_isParse(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createIsParse<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
