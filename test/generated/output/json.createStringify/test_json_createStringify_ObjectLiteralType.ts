import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_json_stringify_ObjectLiteralType =
    _test_json_stringify<ObjectLiteralType>(ObjectLiteralType)(
        (input: ObjectLiteralType): string => {
            const $string = (typia.json.createStringify as any).string;
            const $number = (typia.json.createStringify as any).number;
            return `{"id":${$string((input as any).id)},"name":${$string(
                (input as any).name,
            )},"age":${$number((input as any).age)}}`;
        },
    );
