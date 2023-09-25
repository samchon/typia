import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { FunctionalArrayUnion } from "../../../structures/FunctionalArrayUnion";

export const test_createIs_FunctionalArrayUnion = _test_is(
    "FunctionalArrayUnion",
)<FunctionalArrayUnion>(FunctionalArrayUnion)(
    (input: any): input is FunctionalArrayUnion => {
        const $ip0 = (input: any) => {
            const array = input;
            const top = input[0];
            if (0 === input.length) return true;
            const arrayPredicators = [
                [
                    (top: any[]): any =>
                        "number" === typeof top && Number.isFinite(top),
                    (entire: any[]): any =>
                        entire.every(
                            (elem: any) =>
                                "number" === typeof elem &&
                                Number.isFinite(elem),
                        ),
                ] as const,
                [
                    (top: any[]): any => "string" === typeof top,
                    (entire: any[]): any =>
                        entire.every((elem: any) => "string" === typeof elem),
                ] as const,
                [
                    (top: any[]): any => "function" === typeof top,
                    (entire: any[]): any =>
                        entire.every((elem: any) => "function" === typeof elem),
                ] as const,
                [
                    (top: any[]): any => undefined !== top && null === top,
                    (entire: any[]): any =>
                        entire.every(
                            (elem: any) => undefined !== elem && null === elem,
                        ),
                ] as const,
            ];
            const passed = arrayPredicators.filter((pred: any) => pred[0](top));
            if (1 === passed.length) return passed[0]![1](array);
            else if (1 < passed.length)
                for (const pred of passed)
                    if (array.every((value: any) => true === pred[0](value)))
                        return pred[1](array);
            return false;
        };
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any) => Array.isArray(elem) && ($ip0(elem) || false),
            )
        );
    },
);
