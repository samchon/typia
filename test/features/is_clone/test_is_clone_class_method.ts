import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_class_method = _test_is_clone(
    "class method",
    ClassMethod.generate,
    (input) => TSON.isClone(input),
    ClassMethod.SPOILERS,
);
