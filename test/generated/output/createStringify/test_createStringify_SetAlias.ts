import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { SetAlias } from "../../../structures/SetAlias";

export const test_createStringify_SetAlias = _test_stringify(
    "SetAlias",
    SetAlias.generate,
    (input: SetAlias): string => {
        const $string = (typia.createStringify as any).string;
        const $number = (typia.createStringify as any).number;
        const $io1 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            "number" === typeof input.age;
        const $so0 = (input: any): any =>
            '{"booleans":{},"numbers":{},"strings":{},"arrays":{},"objects":{}}';
        return $so0(input);
    },
);
