import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_createAssertStringify_ConstantAtomicUnion =
    _test_assertStringify(
        "ConstantAtomicUnion",
        ConstantAtomicUnion.generate,
        (input: any): string => {
            const assert = (input: any): ConstantAtomicUnion => {
                const $guard = (typia.createAssertStringify as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ConstantAtomicUnion => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        "key" === input.key ||
                        $guard(_exceptionable, {
                            path: _path + ".key",
                            expected: '"key"',
                            value: input.key,
                        });
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    'Array<("four" | "three" | 1 | 2 | __type | false)>',
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                false === elem ||
                                1 === elem ||
                                2 === elem ||
                                "three" === elem ||
                                "four" === elem ||
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            '("four" | "three" | 1 | 2 | __type | false)',
                                        value: elem,
                                    })) &&
                                    $ao0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    )),
                        )
                    );
                })(input, "$input", true);
                return input;
            };
            const stringify = (input: ConstantAtomicUnion): string => {
                const $string = (typia.createAssertStringify as any).string;
                const $number = (typia.createAssertStringify as any).number;
                const $throws = (typia.createAssertStringify as any).throws;
                const $so0 = (input: any): any =>
                    `{"key":${(() => {
                        if ("string" === typeof input.key)
                            return $string(input.key);
                        if ("string" === typeof input.key)
                            return '"' + input.key + '"';
                        $throws({
                            expected: '"key"',
                            value: input.key,
                        });
                    })()}}`;
                return `[${input
                    .map((elem: any) =>
                        (() => {
                            if ("string" === typeof elem) return $string(elem);
                            if ("boolean" === typeof elem) return elem;
                            if ("number" === typeof elem) return $number(elem);
                            if ("string" === typeof elem)
                                return '"' + elem + '"';
                            if ("object" === typeof elem && null !== elem)
                                return $so0(elem);
                            $throws({
                                expected:
                                    '("four" | "three" | 1 | 2 | __type | false)',
                                value: elem,
                            });
                        })(),
                    )
                    .join(",")}]`;
            };
            return stringify(assert(input));
        },
        ConstantAtomicUnion.SPOILERS,
    );
