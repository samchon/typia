import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_stringify } from "./internal/_test_stringify";

export const test_stringify_class_method = _test_stringify(
    "class method",
    ClassMethod.generate(),
    (input) => TSON.stringify(input),
);
