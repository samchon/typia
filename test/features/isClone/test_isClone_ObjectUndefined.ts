import typia from "../../../src";

import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectUndefined = _test_isClone(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.isClone(input),
    ObjectUndefined.SPOILERS,
);
