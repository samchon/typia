import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_stringify_ClassMethod = _test_stringify(
    "ClassMethod",
    ClassMethod.generate,
    (input) => typia.stringify<ClassMethod>(input),
);
