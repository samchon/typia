import typia from "../../../../src";
import { _test_misc_validateClone } from "../../../internal/_test_misc_validateClone";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_misc_validateClone_ObjectUnionNonPredictable =
    _test_misc_validateClone<ObjectUnionNonPredictable>(
        ObjectUnionNonPredictable,
    )((input) =>
        ((
            input: any,
        ): typia.IValidation<
            typia.Primitive<
                Array<
                    ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
                >
            >
        > => {
            const validate = (
                input: any,
            ): typia.IValidation<
                Array<
                    ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
                >
            > => {
                const errors = [] as any[];
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
                        "boolean" === typeof (input.value as any).value;
                    const $io4 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        "number" === typeof (input.value as any).value &&
                        Number.isFinite((input.value as any).value);
                    const $io6 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        "string" === typeof (input.value as any).value;
                    const $iu0 = (input: any): any =>
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
                if (false === __is(input)) {
                    const $report = (typia.misc.validateClone as any).report(
                        errors,
                    );
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
                            $vo6(input, _path, false && _exceptionable) ||
                            $vo4(input, _path, false && _exceptionable) ||
                            $vo2(input, _path, false && _exceptionable);
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectUnionNonPredictable",
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
                                                    _path + "[" + _index1 + "]",
                                                    true,
                                                )) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectUnionNonPredictable",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                }
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const clone = (
                input: Array<
                    ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
                >,
            ): typia.Primitive<
                Array<
                    ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
                >
            > => {
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
                    $io6(input) || $io4(input) || $io2(input);
                const $throws = (typia.misc.validateClone as any).throws;
                const $cp0 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co0(elem)
                            : (elem as any),
                    );
                const $co0 = (input: any): any => ({
                    value:
                        "object" === typeof input.value && null !== input.value
                            ? $co1(input.value)
                            : (input.value as any),
                });
                const $co1 = (input: any): any => ({
                    value:
                        "object" === typeof input.value && null !== input.value
                            ? $cu0(input.value)
                            : (input.value as any),
                });
                const $co2 = (input: any): any => ({
                    value:
                        "object" === typeof input.value && null !== input.value
                            ? $co3(input.value)
                            : (input.value as any),
                });
                const $co3 = (input: any): any => ({
                    value: input.value as any,
                });
                const $co4 = (input: any): any => ({
                    value:
                        "object" === typeof input.value && null !== input.value
                            ? $co5(input.value)
                            : (input.value as any),
                });
                const $co5 = (input: any): any => ({
                    value: input.value as any,
                });
                const $co6 = (input: any): any => ({
                    value:
                        "object" === typeof input.value && null !== input.value
                            ? $co7(input.value)
                            : (input.value as any),
                });
                const $co7 = (input: any): any => ({
                    value: input.value as any,
                });
                const $cu0 = (input: any): any =>
                    (() => {
                        if ($io6(input)) return $co6(input);
                        if ($io4(input)) return $co4(input);
                        if ($io2(input)) return $co2(input);
                        $throws({
                            expected:
                                "(ObjectUnionNonPredictable.IWrapper<string> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<boolean>)",
                            value: input,
                        });
                    })();
                return Array.isArray(input) ? $cp0(input) : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    );
