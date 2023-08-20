import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_isClone_ObjectUndefined = _test_isClone(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.isClone<ObjectUndefined>(input),
    ObjectUndefined.SPOILERS,
);
