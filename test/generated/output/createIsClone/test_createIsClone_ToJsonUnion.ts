import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_createIsClone_ToJsonUnion = _test_isClone(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input: any): typia.Primitive<ToJsonUnion> | null => {
        const is = (input: any): input is ToJsonUnion => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.mobile &&
                "string" === typeof input.name;
            const $io1 = (input: any): boolean =>
                "function" === typeof input.toJSON;
            const $io2 = (input: any): boolean =>
                "function" === typeof input.toJSON;
            const $io3 = (input: any): boolean =>
                "function" === typeof input.toJSON;
            const $iu0 = (input: any): any =>
                (() => {
                    if (undefined !== input.id) return $io0(input);
                    return (() => {
                        if ($io3(input)) return $io3(input);
                        if ($io2(input)) return $io2(input);
                        if ($io1(input)) return $io1(input);
                        return false;
                    })();
                })();
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        null !== elem &&
                        undefined !== elem &&
                        ("string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            ("object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem))),
                )
            );
        };
        const clone = (input: ToJsonUnion): typia.Primitive<ToJsonUnion> => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.mobile &&
                "string" === typeof input.name;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.manufacturer &&
                "string" === typeof input.brand &&
                "string" === typeof input.name;
            const $throws = (typia.createIsClone as any).throws;
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    "function" === typeof elem.toJSON
                        ? "object" === typeof elem.toJSON() &&
                          null !== elem.toJSON()
                            ? $cu0(elem.toJSON())
                            : (elem.toJSON() as any)
                        : "object" === typeof elem && null !== elem
                        ? $co0(elem)
                        : (elem as any),
                );
            const $co0 = (input: any): any => ({
                id: input.id as any,
                mobile: input.mobile as any,
                name: input.name as any,
            });
            const $co1 = (input: any): any => ({
                manufacturer: input.manufacturer as any,
                brand: input.brand as any,
                name: input.name as any,
            });
            const $cu0 = (input: any): any =>
                (() => {
                    if (undefined !== input.id) return $co0(input);
                    if (undefined !== input.manufacturer) return $co1(input);
                    $throws({
                        expected:
                            "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct)",
                        value: input,
                    });
                })();
            return Array.isArray(input) ? $cp0(input) : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    },
);
