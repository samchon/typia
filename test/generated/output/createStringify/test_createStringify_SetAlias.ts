import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { SetAlias } from "../../../structures/SetAlias";

export const test_createStringify_SetAlias = _test_stringify(
    "SetAlias",
    SetAlias.generate,
    (input: SetAlias): string => {
        const $io1: any = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            "number" === typeof input.age;
        const $string: any = (typia.createStringify as any).string;
        const $number: any = (typia.createStringify as any).number;
        const $so0: any = (input: any): any =>
            '{"booleans":{},"numbers":{},"strings":{},"arrays":{},"objects":{}}';
        return $so0(input);
    },
);
