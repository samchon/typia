import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_isClone_TupleRestArray = _test_isClone(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<[boolean, number, ...Array<string>[]]> | null => {
            const is: any = (
                input: any,
            ): input is [boolean, number, ...Array<string>[]] => {
                return (
                    Array.isArray(input) &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    Number.isFinite(input[1]) &&
                    Array.isArray(input.slice(2)) &&
                    input
                        .slice(2)
                        .every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.every(
                                    (elem: any) => "string" === typeof elem,
                                ),
                        )
                );
            };
            const clone: any = (
                input: [boolean, number, ...Array<string>[]],
            ): typia.Primitive<[boolean, number, ...Array<string>[]]> => {
                return Array.isArray(input) &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    Array.isArray(input.slice(2)) &&
                    input
                        .slice(2)
                        .every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.every(
                                    (elem: any) => "string" === typeof elem,
                                ),
                        )
                    ? ([
                          input[0] as any,
                          input[1] as any,
                          ...(Array.isArray(input.slice(2))
                              ? (() =>
                                    input
                                        .slice(2)
                                        .map((elem: any) =>
                                            Array.isArray(elem)
                                                ? (() =>
                                                      elem.map(
                                                          (elem: any) =>
                                                              elem as any,
                                                      ))()
                                                : (elem as any),
                                        ))()
                              : (input.slice(2) as any)),
                      ] as any)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output: any = clone(input);
            return output;
        })(input),
    TupleRestArray.SPOILERS,
);
