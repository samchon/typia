import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_createIsClone_ToJsonArray = _test_isClone(
    "ToJsonArray",
    ToJsonArray.generate,
    (input: any): typia.Primitive<ToJsonArray> | null => {
        const is: any = (input: any): input is ToJsonArray => {
            const $io0: any = (input: any): boolean =>
                "function" === typeof input.toJSON;
            const $io1: any = (input: any): boolean =>
                "function" === typeof input.toJSON;
            const $io2: any = (input: any): boolean =>
                "function" === typeof input.toJSON;
            const $io3: any = (input: any): boolean =>
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
        const clone: any = (
            input: ToJsonArray,
        ): typia.Primitive<ToJsonArray> => {
            const $co0: any = (input: any): any => ({
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
                              ? (() =>
                                    input[0]
                                        .toJSON()
                                        .map((elem: any) => elem as any))()
                              : (input[0].toJSON() as any)
                          : (input[0] as any),
                      "object" === typeof input[1] &&
                      null !== input[1] &&
                      "function" === typeof input[1].toJSON
                          ? Array.isArray(input[1].toJSON())
                              ? (() =>
                                    input[1]
                                        .toJSON()
                                        .map((elem: any) => elem as any))()
                              : (input[1].toJSON() as any)
                          : (input[1] as any),
                      "object" === typeof input[2] &&
                      null !== input[2] &&
                      "function" === typeof input[2].toJSON
                          ? Array.isArray(input[2].toJSON())
                              ? (() =>
                                    input[2]
                                        .toJSON()
                                        .map((elem: any) => elem as any))()
                              : (input[2].toJSON() as any)
                          : (input[2] as any),
                      "object" === typeof input[3] &&
                      null !== input[3] &&
                      "function" === typeof input[3].toJSON
                          ? Array.isArray(input[3].toJSON())
                              ? (() =>
                                    input[3]
                                        .toJSON()
                                        .map((elem: any) =>
                                            "object" === typeof elem &&
                                            null !== elem
                                                ? $co0(elem)
                                                : (elem as any),
                                        ))()
                              : (input[3].toJSON() as any)
                          : (input[3] as any),
                  ] as any)
                : (input as any);
        };
        if (!is(input)) return null;
        const output: any = clone(input);
        return output;
    },
);
