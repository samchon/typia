import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ClassMethod = _test_assertEquals(
    "ClassMethod",
    ClassMethod.generate,
    (input) => TSON.assertEquals(input),
);
