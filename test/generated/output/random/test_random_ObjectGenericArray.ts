import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_random_ObjectGenericArray = _test_random(
    "ObjectGenericArray",
    () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<ObjectGenericArray> => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                pagination: $ro1(_recursive, _recursive ? 1 + _depth : _depth),
                data: (generator?.array ?? $generator.array)(() =>
                    $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                ),
            });
            const $ro1 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                page:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
                limit:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
                total_count:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
                total_pages:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            });
            const $ro2 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                name:
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
                age:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            });
            return $ro0();
        })(),
    (input: any): typia.Primitive<ObjectGenericArray> => {
        const $guard = (typia.createAssert as any).guard;
        const __is = (
            input: any,
        ): input is typia.Primitive<ObjectGenericArray> => {
            const $io0 = (input: any): boolean =>
                "object" === typeof input.pagination &&
                null !== input.pagination &&
                $io1(input.pagination) &&
                Array.isArray(input.data) &&
                input.data.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                );
            const $io1 = (input: any): boolean =>
                "number" === typeof input.page &&
                Number.isFinite(input.page) &&
                "number" === typeof input.limit &&
                Number.isFinite(input.limit) &&
                "number" === typeof input.total_count &&
                Number.isFinite(input.total_count) &&
                "number" === typeof input.total_pages &&
                Number.isFinite(input.total_pages);
            const $io2 = (input: any): boolean =>
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age);
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<ObjectGenericArray> => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("object" === typeof input.pagination &&
                        null !== input.pagination) ||
                        $guard(_exceptionable, {
                            path: _path + ".pagination",
                            expected: "Resolve<ObjectGenericArray.IPagination>",
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
    },
);
