import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_validateStringify_ObjectUnionNonPredictable =
    _test_validateStringify(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        (input) =>
            ((
                input: Array<
                    ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
                >,
            ): typia.IValidation<string> => {
                const validate = (
                    input: any,
                ): typia.IValidation<
                    Array<
                        ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
                    >
                > => {
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
                    const errors = [] as any[];
                    const $report = (typia.validateStringify as any).report(
                        errors,
                    );
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is Array<
                            ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
                        > => {
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    ((("object" === typeof input.value &&
                                        null !== input.value) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected:
                                                "ObjectUnionNonPredictable.IPointer<ObjectUnionNonPredictable.IUnion>",
                                            value: input.value,
                                        })) &&
                                        $vo1(
                                            input.value,
                                            _path + ".value",
                                            true && _exceptionable,
                                        )) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected:
                                                "ObjectUnionNonPredictable.IPointer<ObjectUnionNonPredictable.IUnion>",
                                            value: input.value,
                                        }),
                                ].every((flag: boolean) => flag);
                            const $vo1 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    ((("object" === typeof input.value &&
                                        null !== input.value) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected:
                                                "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
                                            value: input.value,
                                        })) &&
                                        $vu0(
                                            input.value,
                                            _path + ".value",
                                            true && _exceptionable,
                                        )) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected:
                                                "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
                                            value: input.value,
                                        }),
                                ].every((flag: boolean) => flag);
                            const $vo2 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    ((("object" === typeof input.value &&
                                        null !== input.value) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected:
                                                "ObjectUnionNonPredictable.IPointer<boolean>",
                                            value: input.value,
                                        })) &&
                                        $vo3(
                                            input.value,
                                            _path + ".value",
                                            true && _exceptionable,
                                        )) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected:
                                                "ObjectUnionNonPredictable.IPointer<boolean>",
                                            value: input.value,
                                        }),
                                ].every((flag: boolean) => flag);
                            const $vo3 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    "boolean" === typeof input.value ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected: "boolean",
                                            value: input.value,
                                        }),
                                ].every((flag: boolean) => flag);
                            const $vo4 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    ((("object" === typeof input.value &&
                                        null !== input.value) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected:
                                                "ObjectUnionNonPredictable.IPointer<number>",
                                            value: input.value,
                                        })) &&
                                        $vo5(
                                            input.value,
                                            _path + ".value",
                                            true && _exceptionable,
                                        )) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected:
                                                "ObjectUnionNonPredictable.IPointer<number>",
                                            value: input.value,
                                        }),
                                ].every((flag: boolean) => flag);
                            const $vo5 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    ("number" === typeof input.value &&
                                        Number.isFinite(input.value)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected: "number",
                                            value: input.value,
                                        }),
                                ].every((flag: boolean) => flag);
                            const $vo6 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    ((("object" === typeof input.value &&
                                        null !== input.value) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected:
                                                "ObjectUnionNonPredictable.IPointer<string>",
                                            value: input.value,
                                        })) &&
                                        $vo7(
                                            input.value,
                                            _path + ".value",
                                            true && _exceptionable,
                                        )) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected:
                                                "ObjectUnionNonPredictable.IPointer<string>",
                                            value: input.value,
                                        }),
                                ].every((flag: boolean) => flag);
                            const $vo7 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    "string" === typeof input.value ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected: "string",
                                            value: input.value,
                                        }),
                                ].every((flag: boolean) => flag);
                            const $vu0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): any =>
                                $vo2(input, _path, false && _exceptionable) ||
                                $vo4(input, _path, false && _exceptionable) ||
                                $vo6(input, _path, false && _exceptionable);
                            return (
                                ((Array.isArray(input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected:
                                            "Array<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>",
                                        value: input,
                                    })) &&
                                    input
                                        .map(
                                            (elem: any, _index1: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
                                                        value: elem,
                                                    })) &&
                                                    $vo0(
                                                        elem,
                                                        _path +
                                                            "[" +
                                                            _index1 +
                                                            "]",
                                                        true,
                                                    )) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "Array<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    const success = 0 === errors.length;
                    return {
                        success,
                        errors,
                        data: success ? input : undefined,
                    } as any;
                };
                const stringify = (
                    input: Array<
                        ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
                    >,
                ): string => {
                    const $number = (typia.validateStringify as any).number;
                    const $string = (typia.validateStringify as any).string;
                    const $throws = (typia.validateStringify as any).throws;
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
                const output = validate(input) as any;
                if (output.success) output.data = stringify(input);
                return output;
            })(input),
        ObjectUnionNonPredictable.SPOILERS,
    );
