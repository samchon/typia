import typia from "../../../../src";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ObjectGenericArray = _test_validateEquals(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) =>
        ((input: any): typia.IValidation<ObjectGenericArray> => {
            const errors = [] as any[];
            const $report = (typia.validateEquals as any).report(errors);
            const $join = (typia.validateEquals as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectGenericArray => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ((("object" === typeof input.pagination &&
                            null !== input.pagination) ||
                            $report(_exceptionable, {
                                path: _path + ".pagination",
                                expected:
                                    "Resolve<ObjectGenericArray.IPagination>",
                                value: input.pagination,
                            })) &&
                            $vo1(
                                input.pagination,
                                _path + ".pagination",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".pagination",
                                expected:
                                    "Resolve<ObjectGenericArray.IPagination>",
                                value: input.pagination,
                            }),
                        ((Array.isArray(input.data) ||
                            $report(_exceptionable, {
                                path: _path + ".data",
                                expected:
                                    "Array<Resolve<ObjectGenericArray.IPerson>>",
                                value: input.data,
                            })) &&
                            input.data
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".data[" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "Resolve<ObjectGenericArray.IPerson>",
                                                value: elem,
                                            })) &&
                                            $vo2(
                                                elem,
                                                _path +
                                                    ".data[" +
                                                    _index1 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".data[" +
                                                _index1 +
                                                "]",
                                            expected:
                                                "Resolve<ObjectGenericArray.IPerson>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".data",
                                expected:
                                    "Array<Resolve<ObjectGenericArray.IPerson>>",
                                value: input.data,
                            }),
                        2 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        ["pagination", "data"].some(
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
                        ("number" === typeof input.page &&
                            Number.isFinite(input.page)) ||
                            $report(_exceptionable, {
                                path: _path + ".page",
                                expected: "number",
                                value: input.page,
                            }),
                        ("number" === typeof input.limit &&
                            Number.isFinite(input.limit)) ||
                            $report(_exceptionable, {
                                path: _path + ".limit",
                                expected: "number",
                                value: input.limit,
                            }),
                        ("number" === typeof input.total_count &&
                            Number.isFinite(input.total_count)) ||
                            $report(_exceptionable, {
                                path: _path + ".total_count",
                                expected: "number",
                                value: input.total_count,
                            }),
                        ("number" === typeof input.total_pages &&
                            Number.isFinite(input.total_pages)) ||
                            $report(_exceptionable, {
                                path: _path + ".total_pages",
                                expected: "number",
                                value: input.total_pages,
                            }),
                        4 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        [
                                            "page",
                                            "limit",
                                            "total_count",
                                            "total_pages",
                                        ].some((prop) => key === prop)
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
                const $vo2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                        ("number" === typeof input.age &&
                            Number.isFinite(input.age)) ||
                            $report(_exceptionable, {
                                path: _path + ".age",
                                expected: "number",
                                value: input.age,
                            }),
                        2 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        ["name", "age"].some(
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
                return (
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Resolve<ObjectGenericArray>",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Resolve<ObjectGenericArray>",
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
        })(input),
);
