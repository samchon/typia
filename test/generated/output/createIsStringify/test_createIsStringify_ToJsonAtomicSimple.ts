import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_createIsStringify_ToJsonAtomicSimple = _test_isStringify(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input: ToJsonAtomicSimple): string | null => {
        const is: any = (input: any): input is ToJsonAtomicSimple => {
            const $io0: any = (input: any): boolean => true;
            const $io1: any = (input: any): boolean => true;
            const $io2: any = (input: any): boolean => true;
            return (
                Array.isArray(input) &&
                input.length === 3 &&
                "object" === typeof input[0] &&
                null !== input[0] &&
                $io0(input[0]) &&
                "object" === typeof input[1] &&
                null !== input[1] &&
                $io1(input[1]) &&
                "object" === typeof input[2] &&
                null !== input[2] &&
                $io2(input[2])
            );
        };
        const stringify: any = (input: ToJsonAtomicSimple): string => {
            const $number: any = (typia.createIsStringify as any).number;
            const $string: any = (typia.createIsStringify as any).string;
            return `[${input[0].toJSON()},${$number(
                input[1].toJSON(),
            )},${$string(input[2].toJSON())}]`;
        };
        return is(input) ? stringify(input) : null;
    },
);
