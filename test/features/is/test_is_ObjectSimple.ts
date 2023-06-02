import typia from "../../../src";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_is } from "../../internal/_test_is";

export const test_is_ObjectSimple = _test_is(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.is(input),
    ObjectSimple.SPOILERS,
);
