import typia from "../../../src";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectSimple = _test_isPrune(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.isPrune(input),
    ObjectSimple.SPOILERS,
);
