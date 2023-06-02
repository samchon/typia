import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_createAssertStringify_TagAtomicUnion = _test_assertStringify(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input: any): string => {
        const assert: any = (input: any): TagAtomicUnion => {
            const __is: any = (input: any): input is TagAtomicUnion => {
                const $io0: any = (input: any): boolean =>
                    ("string" === typeof input.value &&
                        3 <= input.value.length &&
                        7 >= input.value.length) ||
                    ("number" === typeof input.value &&
                        Number.isFinite(input.value) &&
                        3 <= input.value);
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
            const $guard: any = (typia.createAssertStringify as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagAtomicUnion => {
                    const $ao0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.value &&
                            (3 <= input.value.length ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "string (@minLength 3)",
                                    value: input.value,
                                })) &&
                            (7 >= input.value.length ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "string (@maxLength 7)",
                                    value: input.value,
                                }))) ||
                        ("number" === typeof input.value &&
                            Number.isFinite(input.value) &&
                            (3 <= input.value ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "number (@minimum 3)",
                                    value: input.value,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "(number | string)",
                            value: input.value,
                        });
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TagAtomicUnion",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "TagAtomicUnion.Type",
                                        value: elem,
                                    })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
            return input;
        };
        const stringify: any = (input: TagAtomicUnion): string => {
            const $string: any = (typia.createAssertStringify as any).string;
            const $number: any = (typia.createAssertStringify as any).number;
            const $throws: any = (typia.createAssertStringify as any).throws;
            const $so0: any = (input: any): any =>
                `{"value":${(() => {
                    if ("string" === typeof input.value)
                        return $string(input.value);
                    if ("number" === typeof input.value)
                        return $number(input.value);
                    $throws({
                        expected: "(number | string)",
                        value: input.value,
                    });
                })()}}`;
            return (() =>
                `[${input.map((elem: any) => $so0(elem)).join(",")}]`)();
        };
        return stringify(assert(input));
    },
    TagAtomicUnion.SPOILERS,
);
