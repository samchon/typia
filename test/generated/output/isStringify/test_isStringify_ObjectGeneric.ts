import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";

export const test_isStringify_ObjectGeneric = _test_isStringify(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) =>
        ((
            input: [
                ObjectGeneric.ISomething<boolean>,
                ObjectGeneric.ISomething<number>,
                ObjectGeneric.ISomething<string>,
            ],
        ): string | null => {
            const is: any = (
                input: any,
            ): input is [
                ObjectGeneric.ISomething<boolean>,
                ObjectGeneric.ISomething<number>,
                ObjectGeneric.ISomething<string>,
            ] => {
                const $io0: any = (input: any): boolean =>
                    "boolean" === typeof input.value &&
                    "object" === typeof input.child &&
                    null !== input.child &&
                    "boolean" === typeof input.child.child_value &&
                    "boolean" === typeof input.child.child_next &&
                    Array.isArray(input.elements) &&
                    input.elements.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1: any = (input: any): boolean =>
                    "boolean" === typeof input.child_value &&
                    "boolean" === typeof input.child_next;
                const $io2: any = (input: any): boolean =>
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
                            "object" === typeof elem &&
                            null !== elem &&
                            $io3(elem),
                    );
                const $io3: any = (input: any): boolean =>
                    "number" === typeof input.child_value &&
                    Number.isFinite(input.child_value) &&
                    "number" === typeof input.child_next &&
                    Number.isFinite(input.child_next);
                const $io4: any = (input: any): boolean =>
                    "string" === typeof input.value &&
                    "object" === typeof input.child &&
                    null !== input.child &&
                    "string" === typeof input.child.child_value &&
                    "string" === typeof input.child.child_next &&
                    Array.isArray(input.elements) &&
                    input.elements.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io5(elem),
                    );
                const $io5: any = (input: any): boolean =>
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
            const stringify: any = (
                input: [
                    ObjectGeneric.ISomething<boolean>,
                    ObjectGeneric.ISomething<number>,
                    ObjectGeneric.ISomething<string>,
                ],
            ): string => {
                const $io1: any = (input: any): boolean =>
                    "boolean" === typeof input.child_value &&
                    "boolean" === typeof input.child_next;
                const $io3: any = (input: any): boolean =>
                    "number" === typeof input.child_value &&
                    "number" === typeof input.child_next;
                const $io5: any = (input: any): boolean =>
                    "string" === typeof input.child_value &&
                    "string" === typeof input.child_next;
                const $number: any = (typia.isStringify as any).number;
                const $string: any = (typia.isStringify as any).string;
                const $so0: any = (input: any): any =>
                    `{"value":${
                        input.value
                    },"child":${`{"child_value":${input.child.child_value},"child_next":${input.child.child_next}}`},"elements":${(() =>
                        `[${input.elements
                            .map(
                                (elem: any) =>
                                    `{"child_value":${elem.child_value},"child_next":${elem.child_next}}`,
                            )
                            .join(",")}]`)()}}`;
                const $so2: any = (input: any): any =>
                    `{"value":${$number(
                        input.value,
                    )},"child":${`{"child_value":${$number(
                        input.child.child_value,
                    )},"child_next":${$number(
                        input.child.child_next,
                    )}}`},"elements":${(() =>
                        `[${input.elements
                            .map(
                                (elem: any) =>
                                    `{"child_value":${$number(
                                        elem.child_value,
                                    )},"child_next":${$number(
                                        elem.child_next,
                                    )}}`,
                            )
                            .join(",")}]`)()}}`;
                const $so4: any = (input: any): any =>
                    `{"value":${$string(
                        input.value,
                    )},"child":${`{"child_value":${$string(
                        input.child.child_value,
                    )},"child_next":${$string(
                        input.child.child_next,
                    )}}`},"elements":${(() =>
                        `[${input.elements
                            .map(
                                (elem: any) =>
                                    `{"child_value":${$string(
                                        elem.child_value,
                                    )},"child_next":${$string(
                                        elem.child_next,
                                    )}}`,
                            )
                            .join(",")}]`)()}}`;
                return `[${$so0(input[0])},${$so2(input[1])},${$so4(
                    input[2],
                )}]`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ObjectGeneric.SPOILERS,
);
