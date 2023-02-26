import typia from "../../../../src";
import { ClassMethod } from "../../../structures/ClassMethod";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ClassMethod = _test_is(
    "ClassMethod",
    ClassMethod.generate,
    (input: any): input is ClassMethod.Animal => {
        return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof input.name &&
            "number" === typeof input.age &&
            Number.isFinite(input.age)
        );
    },
    ClassMethod.SPOILERS,
);
