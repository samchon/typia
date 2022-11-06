import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_class_getter = _test_is_clone(
    "class getter",
    ClassGetter.generate,
    (input) => TSON.isClone(input),
    ClassGetter.SPOILERS,
);
