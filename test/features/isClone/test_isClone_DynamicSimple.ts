import typia from "typia";

import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_DynamicSimple = _test_isClone(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.isClone(input),
    DynamicSimple.SPOILERS,
);
