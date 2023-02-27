import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_createClone_ArraySimple = _test_clone(
    "ArraySimple",
    ArraySimple.generate,
    (input: ArraySimple): typia.Primitive<ArraySimple> => {
        const $io1 = (input: any): boolean =>
            "string" === typeof input.name &&
            "string" === typeof input.body &&
            "number" === typeof input.rank;
        const $co0 = (input: any): any => ({
            name: input.name as any,
            email: input.email as any,
            hobbies: Array.isArray(input.hobbies)
                ? input.hobbies.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co1(elem)
                          : (elem as any),
                  )
                : (input.hobbies as any),
        });
        const $co1 = (input: any): any => ({
            name: input.name as any,
            body: input.body as any,
            rank: input.rank as any,
        });
        return Array.isArray(input)
            ? input.map((elem: any) =>
                  "object" === typeof elem && null !== elem
                      ? $co0(elem)
                      : (elem as any),
              )
            : (input as any);
    },
);
