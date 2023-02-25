import typia from "../../../../src";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectGenericArray =
    _test_assertStringify(
        "ObjectGenericArray",
        ObjectGenericArray.generate,
        (input: any): string => {
            const assert = (input: any): ObjectGenericArray => {
                const $guard = (typia.createAssertStringify as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectGenericArray => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.pagination &&
                            null !== input.pagination) ||
                            $guard(_exceptionable, {
                                path: _path + ".pagination",
                                expected:
                                    "Resolve<ObjectGenericArray.IPagination>",
                                value: input.pagination,
                            })) &&
                        $ao1(
                            input.pagination,
                            _path + ".pagination",
                            true && _exceptionable,
                        ) &&
                        (Array.isArray(input.data) ||
                            $guard(_exceptionable, {
                                path: _path + ".data",
                                expected:
                                    "Array<Resolve<ObjectGenericArray.IPerson>>",
                                value: input.data,
                            })) &&
                        input.data.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".data[" + _index1 + "]",
                                        expected:
                                            "Resolve<ObjectGenericArray.IPerson>",
                                        value: elem,
                                    })) &&
                                $ao2(
                                    elem,
                                    _path + ".data[" + _index1 + "]",
                                    true && _exceptionable,
                                ),
                        );
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.page &&
                            Number.isFinite(input.page)) ||
                            $guard(_exceptionable, {
                                path: _path + ".page",
                                expected: "number",
                                value: input.page,
                            })) &&
                        (("number" === typeof input.limit &&
                            Number.isFinite(input.limit)) ||
                            $guard(_exceptionable, {
                                path: _path + ".limit",
                                expected: "number",
                                value: input.limit,
                            })) &&
                        (("number" === typeof input.total_count &&
                            Number.isFinite(input.total_count)) ||
                            $guard(_exceptionable, {
                                path: _path + ".total_count",
                                expected: "number",
                                value: input.total_count,
                            })) &&
                        (("number" === typeof input.total_pages &&
                            Number.isFinite(input.total_pages)) ||
                            $guard(_exceptionable, {
                                path: _path + ".total_pages",
                                expected: "number",
                                value: input.total_pages,
                            }));
                    const $ao2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        (("number" === typeof input.age &&
                            Number.isFinite(input.age)) ||
                            $guard(_exceptionable, {
                                path: _path + ".age",
                                expected: "number",
                                value: input.age,
                            }));
                    return (
                        (("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "Resolve<ObjectGenericArray>",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const stringify = (input: ObjectGenericArray): string => {
                const $string = (typia.createAssertStringify as any).string;
                const $number = (typia.createAssertStringify as any).number;
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.page &&
                    "number" === typeof input.limit &&
                    "number" === typeof input.total_count &&
                    "number" === typeof input.total_pages;
                const $io2 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "number" === typeof input.age;
                const $so0 = (input: any): any =>
                    `{"pagination":${$so1(
                        input.pagination,
                    )},"data":${`[${input.data
                        .map(
                            (elem: any) =>
                                `{"name":${$string(elem.name)},"age":${$number(
                                    elem.age,
                                )}}`,
                        )
                        .join(",")}]`}}`;
                const $so1 = (input: any): any =>
                    `{"page":${$number(input.page)},"limit":${$number(
                        input.limit,
                    )},"total_count":${$number(
                        input.total_count,
                    )},"total_pages":${$number(input.total_pages)}}`;
                return $so0(input);
            };
            return stringify(assert(input));
        },
        ObjectGenericArray.SPOILERS,
    );
