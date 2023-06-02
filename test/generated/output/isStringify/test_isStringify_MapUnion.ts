import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { MapUnion } from "../../../structures/MapUnion";

export const test_isStringify_MapUnion = _test_isStringify(
    "MapUnion",
    MapUnion.generate,
    (input) =>
        ((input: Array<MapUnion.Union>): string | null => {
            const is: any = (input: any): input is Array<MapUnion.Union> => {
                const $io0: any = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    "number" === typeof input.age &&
                    Number.isFinite(input.age);
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            elem instanceof Map &&
                            (() => {
                                const array: any = [...elem];
                                const top: any = array.entries().next().value;
                                if (0 === elem.size) return true;
                                const arrayPredicators: any = [
                                    [
                                        (top: any): any =>
                                            "boolean" === typeof top[0] &&
                                            "number" === typeof top[1] &&
                                            Number.isFinite(top[1]),
                                        (entire: any[]): any =>
                                            entire.every(
                                                (elem: any) =>
                                                    Array.isArray(elem) &&
                                                    elem.length === 2 &&
                                                    "boolean" ===
                                                        typeof elem[0] &&
                                                    "number" ===
                                                        typeof elem[1] &&
                                                    Number.isFinite(elem[1]),
                                            ),
                                    ],
                                    [
                                        (top: any): any =>
                                            "number" === typeof top[0] &&
                                            Number.isFinite(top[0]) &&
                                            "number" === typeof top[1] &&
                                            Number.isFinite(top[1]),
                                        (entire: any[]): any =>
                                            entire.every(
                                                (elem: any) =>
                                                    Array.isArray(elem) &&
                                                    elem.length === 2 &&
                                                    "number" ===
                                                        typeof elem[0] &&
                                                    Number.isFinite(elem[0]) &&
                                                    "number" ===
                                                        typeof elem[1] &&
                                                    Number.isFinite(elem[1]),
                                            ),
                                    ],
                                    [
                                        (top: any): any =>
                                            "string" === typeof top[0] &&
                                            "number" === typeof top[1] &&
                                            Number.isFinite(top[1]),
                                        (entire: any[]): any =>
                                            entire.every(
                                                (elem: any) =>
                                                    Array.isArray(elem) &&
                                                    elem.length === 2 &&
                                                    "string" ===
                                                        typeof elem[0] &&
                                                    "number" ===
                                                        typeof elem[1] &&
                                                    Number.isFinite(elem[1]),
                                            ),
                                    ],
                                    [
                                        (top: any): any =>
                                            Array.isArray(top[0]) &&
                                            top[0].every(
                                                (elem: any) =>
                                                    "number" === typeof elem &&
                                                    Number.isFinite(elem),
                                            ) &&
                                            "number" === typeof top[1] &&
                                            Number.isFinite(top[1]),
                                        (entire: any[]): any =>
                                            entire.every(
                                                (elem: any) =>
                                                    Array.isArray(elem) &&
                                                    elem.length === 2 &&
                                                    Array.isArray(elem[0]) &&
                                                    elem[0].every(
                                                        (elem: any) =>
                                                            "number" ===
                                                                typeof elem &&
                                                            Number.isFinite(
                                                                elem,
                                                            ),
                                                    ) &&
                                                    "number" ===
                                                        typeof elem[1] &&
                                                    Number.isFinite(elem[1]),
                                            ),
                                    ],
                                    [
                                        (top: any): any =>
                                            "object" === typeof top[0] &&
                                            null !== top[0] &&
                                            $io0(top[0]) &&
                                            "number" === typeof top[1] &&
                                            Number.isFinite(top[1]),
                                        (entire: any[]): any =>
                                            entire.every(
                                                (elem: any) =>
                                                    Array.isArray(elem) &&
                                                    elem.length === 2 &&
                                                    "object" ===
                                                        typeof elem[0] &&
                                                    null !== elem[0] &&
                                                    $io0(elem[0]) &&
                                                    "number" ===
                                                        typeof elem[1] &&
                                                    Number.isFinite(elem[1]),
                                            ),
                                    ],
                                ];
                                const passed: any = arrayPredicators.filter(
                                    (pred: any) => pred[0](top),
                                );
                                if (1 === passed.length)
                                    return passed[0][1](array);
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
            };
            const stringify: any = (input: Array<MapUnion.Union>): string => {
                const $string: any = (typia.isStringify as any).string;
                const $number: any = (typia.isStringify as any).number;
                return (() =>
                    `[${input.map((elem: any) => "{}").join(",")}]`)();
            };
            return is(input) ? stringify(input) : null;
        })(input),
    MapUnion.SPOILERS,
);
