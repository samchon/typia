import typia from "typia";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectSimple = _test_stringify(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.stringify(input),
);
