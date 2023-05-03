import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_assertStringify_ObjectUnionNonPredictable =
    _test_assertStringify(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        (input) =>
            ((input: any): string => {
                const assert = (
                    input: any,
                ): Array<
                    ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
                > => {
                    const $guard = (typia.assertStringify as any).guard;
                    const __is = (
                        input: any,
                    ): input is Array<
                        ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
                    > => {
                        const $io0 = (input: any): boolean =>
                            "object" === typeof input.value &&
                            null !== input.value &&
                            $io1(input.value);
                        const $io1 = (input: any): boolean =>
                            "object" === typeof input.value &&
                            null !== input.value &&
                            $iu0(input.value);
                        const $io2 = (input: any): boolean =>
                            "object" === typeof input.value &&
                            null !== input.value &&
                            "boolean" === typeof input.value.value;
                        const $io4 = (input: any): boolean =>
                            "object" === typeof input.value &&
                            null !== input.value &&
                            "number" === typeof input.value.value &&
                            Number.isFinite(input.value.value);
                        const $io6 = (input: any): boolean =>
                            "object" === typeof input.value &&
                            null !== input.value &&
                            "string" === typeof input.value.value;
                        const $iu0 = (input: any): any =>
                            (() => {
                                if ($io2(input)) return $io2(input);
                                if ($io4(input)) return $io4(input);
                                if ($io6(input)) return $io6(input);
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
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is Array<
                            ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
                        > => {
                            const $ao0 = (
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
                            const $ao1 = (
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
                            const $ao2 = (
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
                            const $ao3 = (
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
                            const $ao4 = (
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
                            const $ao5 = (
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
                            const $ao6 = (
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
                            const $ao7 = (
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
                            const $au0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): any =>
                                $ao2(input, _path, false && _exceptionable) ||
                                $ao4(input, _path, false && _exceptionable) ||
                                $ao6(input, _path, false && _exceptionable) ||
                                $guard(_exceptionable, {
                                    path: _path,
                                    expected:
                                        "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
                                    value: input,
                                });
                            return (
                                (Array.isArray(input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected:
                                            "Array<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>",
                                        value: input,
                                    })) &&
                                input.every(
                                    (elem: any, _index1: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
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
                const stringify = (
                    input: Array<
                        ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
                    >,
                ): string => {
                    const $number = (typia.assertStringify as any).number;
                    const $string = (typia.assertStringify as any).string;
                    const $throws = (typia.assertStringify as any).throws;
                    const $io1 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $iu0(input.value);
                    const $io2 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $io3(input.value);
                    const $io3 = (input: any): boolean =>
                        "boolean" === typeof input.value;
                    const $io4 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $io5(input.value);
                    const $io5 = (input: any): boolean =>
                        "number" === typeof input.value;
                    const $io6 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $io7(input.value);
                    const $io7 = (input: any): boolean =>
                        "string" === typeof input.value;
                    const $iu0 = (input: any): any =>
                        $io2(input) || $io4(input) || $io6(input);
                    const $so0 = (input: any): any =>
                        `{"value":${$so1(input.value)}}`;
                    const $so1 = (input: any): any =>
                        `{"value":${$su0(input.value)}}`;
                    const $so2 = (input: any): any =>
                        `{"value":${`{"value":${input.value.value}}`}}`;
                    const $so4 = (input: any): any =>
                        `{"value":${`{"value":${$number(
                            input.value.value,
                        )}}`}}`;
                    const $so6 = (input: any): any =>
                        `{"value":${`{"value":${$string(
                            input.value.value,
                        )}}`}}`;
                    const $su0 = (input: any): any =>
                        (() => {
                            if ($io2(input)) return $so2(input);
                            if ($io4(input)) return $so4(input);
                            if ($io6(input)) return $so6(input);
                            $throws({
                                expected:
                                    "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
                                value: input,
                            });
                        })();
                    return `[${input
                        .map((elem: any) => $so0(elem))
                        .join(",")}]`;
                };
                return stringify(assert(input));
            })(input),
        ObjectUnionNonPredictable.SPOILERS,
    );
