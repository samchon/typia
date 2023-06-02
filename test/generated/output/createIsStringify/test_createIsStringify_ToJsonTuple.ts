import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_createIsStringify_ToJsonTuple = _test_isStringify(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input: ToJsonTuple): string | null => {
        const is: any = (input: any): input is ToJsonTuple => {
            const $io0: any = (input: any): boolean => true;
            const $io1: any = (input: any): boolean => true;
            const $io2: any = (input: any): boolean => true;
            const $io3: any = (input: any): boolean => true;
            return (
                Array.isArray(input) &&
                input.length === 4 &&
                "object" === typeof input[0] &&
                null !== input[0] &&
                $io0(input[0]) &&
                "object" === typeof input[1] &&
                null !== input[1] &&
                $io1(input[1]) &&
                "object" === typeof input[2] &&
                null !== input[2] &&
                $io2(input[2]) &&
                "object" === typeof input[3] &&
                null !== input[3] &&
                $io3(input[3])
            );
        };
        const stringify: any = (input: ToJsonTuple): string => {
            const $string: any = (typia.createIsStringify as any).string;
            const $number: any = (typia.createIsStringify as any).number;
            const $so0: any = (input: any): any =>
                `{"code":${$string(input.code)},"name":${$string(input.name)}}`;
            return `[${$string(input[0].toJSON())},${$number(
                input[1].toJSON(),
            )},${input[2].toJSON()},${$so0(input[3].toJSON())}]`;
        };
        return is(input) ? stringify(input) : null;
    },
);
