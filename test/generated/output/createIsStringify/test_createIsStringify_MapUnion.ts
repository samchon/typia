import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { MapUnion } from "../../../structures/MapUnion";

export const test_createIsStringify_MapUnion = _test_isStringify(
    "MapUnion",
    MapUnion.generate,
    (input: MapUnion): string | null => {
        const is = (input: any): input is MapUnion => {
            const $io0 = (input: any): boolean =>
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
                            if (0 === elem.size) return true;
                            const tupleList = [
                                [
                                    (top: any) =>
                                        "boolean" === typeof top[0] &&
                                        "number" === typeof top[1] &&
                                        Number.isFinite(top[1]),
                                    (top: any) =>
                                        top.every(
                                            (elem: any) =>
                                                Array.isArray(elem) &&
                                                elem.length === 2 &&
                                                "boolean" === typeof elem[0] &&
                                                "number" === typeof elem[1] &&
                                                Number.isFinite(elem[1]),
                                        ),
                                ],
                                [
                                    (top: any) =>
                                        "number" === typeof top[0] &&
                                        Number.isFinite(top[0]) &&
                                        "number" === typeof top[1] &&
                                        Number.isFinite(top[1]),
                                    (top: any) =>
                                        top.every(
                                            (elem: any) =>
                                                Array.isArray(elem) &&
                                                elem.length === 2 &&
                                                "number" === typeof elem[0] &&
                                                Number.isFinite(elem[0]) &&
                                                "number" === typeof elem[1] &&
                                                Number.isFinite(elem[1]),
                                        ),
                                ],
                                [
                                    (top: any) =>
                                        "string" === typeof top[0] &&
                                        "number" === typeof top[1] &&
                                        Number.isFinite(top[1]),
                                    (top: any) =>
                                        top.every(
                                            (elem: any) =>
                                                Array.isArray(elem) &&
                                                elem.length === 2 &&
                                                "string" === typeof elem[0] &&
                                                "number" === typeof elem[1] &&
                                                Number.isFinite(elem[1]),
                                        ),
                                ],
                                [
                                    (top: any) =>
                                        Array.isArray(top[0]) &&
                                        top[0].every(
                                            (elem: any) =>
                                                "number" === typeof elem &&
                                                Number.isFinite(elem),
                                        ) &&
                                        "number" === typeof top[1] &&
                                        Number.isFinite(top[1]),
                                    (top: any) =>
                                        top.every(
                                            (elem: any) =>
                                                Array.isArray(elem) &&
                                                elem.length === 2 &&
                                                Array.isArray(elem[0]) &&
                                                elem[0].every(
                                                    (elem: any) =>
                                                        "number" ===
                                                            typeof elem &&
                                                        Number.isFinite(elem),
                                                ) &&
                                                "number" === typeof elem[1] &&
                                                Number.isFinite(elem[1]),
                                        ),
                                ],
                                [
                                    (top: any) =>
                                        "object" === typeof top[0] &&
                                        null !== top[0] &&
                                        $io0(top[0]) &&
                                        "number" === typeof top[1] &&
                                        Number.isFinite(top[1]),
                                    (top: any) =>
                                        top.every(
                                            (elem: any) =>
                                                Array.isArray(elem) &&
                                                elem.length === 2 &&
                                                "object" === typeof elem[0] &&
                                                null !== elem[0] &&
                                                $io0(elem[0]) &&
                                                "number" === typeof elem[1] &&
                                                Number.isFinite(elem[1]),
                                        ),
                                ],
                            ];
                            const front = elem.entries().next().value;
                            const filtered = tupleList.filter(
                                (tuple) => true === tuple[0](front),
                            );
                            if (1 === filtered.length)
                                return filtered[0][1]([...elem]);
                            const array = [...elem];
                            if (1 < filtered.length)
                                for (const tuple of filtered)
                                    if (
                                        array.every(
                                            (value: any) =>
                                                true === tuple[0](value),
                                        )
                                    )
                                        return tuple[1](array);
                            return false;
                        })(),
                )
            );
        };
        const stringify = (input: MapUnion): string => {
            const $string = (typia.createIsStringify as any).string;
            const $number = (typia.createIsStringify as any).number;
            return `[${input.map((elem: any) => "{}").join(",")}]`;
        };
        return is(input) ? stringify(input) : null;
    },
    MapUnion.SPOILERS,
);
