import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_assertPrune_ObjectUnionNonPredictable = _test_assertPrune(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) =>
        ((
            input: any,
        ): Array<
            ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
        > => {
            const assert: any = (
                input: any,
            ): Array<
                ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
            > => {
                const __is: any = (
                    input: any,
                ): input is Array<
                    ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
                > => {
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
                const $guard: any = (typia.assertPrune as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<
                        ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
                    > => {
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
            const prune: any = (
                input: Array<
                    ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
                >,
            ): void => {
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
                const $throws: any = (typia.assertPrune as any).throws;
                const $po0: any = (input: any): any => {
                    if ("object" === typeof input.value && null !== input.value)
                        $po1(input.value);
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po1: any = (input: any): any => {
                    if ("object" === typeof input.value && null !== input.value)
                        $pu0(input.value);
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po2: any = (input: any): any => {
                    if ("object" === typeof input.value && null !== input.value)
                        $po3(input.value);
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po3: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po4: any = (input: any): any => {
                    if ("object" === typeof input.value && null !== input.value)
                        $po5(input.value);
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po5: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po6: any = (input: any): any => {
                    if ("object" === typeof input.value && null !== input.value)
                        $po7(input.value);
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po7: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                if (Array.isArray(input))
                    (() =>
                        input.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $po0(elem);
                        }))();
            };
            assert(input);
            prune(input);
            return input;
        })(input),
    ObjectUnionNonPredictable.SPOILERS,
);
