import typia from "../../../src";

import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_ObjectNullable = _test_assert(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.assert(input),
    ObjectNullable.SPOILERS,
);
