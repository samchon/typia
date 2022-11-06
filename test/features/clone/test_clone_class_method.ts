import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_clone } from "./_test_clone";

export const test_clone_class_method = _test_clone(
    "class method",
    ClassMethod.generate,
    (input) => TSON.clone(input),
);
