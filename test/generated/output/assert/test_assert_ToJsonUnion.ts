import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_assert_ToJsonUnion = _test_assert(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) =>
        ((
            input: any,
        ): Array<
            | string
            | number
            | ToJsonUnion.ICitizen
            | ToJsonUnion.IWrapper<boolean>
            | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>
            | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>
        > => {
            const __is: any = (
                input: any,
            ): input is Array<
                | string
                | number
                | ToJsonUnion.ICitizen
                | ToJsonUnion.IWrapper<boolean>
                | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>
                | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>
            > => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.mobile &&
                    "string" === typeof input.name;
                const $io1: any = (input: any): boolean =>
                    "function" === typeof input.toJSON;
                const $io2: any = (input: any): boolean =>
                    "function" === typeof input.toJSON;
                const $io3: any = (input: any): boolean =>
                    "function" === typeof input.toJSON;
                const $iu0: any = (input: any): any =>
                    (() => {
                        if (undefined !== input.id) return $io0(input);
                        return (() => {
                            if ($io3(input)) return $io3(input);
                            if ($io2(input)) return $io2(input);
                            if ($io1(input)) return $io1(input);
                            return false;
                        })();
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            null !== elem &&
                            undefined !== elem &&
                            ("string" === typeof elem ||
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                ("object" === typeof elem &&
                                    null !== elem &&
                                    $iu0(elem))),
                    )
                );
            };
            const $guard: any = (typia.assert as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<
                    | string
                    | number
                    | ToJsonUnion.ICitizen
                    | ToJsonUnion.IWrapper<boolean>
                    | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>
                    | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>
                > => {
                    const $ao0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.mobile ||
                            $guard(_exceptionable, {
                                path: _path + ".mobile",
                                expected: "string",
                                value: input.mobile,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }));
                    const $ao1: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        "function" === typeof input.toJSON ||
                        $guard(_exceptionable, {
                            path: _path + ".toJSON",
                            expected: "unknown",
                            value: input.toJSON,
                        });
                    const $ao2: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        "function" === typeof input.toJSON ||
                        $guard(_exceptionable, {
                            path: _path + ".toJSON",
                            expected: "unknown",
                            value: input.toJSON,
                        });
                    const $ao3: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        "function" === typeof input.toJSON ||
                        $guard(_exceptionable, {
                            path: _path + ".toJSON",
                            expected: "unknown",
                            value: input.toJSON,
                        });
                    const $au0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if (undefined !== input.id)
                                return $ao0(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return (
                                $ao3(input, _path, false && _exceptionable) ||
                                $ao2(input, _path, false && _exceptionable) ||
                                $ao1(input, _path, false && _exceptionable) ||
                                $guard(_exceptionable, {
                                    path: _path,
                                    expected:
                                        "(ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<boolean>)",
                                    value: input,
                                })
                            );
                        })();
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ToJsonUnion",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (null !== elem ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                                        value: elem,
                                    })) &&
                                (undefined !== elem ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                                        value: elem,
                                    })) &&
                                ("string" === typeof elem ||
                                    ("number" === typeof elem &&
                                        Number.isFinite(elem)) ||
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                                            value: elem,
                                        })) &&
                                        $au0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        ))),
                        )
                    );
                })(input, "$input", true);
            return input;
        })(input),
);
