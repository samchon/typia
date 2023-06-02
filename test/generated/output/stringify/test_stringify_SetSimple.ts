import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { SetSimple } from "../../../structures/SetSimple";

export const test_stringify_SetSimple = _test_stringify(
    "SetSimple",
    SetSimple.generate,
    (input) =>
        ((input: SetSimple): string => {
            const $io1: any = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "number" === typeof input.age;
            const $string: any = (typia.stringify as any).string;
            const $number: any = (typia.stringify as any).number;
            const $so0: any = (input: any): any =>
                '{"booleans":{},"numbers":{},"strings":{},"arrays":{},"objects":{}}';
            return $so0(input);
        })(input),
);
