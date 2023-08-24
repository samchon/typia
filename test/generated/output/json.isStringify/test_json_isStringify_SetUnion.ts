import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { SetUnion } from "../../../structures/SetUnion";

export const test_json_isStringify_SetUnion = _test_json_isStringify(
    "SetUnion",
)<SetUnion>(SetUnion)((input) =>
    ((input: SetUnion): string | null => {
        const is = (input: any): input is SetUnion => {
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
                                ],
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
                                ],
                                [
                                    (top: any[]): any =>
                                        "string" === typeof top,
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "string" === typeof elem,
                                        ),
                                ],
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
                                ],
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
                                ],
                            ];
                            const passed = arrayPredicators.filter(
                                (pred: any) => pred[0](top),
                            );
                            if (1 === passed.length) return passed[0][1](array);
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
        const stringify = (input: SetUnion): string => {
            const $string = (typia.json.isStringify as any).string;
            const $number = (typia.json.isStringify as any).number;
            return `[${input.map((elem: any) => "{}").join(",")}]`;
        };
        return is(input) ? stringify(input) : null;
    })(input),
);
