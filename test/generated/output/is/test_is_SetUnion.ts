import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { SetUnion } from "../../../structures/SetUnion";

export const test_is_SetUnion = _test_is("SetUnion")<SetUnion>(SetUnion)(
    (input) =>
        ((input: any): input is SetUnion => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age);
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        elem instanceof Set &&
                        (() => {
                            const array = [...elem];
                            const top = elem.values().next().value;
                            if (0 === elem.size) return true;
                            const arrayPredicators = [
                                [
                                    (top: any[]): any =>
                                        "boolean" === typeof top,
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "boolean" === typeof elem,
                                        ),
                                ] as const,
                                [
                                    (top: any[]): any =>
                                        "number" === typeof top &&
                                        Number.isFinite(top),
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "number" === typeof elem &&
                                                Number.isFinite(elem),
                                        ),
                                ] as const,
                                [
                                    (top: any[]): any =>
                                        "string" === typeof top,
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "string" === typeof elem,
                                        ),
                                ] as const,
                                [
                                    (top: any[]): any =>
                                        Array.isArray(top) &&
                                        top.every(
                                            (elem: any) =>
                                                "number" === typeof elem &&
                                                Number.isFinite(elem),
                                        ),
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                Array.isArray(elem) &&
                                                elem.every(
                                                    (elem: any) =>
                                                        "number" ===
                                                            typeof elem &&
                                                        Number.isFinite(elem),
                                                ),
                                        ),
                                ] as const,
                                [
                                    (top: any[]): any =>
                                        "object" === typeof top &&
                                        null !== top &&
                                        $io0(top),
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "object" === typeof elem &&
                                                null !== elem &&
                                                $io0(elem),
                                        ),
                                ] as const,
                            ];
                            const passed = arrayPredicators.filter(
                                (pred: any) => pred[0](top),
                            );
                            if (1 === passed.length)
                                return passed[0]![1](array);
                            else if (1 < passed.length)
                                for (const pred of passed)
                                    if (
                                        array.every(
                                            (value: any) =>
                                                true === pred[0](value),
                                        )
                                    )
                                        return pred[1](array);
                            return false;
                        })(),
                )
            );
        })(input),
);
