import typia from "typia";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectGenericArray = _test_assertClone(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.assertClone(input),
    ObjectGenericArray.SPOILERS,
);
