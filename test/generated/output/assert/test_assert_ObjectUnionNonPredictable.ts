import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_assert_ObjectUnionNonPredictable = _test_assert(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) =>
        ((
            input: any,
        ): Array<
            ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
        > => {
            const $guard = (typia.assert as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectUnionNonPredictable => {
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
                                "Resolve<ObjectUnionNonPredictable.IPointer<ObjectUnionNonPredictable.IUnion>>",
                            value: input.value,
                        })) &&
                    $ao1(input.value, _path + ".value", true && _exceptionable);
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
                                "(Resolve<ObjectUnionNonPredictable.IWrapper<boolean>> | Resolve<ObjectUnionNonPredictable.IWrapper<number>> | Resolve<ObjectUnionNonPredictable.IWrapper<string>>)",
                            value: input.value,
                        })) &&
                    $au0(input.value, _path + ".value", true && _exceptionable);
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
                                "Resolve<ObjectUnionNonPredictable.IPointer<boolean>>",
                            value: input.value,
                        })) &&
                    $ao3(input.value, _path + ".value", true && _exceptionable);
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
                                "Resolve<ObjectUnionNonPredictable.IPointer<number>>",
                            value: input.value,
                        })) &&
                    $ao5(input.value, _path + ".value", true && _exceptionable);
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
                                "Resolve<ObjectUnionNonPredictable.IPointer<string>>",
                            value: input.value,
                        })) &&
                    $ao7(input.value, _path + ".value", true && _exceptionable);
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
                                "Array<Resolve<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "Resolve<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        })(input),
    ObjectUnionNonPredictable.SPOILERS,
);
