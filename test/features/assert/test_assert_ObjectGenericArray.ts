import typia from "../../../src";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_ObjectGenericArray = _test_assert(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.assert(input),
    ObjectGenericArray.SPOILERS,
);
