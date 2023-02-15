import typia from "typia";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectGenericArray = _test_isPrune(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.isPrune(input),
    ObjectGenericArray.SPOILERS,
);
