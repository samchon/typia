import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { SetAlias } from "../../../structures/SetAlias";

export const test_misc_isClone_SetAlias = _test_misc_isClone(
    "SetAlias",
)<SetAlias>(SetAlias)((input: any): typia.Resolved<SetAlias> | null => {
    const is = (input: any): input is SetAlias => {
        const $io0 = (input: any): boolean =>
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
                        "object" === typeof elem && null !== elem && $io1(elem),
                ))();
        const $io1 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            "number" === typeof input.age &&
            Number.isFinite(input.age);
        return "object" === typeof input && null !== input && $io0(input);
    };
    const clone = (input: SetAlias): typia.Resolved<SetAlias> => {
        const $io1 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            "number" === typeof input.age;
        const $cp0 = (input: any) => input.map((elem: any) => elem as any);
        const $co0 = (input: any): any => ({
            booleans:
                input.booleans instanceof Set
                    ? (() =>
                          new Set<any>(
                              [...input.booleans].map(
                                  (elem: any) => elem as any,
                              ),
                          ))()
                    : (input.booleans as any),
            numbers:
                input.numbers instanceof Set
                    ? (() =>
                          new Set<any>(
                              [...input.numbers].map(
                                  (elem: any) => elem as any,
                              ),
                          ))()
                    : (input.numbers as any),
            strings:
                input.strings instanceof Set
                    ? (() =>
                          new Set<any>(
                              [...input.strings].map(
                                  (elem: any) => elem as any,
                              ),
                          ))()
                    : (input.strings as any),
            arrays:
                input.arrays instanceof Set
                    ? (() =>
                          new Set<any>(
                              [...input.arrays].map((elem: any) =>
                                  Array.isArray(elem)
                                      ? $cp0(elem)
                                      : (elem as any),
                              ),
                          ))()
                    : (input.arrays as any),
            objects:
                input.objects instanceof Set
                    ? (() =>
                          new Set<any>(
                              [...input.objects].map((elem: any) =>
                                  "object" === typeof elem && null !== elem
                                      ? $co1(elem)
                                      : (elem as any),
                              ),
                          ))()
                    : (input.objects as any),
        });
        const $co1 = (input: any): any => ({
            id: input.id as any,
            name: input.name as any,
            age: input.age as any,
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
});
