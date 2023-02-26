import typia from "../../../../src";
import { ClassMethod } from "../../../structures/ClassMethod";
import { _test_is } from "../internal/_test_is";

export const test_is_ClassMethod = _test_is(
    "ClassMethod",
    ClassMethod.generate,
    (input) =>
        ((input: any): input is ClassMethod.Animal => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age)
            );
        })(input),
    ClassMethod.SPOILERS,
);
