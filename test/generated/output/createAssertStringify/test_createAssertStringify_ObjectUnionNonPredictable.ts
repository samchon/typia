import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_createAssertStringify_ObjectUnionNonPredictable =
    _test_assertStringify(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        (input: any): string => {
            const assert: any = (input: any): ObjectUnionNonPredictable => {
                const __is: any = (
                    input: any,
                ): input is ObjectUnionNonPredictable => {
                    const $io0: any = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $io1(input.value);
                    const $io1: any = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $iu0(input.value);
                    const $io2: any = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        "boolean" === typeof input.value.value;
                    const $io4: any = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        "number" === typeof input.value.value &&
                        Number.isFinite(input.value.value);
                    const $io6: any = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        "string" === typeof input.value.value;
                    const $iu0: any = (input: any): any =>
                        (() => {
                            if ($io6(input)) return $io6(input);
                            if ($io4(input)) return $io4(input);
                            if ($io2(input)) return $io2(input);
                            return false;
                        })();
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
                    ): input is ObjectUnionNonPredictable => {
                        const $ao0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.value &&
                                null !== input.value) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        "ObjectUnionNonPredictable.IPointer<ObjectUnionNonPredictable.IUnion>",
                                    value: input.value,
                                })) &&
                            $ao1(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            );
                        const $ao1: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.value &&
                                null !== input.value) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
                                    value: input.value,
                                })) &&
                            $au0(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            );
                        const $ao2: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.value &&
                                null !== input.value) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        "ObjectUnionNonPredictable.IPointer<boolean>",
                                    value: input.value,
                                })) &&
                            $ao3(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            );
                        const $ao3: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            "boolean" === typeof input.value ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "boolean",
                                value: input.value,
                            });
                        const $ao4: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.value &&
                                null !== input.value) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        "ObjectUnionNonPredictable.IPointer<number>",
                                    value: input.value,
                                })) &&
                            $ao5(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            );
                        const $ao5: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("number" === typeof input.value &&
                                Number.isFinite(input.value)) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            });
                        const $ao6: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.value &&
                                null !== input.value) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        "ObjectUnionNonPredictable.IPointer<string>",
                                    value: input.value,
                                })) &&
                            $ao7(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            );
                        const $ao7: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            "string" === typeof input.value ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "string",
                                value: input.value,
                            });
                        const $au0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            $ao6(input, _path, false && _exceptionable) ||
                            $ao4(input, _path, false && _exceptionable) ||
                            $ao2(input, _path, false && _exceptionable) ||
                            $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    "(ObjectUnionNonPredictable.IWrapper<string> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<boolean>)",
                                value: input,
                            });
                        return (
                            (Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectUnionNonPredictable",
                                    value: input,
                                })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
                                            value: elem,
                                        })) &&
                                    $ao0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    ),
                            )
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify: any = (
                input: ObjectUnionNonPredictable,
            ): string => {
                const $io1: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $iu0(input.value);
                const $io2: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io3(input.value);
                const $io3: any = (input: any): boolean =>
                    "boolean" === typeof input.value;
                const $io4: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io5(input.value);
                const $io5: any = (input: any): boolean =>
                    "number" === typeof input.value;
                const $io6: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io7(input.value);
                const $io7: any = (input: any): boolean =>
                    "string" === typeof input.value;
                const $iu0: any = (input: any): any =>
                    $io6(input) || $io4(input) || $io2(input);
                const $number: any = (typia.createAssertStringify as any)
                    .number;
                const $string: any = (typia.createAssertStringify as any)
                    .string;
                const $throws: any = (typia.createAssertStringify as any)
                    .throws;
                const $so0: any = (input: any): any =>
                    `{"value":${$so1(input.value)}}`;
                const $so1: any = (input: any): any =>
                    `{"value":${$su0(input.value)}}`;
                const $so2: any = (input: any): any =>
                    `{"value":${`{"value":${input.value.value}}`}}`;
                const $so4: any = (input: any): any =>
                    `{"value":${`{"value":${$number(input.value.value)}}`}}`;
                const $so6: any = (input: any): any =>
                    `{"value":${`{"value":${$string(input.value.value)}}`}}`;
                const $su0: any = (input: any): any =>
                    (() => {
                        if ($io6(input)) return $so6(input);
                        if ($io4(input)) return $so4(input);
                        if ($io2(input)) return $so2(input);
                        $throws({
                            expected:
                                "(ObjectUnionNonPredictable.IWrapper<string> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<boolean>)",
                            value: input,
                        });
                    })();
                return (() =>
                    `[${input.map((elem: any) => $so0(elem)).join(",")}]`)();
            };
            return stringify(assert(input));
        },
        ObjectUnionNonPredictable.SPOILERS,
    );
