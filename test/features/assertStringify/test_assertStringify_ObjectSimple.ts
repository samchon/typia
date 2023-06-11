import typia from "../../../src";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_assertStringify_ObjectSimple = _test_assertStringify(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.assertStringify(input),
    ObjectSimple.SPOILERS,
);
