import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectSimple = _test_assertParse(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.assertParse<ObjectSimple>(input),
    ObjectSimple.SPOILERS,
);