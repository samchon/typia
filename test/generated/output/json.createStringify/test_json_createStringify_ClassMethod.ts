import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_json_stringify_ClassMethod =
    _test_json_stringify<ClassMethod>(ClassMethod)(
        (input: ClassMethod): string => {
            const $string = (typia.json.createStringify as any).string;
            const $number = (typia.json.createStringify as any).number;
            return `{"name":${$string((input as any).name)},"age":${$number(
                (input as any).age,
            )}}`;
        },
    );
