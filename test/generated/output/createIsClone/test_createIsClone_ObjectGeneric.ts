import typia from "../../../../src";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectGeneric = _test_isClone(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input: any): typia.Primitive<ObjectGeneric> | null => {
        const is = (input: any): input is ObjectGeneric => {
            const $io0 = (input: any): boolean =>
                "boolean" === typeof input.value &&
                "object" === typeof input.child &&
                null !== input.child &&
                "boolean" === typeof input.child.child_value &&
                "boolean" === typeof input.child.child_next &&
                Array.isArray(input.elements) &&
                input.elements.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "boolean" === typeof input.child_value &&
                "boolean" === typeof input.child_next;
            const $io2 = (input: any): boolean =>
                "number" === typeof input.value &&
                Number.isFinite(input.value) &&
                "object" === typeof input.child &&
                null !== input.child &&
                "number" === typeof input.child.child_value &&
                Number.isFinite(input.child.child_value) &&
                "number" === typeof input.child.child_next &&
                Number.isFinite(input.child.child_next) &&
                Array.isArray(input.elements) &&
                input.elements.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io3(elem),
                );
            const $io3 = (input: any): boolean =>
                "number" === typeof input.child_value &&
                Number.isFinite(input.child_value) &&
                "number" === typeof input.child_next &&
                Number.isFinite(input.child_next);
            const $io4 = (input: any): boolean =>
                "string" === typeof input.value &&
                "object" === typeof input.child &&
                null !== input.child &&
                "string" === typeof input.child.child_value &&
                "string" === typeof input.child.child_next &&
                Array.isArray(input.elements) &&
                input.elements.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io5(elem),
                );
            const $io5 = (input: any): boolean =>
                "string" === typeof input.child_value &&
                "string" === typeof input.child_next;
            return (
                Array.isArray(input) &&
                input.length === 3 &&
                "object" === typeof input[0] &&
                null !== input[0] &&
                $io0(input[0]) &&
                "object" === typeof input[1] &&
                null !== input[1] &&
                $io2(input[1]) &&
                "object" === typeof input[2] &&
                null !== input[2] &&
                $io4(input[2])
            );
        };
        const clone = (
            input: ObjectGeneric,
        ): typia.Primitive<ObjectGeneric> => {
            const $io0 = (input: any): boolean =>
                "boolean" === typeof input.value &&
                "object" === typeof input.child &&
                null !== input.child &&
                $io1(input.child) &&
                Array.isArray(input.elements) &&
                input.elements.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "boolean" === typeof input.child_value &&
                "boolean" === typeof input.child_next;
            const $io2 = (input: any): boolean =>
                "number" === typeof input.value &&
                "object" === typeof input.child &&
                null !== input.child &&
                $io3(input.child) &&
                Array.isArray(input.elements) &&
                input.elements.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io3(elem),
                );
            const $io3 = (input: any): boolean =>
                "number" === typeof input.child_value &&
                "number" === typeof input.child_next;
            const $io4 = (input: any): boolean =>
                "string" === typeof input.value &&
                "object" === typeof input.child &&
                null !== input.child &&
                $io5(input.child) &&
                Array.isArray(input.elements) &&
                input.elements.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io5(elem),
                );
            const $io5 = (input: any): boolean =>
                "string" === typeof input.child_value &&
                "string" === typeof input.child_next;
            const $co0 = (input: any): any => ({
                value: input.value as any,
                child:
                    "object" === typeof input.child && null !== input.child
                        ? $co1(input.child)
                        : (input.child as any),
                elements: Array.isArray(input.elements)
                    ? input.elements.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co1(elem)
                              : (elem as any),
                      )
                    : (input.elements as any),
            });
            const $co1 = (input: any): any => ({
                child_value: input.child_value as any,
                child_next: input.child_next as any,
            });
            const $co2 = (input: any): any => ({
                value: input.value as any,
                child:
                    "object" === typeof input.child && null !== input.child
                        ? $co3(input.child)
                        : (input.child as any),
                elements: Array.isArray(input.elements)
                    ? input.elements.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co3(elem)
                              : (elem as any),
                      )
                    : (input.elements as any),
            });
            const $co3 = (input: any): any => ({
                child_value: input.child_value as any,
                child_next: input.child_next as any,
            });
            const $co4 = (input: any): any => ({
                value: input.value as any,
                child:
                    "object" === typeof input.child && null !== input.child
                        ? $co5(input.child)
                        : (input.child as any),
                elements: Array.isArray(input.elements)
                    ? input.elements.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co5(elem)
                              : (elem as any),
                      )
                    : (input.elements as any),
            });
            const $co5 = (input: any): any => ({
                child_value: input.child_value as any,
                child_next: input.child_next as any,
            });
            return Array.isArray(input) &&
                input.length === 3 &&
                "object" === typeof input[0] &&
                null !== input[0] &&
                $io0(input[0]) &&
                "object" === typeof input[1] &&
                null !== input[1] &&
                $io2(input[1]) &&
                "object" === typeof input[2] &&
                null !== input[2] &&
                $io4(input[2])
                ? ([
                      "object" === typeof input[0] && null !== input[0]
                          ? $co0(input[0])
                          : (input[0] as any),
                      "object" === typeof input[1] && null !== input[1]
                          ? $co2(input[1])
                          : (input[1] as any),
                      "object" === typeof input[2] && null !== input[2]
                          ? $co4(input[2])
                          : (input[2] as any),
                  ] as any)
                : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    },
    ObjectGeneric.SPOILERS,
);
