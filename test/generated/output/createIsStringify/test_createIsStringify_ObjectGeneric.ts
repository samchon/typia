import typia from "../../../../src";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectGeneric = _test_isStringify(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input: ObjectGeneric): string | null => {
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
        const stringify = (input: ObjectGeneric): string => {
            const $number = (typia.createIsStringify as any).number;
            const $string = (typia.createIsStringify as any).string;
            const $io1 = (input: any): boolean =>
                "boolean" === typeof input.child_value &&
                "boolean" === typeof input.child_next;
            const $io3 = (input: any): boolean =>
                "number" === typeof input.child_value &&
                "number" === typeof input.child_next;
            const $io5 = (input: any): boolean =>
                "string" === typeof input.child_value &&
                "string" === typeof input.child_next;
            const $so0 = (input: any): any =>
                `{"value":${
                    input.value
                },"child":${`{"child_value":${input.child.child_value},"child_next":${input.child.child_next}}`},"elements":${`[${input.elements
                    .map(
                        (elem: any) =>
                            `{"child_value":${elem.child_value},"child_next":${elem.child_next}}`,
                    )
                    .join(",")}]`}}`;
            const $so2 = (input: any): any =>
                `{"value":${$number(
                    input.value,
                )},"child":${`{"child_value":${$number(
                    input.child.child_value,
                )},"child_next":${$number(
                    input.child.child_next,
                )}}`},"elements":${`[${input.elements
                    .map(
                        (elem: any) =>
                            `{"child_value":${$number(
                                elem.child_value,
                            )},"child_next":${$number(elem.child_next)}}`,
                    )
                    .join(",")}]`}}`;
            const $so4 = (input: any): any =>
                `{"value":${$string(
                    input.value,
                )},"child":${`{"child_value":${$string(
                    input.child.child_value,
                )},"child_next":${$string(
                    input.child.child_next,
                )}}`},"elements":${`[${input.elements
                    .map(
                        (elem: any) =>
                            `{"child_value":${$string(
                                elem.child_value,
                            )},"child_next":${$string(elem.child_next)}}`,
                    )
                    .join(",")}]`}}`;
            return `[${$so0(input[0])},${$so2(input[1])},${$so4(input[2])}]`;
        };
        return is(input) ? stringify(input) : null;
    },
    ObjectGeneric.SPOILERS,
);
