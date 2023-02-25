import typia from "../../../src";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectSimple = _test_assert(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.assert(input),
    ObjectSimple.SPOILERS,
);
