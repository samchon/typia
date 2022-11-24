import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_class_method = _test_clone(
    "class method",
    ClassMethod.generate,
    TSON.createClone<ClassMethod>(),
);
