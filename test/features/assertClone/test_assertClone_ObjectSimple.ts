import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_assertClone_ObjectSimple = _test_assertClone(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.assertClone<ObjectSimple>(input),
    ObjectSimple.SPOILERS,
);
