import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_misc_isPrune_TypeTagAtomicUnion = _test_misc_isPrune(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(TypeTagAtomicUnion)((input) =>
    ((input: any): input is TypeTagAtomicUnion => {
        const is = (input: any): input is TypeTagAtomicUnion => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                ("number" === typeof input.value &&
                    Number.isFinite(input.value) &&
                    3 <= input.value) ||
                ("string" === typeof input.value &&
                    3 <= input.value.length &&
                    input.value.length <= 7);
            return "object" === typeof input && null !== input && $io0(input);
        };
        const prune = (input: TypeTagAtomicUnion): void => {
            const $io1 = (input: any): boolean =>
                ("number" === typeof input.value && 3 <= input.value) ||
                ("string" === typeof input.value &&
                    3 <= input.value.length &&
                    input.value.length <= 7);
            const $pp0 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po1(elem);
                });
            const $po0 = (input: any): any => {
                if (Array.isArray(input.value)) $pp0(input.value);
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po1 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    })(input),
);
