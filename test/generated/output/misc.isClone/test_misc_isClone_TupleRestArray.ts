import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_misc_isClone_TupleRestArray =
    _test_misc_isClone<TupleRestArray>(TupleRestArray)((input) =>
        ((
            input: any,
        ): typia.Primitive<[boolean, number, ...Array<string>[]]> | null => {
            const is = (
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
            const clone = (
                input: [boolean, number, ...Array<string>[]],
            ): typia.Primitive<[boolean, number, ...Array<string>[]]> => {
                const $cp0 = (input: any) =>
                    input.map((elem: any) => elem as any);
                const $cp1 = (input: any) =>
                    input.map((elem: any) =>
                        Array.isArray(elem) ? $cp0(elem) : (elem as any),
                    );
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
                              ? $cp1(input.slice(2))
                              : (input.slice(2) as any)),
                      ] as any)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    );
