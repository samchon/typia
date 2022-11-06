import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_class_closure = _test_is_clone(
    "class closure",
    ClassGetter.generate,
    TSON.createIsClone<ClassGetter>(),
    ClassGetter.SPOILERS,
);
