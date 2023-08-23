import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { SetSimple } from "../../../structures/SetSimple";

export const test_misc_clone_SetSimple = _test_misc_clone(
    "SetSimple",
)<SetSimple>(SetSimple)((input: SetSimple): typia.Resolved<SetSimple> => {
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
                          [...input.booleans].map((elem: any) => elem as any),
                      ))()
                : (input.booleans as any),
        numbers:
            input.numbers instanceof Set
                ? (() =>
                      new Set<any>(
                          [...input.numbers].map((elem: any) => elem as any),
                      ))()
                : (input.numbers as any),
        strings:
            input.strings instanceof Set
                ? (() =>
                      new Set<any>(
                          [...input.strings].map((elem: any) => elem as any),
                      ))()
                : (input.strings as any),
        arrays:
            input.arrays instanceof Set
                ? (() =>
                      new Set<any>(
                          [...input.arrays].map((elem: any) =>
                              Array.isArray(elem) ? $cp0(elem) : (elem as any),
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
});
