import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { SetSimple } from "../../../structures/SetSimple";

export const test_createIsClone_SetSimple = _test_isClone(
    "SetSimple",
    SetSimple.generate,
    (input: any): typia.Primitive<SetSimple> | null => {
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
                            "number" === typeof elem && Number.isFinite(elem),
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
            return "object" === typeof input && null !== input && $io0(input);
        };
        const clone: any = (input: SetSimple): typia.Primitive<SetSimple> => {
            const $io1: any = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "number" === typeof input.age;
            const $co0: any = (input: any): any => ({
                booleans:
                    input.booleans instanceof Set
                        ? {}
                        : (input.booleans as any),
                numbers:
                    input.numbers instanceof Set ? {} : (input.numbers as any),
                strings:
                    input.strings instanceof Set ? {} : (input.strings as any),
                arrays:
                    input.arrays instanceof Set ? {} : (input.arrays as any),
                objects:
                    input.objects instanceof Set ? {} : (input.objects as any),
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output: any = clone(input);
        return output;
    },
    SetSimple.SPOILERS,
);
