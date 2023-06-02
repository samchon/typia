import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_assertParse_ObjectSimple = _test_assertParse(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.assertParse<ObjectSimple>(input),
    ObjectSimple.SPOILERS,
);
