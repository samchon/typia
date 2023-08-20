import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_isStringify_ObjectSimple = _test_isStringify(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.isStringify<ObjectSimple>(input),
    ObjectSimple.SPOILERS,
);
