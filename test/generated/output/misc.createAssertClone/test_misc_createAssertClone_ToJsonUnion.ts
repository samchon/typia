import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_misc_assertClone_ToJsonUnion =
    _test_misc_assertClone<ToJsonUnion>(ToJsonUnion)(
        (input: any): typia.Primitive<ToJsonUnion> => {
            const assert = (input: any): ToJsonUnion => {
                const __is = (input: any): input is ToJsonUnion => {
                    const $io0 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.mobile &&
                        "string" === typeof input.name;
                    const $io1 = (input: any): boolean =>
                        "function" === typeof input.toJSON;
                    const $io2 = (input: any): boolean =>
                        "function" === typeof input.toJSON;
                    const $io3 = (input: any): boolean =>
                        "function" === typeof input.toJSON;
                    const $iu0 = (input: any): any =>
                        (() => {
                            if (undefined !== input.id) return $io0(input);
                            else
                                return (() => {
                                    if ($io3(input)) return $io3(input);
                                    else if ($io2(input)) return $io2(input);
                                    else if ($io1(input)) return $io1(input);
                                    else return false;
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
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ToJsonUnion => {
                        const $guard = (typia.misc.createAssertClone as any)
                            .guard;
                        const $ao0 = (
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
                        const $ao1 = (
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
                        const $ao2 = (
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
                        const $ao3 = (
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
                        const $au0 = (
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
                                else
                                    return (
                                        $ao3(
                                            input,
                                            _path,
                                            false && _exceptionable,
                                        ) ||
                                        $ao2(
                                            input,
                                            _path,
                                            false && _exceptionable,
                                        ) ||
                                        $ao1(
                                            input,
                                            _path,
                                            false && _exceptionable,
                                        ) ||
                                        $guard(_exceptionable, {
                                            path: _path,
                                            expected:
                                                "(ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<boolean>)",
                                            value: input,
                                        })
                                    );
                            })();
                        return (
                            ((Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ToJsonUnion",
                                    value: input,
                                })) &&
                                input.every(
                                    (elem: any, _index1: number) =>
                                        (null !== elem ||
                                            $guard(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                                                value: elem,
                                            })) &&
                                        (undefined !== elem ||
                                            $guard(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
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
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                                                    value: elem,
                                                })) &&
                                                $au0(
                                                    elem,
                                                    _path + "[" + _index1 + "]",
                                                    true,
                                                )) ||
                                            $guard(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                                                value: elem,
                                            })),
                                )) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ToJsonUnion",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone = (
                input: ToJsonUnion,
            ): typia.Primitive<ToJsonUnion> => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.mobile &&
                    "string" === typeof input.name;
                const $io4 = (input: any): boolean =>
                    "string" === typeof input.manufacturer &&
                    "string" === typeof input.brand &&
                    "string" === typeof input.name;
                const $throws = (typia.misc.createAssertClone as any).throws;
                const $cp0 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        "function" === typeof elem.toJSON
                            ? "object" === typeof elem.toJSON() &&
                              null !== elem.toJSON()
                                ? $cu0(elem.toJSON())
                                : (elem.toJSON() as any)
                            : "object" === typeof elem && null !== elem
                            ? $co0(elem)
                            : (elem as any),
                    );
                const $co0 = (input: any): any => ({
                    id: input.id as any,
                    mobile: input.mobile as any,
                    name: input.name as any,
                });
                const $co4 = (input: any): any => ({
                    manufacturer: input.manufacturer as any,
                    brand: input.brand as any,
                    name: input.name as any,
                });
                const $cu0 = (input: any): any =>
                    (() => {
                        if (undefined !== input.id) return $co0(input);
                        else if (undefined !== input.manufacturer)
                            return $co4(input);
                        else
                            $throws({
                                expected:
                                    "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct)",
                                value: input,
                            });
                    })();
                return Array.isArray(input) ? $cp0(input) : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        },
    );
