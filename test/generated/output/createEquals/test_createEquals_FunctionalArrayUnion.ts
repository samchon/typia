import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { FunctionalArrayUnion } from "../../../structures/FunctionalArrayUnion";

export const test_equals_FunctionalArrayUnion =
    _test_equals<FunctionalArrayUnion>(FunctionalArrayUnion)(
        (
            input: any,
            _exceptionable: boolean = true,
        ): input is FunctionalArrayUnion => {
            const $ip0 = (input: any, _exceptionable: boolean = true) => {
                const array = input;
                const top = input[0];
                if (0 === input.length) return true;
                const arrayPredicators = [
                    [
                        (top: any): any =>
                            "number" === typeof top && Number.isFinite(top),
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any, _index6: number) =>
                                    "number" === typeof elem &&
                                    Number.isFinite(elem),
                            ),
                    ],
                    [
                        (top: any): any => "string" === typeof top,
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any, _index7: number) =>
                                    "string" === typeof elem,
                            ),
                    ],
                    [
                        (top: any): any => "function" === typeof top,
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any, _index8: number) =>
                                    "function" === typeof elem,
                            ),
                    ],
                    [
                        (top: any): any => undefined !== top && null === top,
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any, _index9: number) =>
                                    undefined !== elem && null === elem,
                            ),
                    ],
                ];
                const passed = arrayPredicators.filter((pred: any) =>
                    pred[0](top),
                );
                if (1 === passed.length) return passed[0][1](array);
                else if (1 < passed.length)
                    for (const pred of passed)
                        if (
                            array.every((value: any) => true === pred[0](value))
                        )
                            return pred[1](array);
                return false;
            };
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any, _index1: number) =>
                        Array.isArray(elem) &&
                        ($ip0(elem, true && _exceptionable) || false),
                )
            );
        },
    );
