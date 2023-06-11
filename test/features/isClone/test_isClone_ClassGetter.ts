import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_isClone_ClassGetter = _test_isClone(
    "ClassGetter",
    ClassGetter.generate,
    (input) => typia.isClone(input),
    ClassGetter.SPOILERS,
);
