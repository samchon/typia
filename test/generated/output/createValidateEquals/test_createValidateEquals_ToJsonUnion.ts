import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_createValidateEquals_ToJsonUnion = _test_validateEquals(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (
        input: any,
    ): typia.IValidation<
        Array<
            | string
            | number
            | ToJsonUnion.ICitizen
            | ToJsonUnion.IWrapper<boolean>
            | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>
            | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>
        >
    > => {
        const errors = [] as any[];
        const $report = (typia.createValidateEquals as any).report(errors);
        const $join = (typia.createValidateEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ToJsonUnion => {
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ("number" === typeof input.id &&
                        Number.isFinite(input.id)) ||
                        $report(_exceptionable, {
                            path: _path + ".id",
                            expected: "number",
                            value: input.id,
                        }),
                    "string" === typeof input.mobile ||
                        $report(_exceptionable, {
                            path: _path + ".mobile",
                            expected: "string",
                            value: input.mobile,
                        }),
                    "string" === typeof input.name ||
                        $report(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        }),
                    3 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                if (
                                    ["id", "mobile", "name"].some(
                                        (prop) => key === prop,
                                    )
                                )
                                    return true;
                                const value = input[key];
                                if (undefined === value) return true;
                                return $report(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "undefined",
                                    value: value,
                                });
                            })
                            .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
            const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    "function" === typeof input.toJSON ||
                        $report(_exceptionable, {
                            path: _path + ".toJSON",
                            expected: "unknown",
                            value: input.toJSON,
                        }),
                    1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                if (["toJSON"].some((prop) => key === prop))
                                    return true;
                                const value = input[key];
                                if (undefined === value) return true;
                                return $report(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "undefined",
                                    value: value,
                                });
                            })
                            .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
            const $vo2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    "function" === typeof input.toJSON ||
                        $report(_exceptionable, {
                            path: _path + ".toJSON",
                            expected: "unknown",
                            value: input.toJSON,
                        }),
                    1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                if (["toJSON"].some((prop) => key === prop))
                                    return true;
                                const value = input[key];
                                if (undefined === value) return true;
                                return $report(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "undefined",
                                    value: value,
                                });
                            })
                            .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
            const $vo3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    "function" === typeof input.toJSON ||
                        $report(_exceptionable, {
                            path: _path + ".toJSON",
                            expected: "unknown",
                            value: input.toJSON,
                        }),
                    1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                if (["toJSON"].some((prop) => key === prop))
                                    return true;
                                const value = input[key];
                                if (undefined === value) return true;
                                return $report(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "undefined",
                                    value: value,
                                });
                            })
                            .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
            const $vu0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                (() => {
                    if (undefined !== input.id)
                        return $vo0(input, _path, true && _exceptionable);
                    return (() => {
                        if ($vo1(input, _path, false && _exceptionable))
                            return $vo1(input, _path, true && _exceptionable);
                        if ($vo2(input, _path, false && _exceptionable))
                            return $vo2(input, _path, true && _exceptionable);
                        if ($vo3(input, _path, false && _exceptionable))
                            return $vo3(input, _path, true && _exceptionable);
                        return $report(_exceptionable, {
                            path: _path,
                            expected:
                                "(ToJsonUnion.IWrapper<boolean> | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>)",
                            value: input,
                        });
                    })();
                })();
            return (
                ((Array.isArray(input) ||
                    $report(true, {
                        path: _path + "",
                        expected:
                            "Array<(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem: any, _index1: number) =>
                                (null !== elem ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)",
                                        value: elem,
                                    })) &&
                                (undefined !== elem ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)",
                                        value: elem,
                                    })) &&
                                ("string" === typeof elem ||
                                    ("number" === typeof elem &&
                                        Number.isFinite(elem)) ||
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)",
                                            value: elem,
                                        })) &&
                                        $vu0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)",
                                        value: elem,
                                    })),
                        )
                        .every((flag: boolean) => flag)) ||
                $report(true, {
                    path: _path + "",
                    expected:
                        "Array<(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)>",
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
    },
);
