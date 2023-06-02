import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_createStringify_ClassMethod = _test_stringify(
    "ClassMethod",
    ClassMethod.generate,
    (input: ClassMethod): string => {
        const $string: any = (typia.createStringify as any).string;
        const $number: any = (typia.createStringify as any).number;
        return `{"name":${$string(input.name)},"age":${$number(input.age)}}`;
    },
);
