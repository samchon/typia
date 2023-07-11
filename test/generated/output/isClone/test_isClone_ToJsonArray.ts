import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_isClone_ToJsonArray = _test_isClone(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<
            [
                ToJsonArray.IArray<boolean>,
                ToJsonArray.IArray<number>,
                ToJsonArray.IArray<string>,
                ToJsonArray.IArray<ToJsonArray.IObject>,
            ]
        > | null => {
            const is = (
                input: any,
            ): input is [
                ToJsonArray.IArray<boolean>,
                ToJsonArray.IArray<number>,
                ToJsonArray.IArray<string>,
                ToJsonArray.IArray<ToJsonArray.IObject>,
            ] => {
                const $io0 = (input: any): boolean =>
                    "function" === typeof input.toJSON;
                const $io1 = (input: any): boolean =>
                    "function" === typeof input.toJSON;
                const $io2 = (input: any): boolean =>
                    "function" === typeof input.toJSON;
                const $io3 = (input: any): boolean =>
                    "function" === typeof input.toJSON;
                return (
                    Array.isArray(input) &&
                    input.length === 4 &&
                    "object" === typeof input[0] &&
                    null !== input[0] &&
                    $io0(input[0]) &&
                    "object" === typeof input[1] &&
                    null !== input[1] &&
                    $io1(input[1]) &&
                    "object" === typeof input[2] &&
                    null !== input[2] &&
                    $io2(input[2]) &&
                    "object" === typeof input[3] &&
                    null !== input[3] &&
                    $io3(input[3])
                );
            };
            const clone = (
                input: [
                    ToJsonArray.IArray<boolean>,
                    ToJsonArray.IArray<number>,
                    ToJsonArray.IArray<string>,
                    ToJsonArray.IArray<ToJsonArray.IObject>,
                ],
            ): typia.Primitive<
                [
                    ToJsonArray.IArray<boolean>,
                    ToJsonArray.IArray<number>,
                    ToJsonArray.IArray<string>,
                    ToJsonArray.IArray<ToJsonArray.IObject>,
                ]
            > => {
                const $cp0 = (input: any) =>
                    input.map((elem: any) => elem as any);
                const $cp1 = (input: any) =>
                    input.map((elem: any) => elem as any);
                const $cp2 = (input: any) =>
                    input.map((elem: any) => elem as any);
                const $cp3 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co4(elem)
                            : (elem as any),
                    );
                const $co4 = (input: any): any => ({
                    id: input.id as any,
                });
                return Array.isArray(input) &&
                    input.length === 4 &&
                    true &&
                    true &&
                    true &&
                    true
                    ? ([
                          "object" === typeof input[0] &&
                          null !== input[0] &&
                          "function" === typeof input[0].toJSON
                              ? Array.isArray(input[0].toJSON())
                                  ? $cp0(input[0].toJSON())
                                  : (input[0].toJSON() as any)
                              : (input[0] as any),
                          "object" === typeof input[1] &&
                          null !== input[1] &&
                          "function" === typeof input[1].toJSON
                              ? Array.isArray(input[1].toJSON())
                                  ? $cp1(input[1].toJSON())
                                  : (input[1].toJSON() as any)
                              : (input[1] as any),
                          "object" === typeof input[2] &&
                          null !== input[2] &&
                          "function" === typeof input[2].toJSON
                              ? Array.isArray(input[2].toJSON())
                                  ? $cp2(input[2].toJSON())
                                  : (input[2].toJSON() as any)
                              : (input[2] as any),
                          "object" === typeof input[3] &&
                          null !== input[3] &&
                          "function" === typeof input[3].toJSON
                              ? Array.isArray(input[3].toJSON())
                                  ? $cp3(input[3].toJSON())
                                  : (input[3].toJSON() as any)
                              : (input[3] as any),
                      ] as any)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
);
