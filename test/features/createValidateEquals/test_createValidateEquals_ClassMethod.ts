import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ClassMethod = _test_validateEquals(
    "ClassMethod",
    ClassMethod.generate,
    TSON.createValidateEquals<ClassMethod>(),
);
