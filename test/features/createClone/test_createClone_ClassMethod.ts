import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createClone_ClassMethod = _test_clone(
    "ClassMethod",
    ClassMethod.generate,
    typia.createClone<ClassMethod>(),
);
