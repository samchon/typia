import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_class_getter = _test_clone(
    "class getter",
    ClassGetter.generate,
    TSON.createClone<ClassGetter>(),
);
