import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { SetAlias } from "../../../structures/SetAlias";

export const test_json_stringify_SetAlias = _test_json_stringify(
    "SetAlias",
)<SetAlias>(SetAlias)((input: SetAlias): string => {
    const $io1 = (input: any): boolean =>
        "string" === typeof input.id &&
        "string" === typeof input.name &&
        "number" === typeof input.age;
    const $string = (typia.json.createStringify as any).string;
    const $number = (typia.json.createStringify as any).number;
    const $so0 = (input: any): any =>
        '{"booleans":{},"numbers":{},"strings":{},"arrays":{},"objects":{}}';
    return $so0(input);
});
