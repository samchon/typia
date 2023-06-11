import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";

export const test_clone_ObjectGeneric = _test_clone(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) =>
        ((
            input: [
                ObjectGeneric.ISomething<boolean>,
                ObjectGeneric.ISomething<number>,
                ObjectGeneric.ISomething<string>,
            ],
        ): typia.Primitive<
            [
                ObjectGeneric.ISomething<boolean>,
                ObjectGeneric.ISomething<number>,
                ObjectGeneric.ISomething<string>,
            ]
        > => {
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
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co1(elem)
                        : (elem as any),
                );
            const $cp1 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co3(elem)
                        : (elem as any),
                );
            const $cp2 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co5(elem)
                        : (elem as any),
                );
            const $co0 = (input: any): any => ({
                value: input.value as any,
                child:
                    "object" === typeof input.child && null !== input.child
                        ? $co1(input.child)
                        : (input.child as any),
                elements: Array.isArray(input.elements)
                    ? $cp0(input.elements)
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
                    ? $cp1(input.elements)
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
                    ? $cp2(input.elements)
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
        })(input),
);
