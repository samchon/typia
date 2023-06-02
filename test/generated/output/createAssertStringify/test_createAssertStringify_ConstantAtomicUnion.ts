import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_createAssertStringify_ConstantAtomicUnion =
    _test_assertStringify(
        "ConstantAtomicUnion",
        ConstantAtomicUnion.generate,
        (input: any): string => {
            const assert: any = (input: any): ConstantAtomicUnion => {
                const __is: any = (
                    input: any,
                ): input is ConstantAtomicUnion => {
                    const $io0: any = (input: any): boolean =>
                        "key" === input.key;
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                false === elem ||
                                1 === elem ||
                                2 === elem ||
                                "three" === elem ||
                                "four" === elem ||
                                ("object" === typeof elem &&
                                    null !== elem &&
                                    $io0(elem)),
                        )
                    );
                };
                const $guard: any = (typia.createAssertStringify as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ConstantAtomicUnion => {
                        const $ao0: any = (
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
                                    expected: "ConstantAtomicUnion",
                                    value: input,
                                })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    false === elem ||
                                    1 === elem ||
                                    2 === elem ||
                                    "three" === elem ||
                                    "four" === elem ||
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
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
            const stringify: any = (input: ConstantAtomicUnion): string => {
                const $string: any = (typia.createAssertStringify as any)
                    .string;
                const $number: any = (typia.createAssertStringify as any)
                    .number;
                const $throws: any = (typia.createAssertStringify as any)
                    .throws;
                const $so0: any = (input: any): any =>
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
                return (() =>
                    `[${input
                        .map((elem: any) =>
                            (() => {
                                if ("string" === typeof elem)
                                    return $string(elem);
                                if ("boolean" === typeof elem) return elem;
                                if ("number" === typeof elem)
                                    return $number(elem);
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
                        .join(",")}]`)();
            };
            return stringify(assert(input));
        },
        ConstantAtomicUnion.SPOILERS,
    );
