import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { SetSimple } from "../../../structures/SetSimple";

export const test_isStringify_SetSimple = _test_isStringify(
    "SetSimple",
    SetSimple.generate,
    (input) =>
        ((input: SetSimple): string | null => {
            const is: any = (input: any): input is SetSimple => {
                const $io0: any = (input: any): boolean =>
                    input.booleans instanceof Set &&
                    (() =>
                        [...input.booleans].every(
                            (elem: any) => "boolean" === typeof elem,
                        ))() &&
                    input.numbers instanceof Set &&
                    (() =>
                        [...input.numbers].every(
                            (elem: any) =>
                                "number" === typeof elem &&
                                Number.isFinite(elem),
                        ))() &&
                    input.strings instanceof Set &&
                    (() =>
                        [...input.strings].every(
                            (elem: any) => "string" === typeof elem,
                        ))() &&
                    input.arrays instanceof Set &&
                    (() =>
                        [...input.arrays].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.every(
                                    (elem: any) =>
                                        "number" === typeof elem &&
                                        Number.isFinite(elem),
                                ),
                        ))() &&
                    input.objects instanceof Set &&
                    (() =>
                        [...input.objects].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        ))();
                const $io1: any = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    "number" === typeof input.age &&
                    Number.isFinite(input.age);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const stringify: any = (input: SetSimple): string => {
                const $io1: any = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    "number" === typeof input.age;
                const $string: any = (typia.isStringify as any).string;
                const $number: any = (typia.isStringify as any).number;
                const $so0: any = (input: any): any =>
                    '{"booleans":{},"numbers":{},"strings":{},"arrays":{},"objects":{}}';
                return $so0(input);
            };
            return is(input) ? stringify(input) : null;
        })(input),
    SetSimple.SPOILERS,
);
