import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_isClone_ArraySimple = _test_isClone(
    "ArraySimple",
    ArraySimple.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<ArraySimple.IPerson>> | null => {
            const is: any = (
                input: any,
            ): input is Array<ArraySimple.IPerson> => {
                const $io0: any = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.email &&
                    Array.isArray(input.hobbies) &&
                    input.hobbies.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1: any = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.body &&
                    "number" === typeof input.rank &&
                    Number.isFinite(input.rank);
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const clone: any = (
                input: Array<ArraySimple.IPerson>,
            ): typia.Primitive<Array<ArraySimple.IPerson>> => {
                const $io1: any = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.body &&
                    "number" === typeof input.rank;
                const $co0: any = (input: any): any => ({
                    name: input.name as any,
                    email: input.email as any,
                    hobbies: Array.isArray(input.hobbies)
                        ? (() =>
                              input.hobbies.map((elem: any) =>
                                  "object" === typeof elem && null !== elem
                                      ? $co1(elem)
                                      : (elem as any),
                              ))()
                        : (input.hobbies as any),
                });
                const $co1: any = (input: any): any => ({
                    name: input.name as any,
                    body: input.body as any,
                    rank: input.rank as any,
                });
                return Array.isArray(input)
                    ? (() =>
                          input.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co0(elem)
                                  : (elem as any),
                          ))()
                    : (input as any);
            };
            if (!is(input)) return null;
            const output: any = clone(input);
            return output;
        })(input),
    ArraySimple.SPOILERS,
);
