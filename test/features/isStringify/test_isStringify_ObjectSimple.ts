import typia from "typia";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectSimple = _test_isStringify(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.isStringify(input),
    ObjectSimple.SPOILERS,
);
