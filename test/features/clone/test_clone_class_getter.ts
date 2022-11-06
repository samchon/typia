import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_clone } from "./_test_clone";

export const test_clone_class_getter = _test_clone(
    "class getter",
    ClassGetter.generate,
    (input) => TSON.clone(input),
);
