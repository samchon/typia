import typia from "../../../src";

import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectUndefined = _test_assertClone(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.assertClone(input),
    ObjectUndefined.SPOILERS,
);
