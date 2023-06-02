import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_stringify_ClassMethod = _test_stringify(
    "ClassMethod",
    ClassMethod.generate,
    (input) =>
        ((input: ClassMethod.Animal): string => {
            const $string: any = (typia.stringify as any).string;
            const $number: any = (typia.stringify as any).number;
            return `{"name":${$string(input.name)},"age":${$number(
                input.age,
            )}}`;
        })(input),
);
