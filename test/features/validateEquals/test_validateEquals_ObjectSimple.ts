import typia from "typia";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ObjectSimple = _test_validateEquals(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.validateEquals(input),
);
