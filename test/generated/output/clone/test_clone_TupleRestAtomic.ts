import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_clone_TupleRestAtomic = _test_clone(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) =>
        ((
            input: [boolean, number, ...string[]],
        ): typia.Primitive<[boolean, number, ...string[]]> => {
            return Array.isArray(input) &&
                "boolean" === typeof input[0] &&
                "number" === typeof input[1] &&
                Array.isArray(input.slice(2)) &&
                input.slice(2).every((elem: any) => "string" === typeof elem)
                ? ([
                      input[0] as any,
                      input[1] as any,
                      ...(Array.isArray(input.slice(2))
                          ? (() =>
                                input
                                    .slice(2)
                                    .map((elem: any) => elem as any))()
                          : (input.slice(2) as any)),
                  ] as any)
                : (input as any);
        })(input),
);
