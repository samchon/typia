import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_createIsClone_ObjectAlias = _test_isClone(
    "ObjectAlias",
    ObjectAlias.generate,
    (input: any): typia.Primitive<ObjectAlias> | null => {
        const is: any = (input: any): input is ObjectAlias => {
            const $io0: any = (input: any): boolean =>
                (null === input.id || "string" === typeof input.id) &&
                "string" === typeof input.email &&
                "string" === typeof input.name &&
                (null === input.sex ||
                    1 === input.sex ||
                    2 === input.sex ||
                    "male" === input.sex ||
                    "female" === input.sex) &&
                (null === input.age ||
                    ("number" === typeof input.age &&
                        Number.isFinite(input.age))) &&
                (null === input.dead || "boolean" === typeof input.dead);
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const clone: any = (
            input: ObjectAlias,
        ): typia.Primitive<ObjectAlias> => {
            const $co0: any = (input: any): any => ({
                id: input.id as any,
                email: input.email as any,
                name: input.name as any,
                sex: input.sex as any,
                age: input.age as any,
                dead: input.dead as any,
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
    },
    ObjectAlias.SPOILERS,
);
