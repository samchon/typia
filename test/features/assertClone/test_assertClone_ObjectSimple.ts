import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectSimple = _test_assertClone(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.assertClone(input),
    ObjectSimple.SPOILERS,
);