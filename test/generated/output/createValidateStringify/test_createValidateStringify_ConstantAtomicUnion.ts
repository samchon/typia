import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_createValidateStringify_ConstantAtomicUnion =
    _test_validateStringify(
        "ConstantAtomicUnion",
        ConstantAtomicUnion.generate,
        (input: ConstantAtomicUnion): typia.IValidation<string> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<ConstantAtomicUnion> => {
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
                const errors: any = [] as any[];
                const $report: any = (
                    typia.createValidateStringify as any
                ).report(errors);
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ConstantAtomicUnion => {
                        const $vo0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "key" === input.key ||
                                    $report(_exceptionable, {
                                        path: _path + ".key",
                                        expected: '"key"',
                                        value: input.key,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ConstantAtomicUnion",
                                    value: input,
                                })) &&
                                input
                                    .map(
                                        (elem: any, _index1: number) =>
                                            false === elem ||
                                            1 === elem ||
                                            2 === elem ||
                                            "three" === elem ||
                                            "four" === elem ||
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        '("four" | "three" | 1 | 2 | __type | false)',
                                                    value: elem,
                                                })) &&
                                                $vo0(
                                                    elem,
                                                    _path + "[" + _index1 + "]",
                                                    true,
                                                )) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    '("four" | "three" | 1 | 2 | __type | false)',
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ConstantAtomicUnion",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                const success: any = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const stringify: any = (input: ConstantAtomicUnion): string => {
                const $string: any = (typia.createValidateStringify as any)
                    .string;
                const $number: any = (typia.createValidateStringify as any)
                    .number;
                const $throws: any = (typia.createValidateStringify as any)
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
            const output: any = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
        ConstantAtomicUnion.SPOILERS,
    );
