import typia from "typia";

import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectTuple = _test_assert(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.assert(input),
    ObjectTuple.SPOILERS,
);
