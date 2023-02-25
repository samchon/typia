import typia from "../../../src";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectGenericArray = _test_isParse(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.isParse<ObjectGenericArray>(input),
    ObjectGenericArray.SPOILERS,
);
