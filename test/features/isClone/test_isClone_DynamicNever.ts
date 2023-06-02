import typia from "../../../src";

import { DynamicNever } from "../../structures/DynamicNever";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_isClone_DynamicNever = _test_isClone(
    "DynamicNever",
    DynamicNever.generate,
    (input) => typia.isClone(input),
    DynamicNever.SPOILERS,
);
