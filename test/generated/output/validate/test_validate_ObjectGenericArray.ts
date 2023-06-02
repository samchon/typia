import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_validate_ObjectGenericArray = _test_validate(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<
            ObjectGenericArray.IPage<ObjectGenericArray.IPerson>
        > => {
            const __is: any = (
                input: any,
            ): input is ObjectGenericArray.IPage<ObjectGenericArray.IPerson> => {
                const $io0: any = (input: any): boolean =>
                    "object" === typeof input.pagination &&
                    null !== input.pagination &&
                    $io1(input.pagination) &&
                    Array.isArray(input.data) &&
                    input.data.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    );
                const $io1: any = (input: any): boolean =>
                    "number" === typeof input.page &&
                    Number.isFinite(input.page) &&
                    "number" === typeof input.limit &&
                    Number.isFinite(input.limit) &&
                    "number" === typeof input.total_count &&
                    Number.isFinite(input.total_count) &&
                    "number" === typeof input.total_pages &&
                    Number.isFinite(input.total_pages);
                const $io2: any = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "number" === typeof input.age &&
                    Number.isFinite(input.age);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const errors: any = [] as any[];
            const $report: any = (typia.validate as any).report(errors);
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectGenericArray.IPage<ObjectGenericArray.IPerson> => {
                    const $vo0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((("object" === typeof input.pagination &&
                                null !== input.pagination) ||
                                $report(_exceptionable, {
                                    path: _path + ".pagination",
                                    expected: "ObjectGenericArray.IPagination",
                                    value: input.pagination,
                                })) &&
                                $vo1(
                                    input.pagination,
                                    _path + ".pagination",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".pagination",
                                    expected: "ObjectGenericArray.IPagination",
                                    value: input.pagination,
                                }),
                            ((Array.isArray(input.data) ||
                                $report(_exceptionable, {
                                    path: _path + ".data",
                                    expected:
                                        "Array<ObjectGenericArray.IPerson>",
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
                                                        "ObjectGenericArray.IPerson",
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
                                                    "ObjectGenericArray.IPerson",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".data",
                                    expected:
                                        "Array<ObjectGenericArray.IPerson>",
                                    value: input.data,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo1: any = (
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
                        ].every((flag: boolean) => flag);
                    const $vo2: any = (
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
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectGenericArray",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "ObjectGenericArray",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            const success: any = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        })(input),
    ObjectGenericArray.SPOILERS,
);
