import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_isClone_ObjectSimple = _test_isClone(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.isClone<ObjectSimple>(input),
    ObjectSimple.SPOILERS,
);
