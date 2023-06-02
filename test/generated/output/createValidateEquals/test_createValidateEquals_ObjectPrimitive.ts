import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_createValidateEquals_ObjectPrimitive = _test_validateEquals(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input: any): typia.IValidation<ObjectPrimitive> => {
        const __is: any = (
            input: any,
            _exceptionable: boolean = true,
        ): input is ObjectPrimitive => {
            const $io0: any = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.id &&
                ("md" === input.extension ||
                    "html" === input.extension ||
                    "txt" === input.extension) &&
                "string" === typeof input.title &&
                "string" === typeof input.body &&
                Array.isArray(input.files) &&
                input.files.every(
                    (elem: any, _index1: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $io1(elem, true && _exceptionable),
                ) &&
                "boolean" === typeof input.secret &&
                "string" === typeof input.created_at &&
                (7 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            [
                                "id",
                                "extension",
                                "title",
                                "body",
                                "files",
                                "secret",
                                "created_at",
                            ].some((prop: any) => key === prop)
                        )
                            return true;
                        const value: any = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io1: any = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "string" === typeof input.extension &&
                "string" === typeof input.url &&
                "string" === typeof input.created_at &&
                (5 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            [
                                "id",
                                "name",
                                "extension",
                                "url",
                                "created_at",
                            ].some((prop: any) => key === prop)
                        )
                            return true;
                        const value: any = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        };
        const errors: any = [] as any[];
        const $report: any = (typia.createValidateEquals as any).report(errors);
        const $join: any = (typia.createValidateEquals as any).join;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectPrimitive => {
                const $vo0: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.id ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            }),
                        "md" === input.extension ||
                            "html" === input.extension ||
                            "txt" === input.extension ||
                            $report(_exceptionable, {
                                path: _path + ".extension",
                                expected: '("html" | "md" | "txt")',
                                value: input.extension,
                            }),
                        "string" === typeof input.title ||
                            $report(_exceptionable, {
                                path: _path + ".title",
                                expected: "string",
                                value: input.title,
                            }),
                        "string" === typeof input.body ||
                            $report(_exceptionable, {
                                path: _path + ".body",
                                expected: "string",
                                value: input.body,
                            }),
                        ((Array.isArray(input.files) ||
                            $report(_exceptionable, {
                                path: _path + ".files",
                                expected: "Array<ObjectPrimitive.IFile>",
                                value: input.files,
                            })) &&
                            input.files
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".files[" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "ObjectPrimitive.IFile",
                                                value: elem,
                                            })) &&
                                            $vo1(
                                                elem,
                                                _path +
                                                    ".files[" +
                                                    _index1 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".files[" +
                                                _index1 +
                                                "]",
                                            expected: "ObjectPrimitive.IFile",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".files",
                                expected: "Array<ObjectPrimitive.IFile>",
                                value: input.files,
                            }),
                        "boolean" === typeof input.secret ||
                            $report(_exceptionable, {
                                path: _path + ".secret",
                                expected: "boolean",
                                value: input.secret,
                            }),
                        "string" === typeof input.created_at ||
                            $report(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "string",
                                value: input.created_at,
                            }),
                        7 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (
                                        [
                                            "id",
                                            "extension",
                                            "title",
                                            "body",
                                            "files",
                                            "secret",
                                            "created_at",
                                        ].some((prop: any) => key === prop)
                                    )
                                        return true;
                                    const value: any = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                const $vo1: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.id ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            }),
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                        "string" === typeof input.extension ||
                            $report(_exceptionable, {
                                path: _path + ".extension",
                                expected: "string",
                                value: input.extension,
                            }),
                        "string" === typeof input.url ||
                            $report(_exceptionable, {
                                path: _path + ".url",
                                expected: "string",
                                value: input.url,
                            }),
                        "string" === typeof input.created_at ||
                            $report(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "string",
                                value: input.created_at,
                            }),
                        5 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (
                                        [
                                            "id",
                                            "name",
                                            "extension",
                                            "url",
                                            "created_at",
                                        ].some((prop: any) => key === prop)
                                    )
                                        return true;
                                    const value: any = input[key];
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
                            expected: "ObjectPrimitive.IArticle",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "ObjectPrimitive.IArticle",
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
    },
);
