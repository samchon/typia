import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_assertEquals_ObjectGenericUnion = _test_assertEquals(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input: any): ObjectGenericUnion => {
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is ObjectGenericUnion => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.writer &&
                (null === input.answer ||
                    ("object" === typeof input.answer &&
                        null !== input.answer &&
                        $io1(input.answer, true && _exceptionable))) &&
                "string" === typeof input.id &&
                "number" === typeof input.hit &&
                Number.isFinite(input.hit) &&
                Array.isArray(input.contents) &&
                input.contents.every(
                    (elem: any, _index1: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $io2(elem, true && _exceptionable),
                ) &&
                "string" === typeof input.created_at &&
                (6 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            [
                                "writer",
                                "answer",
                                "id",
                                "hit",
                                "contents",
                                "created_at",
                            ].some((prop: any) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io1 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.id &&
                "number" === typeof input.hit &&
                Number.isFinite(input.hit) &&
                Array.isArray(input.contents) &&
                input.contents.every(
                    (elem: any, _index2: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $io2(elem, true && _exceptionable),
                ) &&
                "string" === typeof input.created_at &&
                (4 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["id", "hit", "contents", "created_at"].some(
                                (prop: any) => key === prop,
                            )
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io2 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.created_at &&
                "string" === typeof input.title &&
                "string" === typeof input.body &&
                Array.isArray(input.files) &&
                input.files.every(
                    (elem: any, _index3: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $io3(elem, true && _exceptionable),
                ) &&
                (5 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["id", "created_at", "title", "body", "files"].some(
                                (prop: any) => key === prop,
                            )
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io3 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.name &&
                (null === input.extension ||
                    "string" === typeof input.extension) &&
                "string" === typeof input.url &&
                (3 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["name", "extension", "url"].some(
                                (prop: any) => key === prop,
                            )
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io4 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.writer &&
                (null === input.answer ||
                    ("object" === typeof input.answer &&
                        null !== input.answer &&
                        $io1(input.answer, true && _exceptionable))) &&
                "string" === typeof input.id &&
                "number" === typeof input.hit &&
                Number.isFinite(input.hit) &&
                Array.isArray(input.contents) &&
                input.contents.every(
                    (elem: any, _index4: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $io5(elem, true && _exceptionable),
                ) &&
                "string" === typeof input.created_at &&
                (6 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            [
                                "writer",
                                "answer",
                                "id",
                                "hit",
                                "contents",
                                "created_at",
                            ].some((prop: any) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io5 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "number" === typeof input.score &&
                Number.isFinite(input.score) &&
                "string" === typeof input.id &&
                "string" === typeof input.created_at &&
                "string" === typeof input.title &&
                "string" === typeof input.body &&
                Array.isArray(input.files) &&
                input.files.every(
                    (elem: any, _index5: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $io3(elem, true && _exceptionable),
                ) &&
                (6 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            [
                                "score",
                                "id",
                                "created_at",
                                "title",
                                "body",
                                "files",
                            ].some((prop: any) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $iu0 = (input: any, _exceptionable: boolean = true): any =>
                (() => {
                    if ($io4(input, false && _exceptionable))
                        return $io4(input, true && _exceptionable);
                    if ($io0(input, false && _exceptionable))
                        return $io0(input, true && _exceptionable);
                    return false;
                })();
            return (
                "object" === typeof input && null !== input && $iu0(input, true)
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectGenericUnion => {
                const $guard = (typia.createAssertEquals as any).guard;
                const $join = (typia.createAssertEquals as any).join;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.writer ||
                        $guard(_exceptionable, {
                            path: _path + ".writer",
                            expected: "string",
                            value: input.writer,
                        })) &&
                    (null === input.answer ||
                        ((("object" === typeof input.answer &&
                            null !== input.answer) ||
                            $guard(_exceptionable, {
                                path: _path + ".answer",
                                expected:
                                    "(ObjectGenericUnion.ISaleAnswer | null)",
                                value: input.answer,
                            })) &&
                            $ao1(
                                input.answer,
                                _path + ".answer",
                                true && _exceptionable,
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".answer",
                            expected: "(ObjectGenericUnion.ISaleAnswer | null)",
                            value: input.answer,
                        })) &&
                    ("string" === typeof input.id ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "string",
                            value: input.id,
                        })) &&
                    (("number" === typeof input.hit &&
                        Number.isFinite(input.hit)) ||
                        $guard(_exceptionable, {
                            path: _path + ".hit",
                            expected: "number",
                            value: input.hit,
                        })) &&
                    (((Array.isArray(input.contents) ||
                        $guard(_exceptionable, {
                            path: _path + ".contents",
                            expected:
                                "Array<ObjectGenericUnion.ISaleArticle.IContent>",
                            value: input.contents,
                        })) &&
                        input.contents.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".contents[" +
                                            _index1 +
                                            "]",
                                        expected:
                                            "ObjectGenericUnion.ISaleArticle.IContent",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path + ".contents[" + _index1 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".contents[" + _index1 + "]",
                                    expected:
                                        "ObjectGenericUnion.ISaleArticle.IContent",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".contents",
                            expected:
                                "Array<ObjectGenericUnion.ISaleArticle.IContent>",
                            value: input.contents,
                        })) &&
                    ("string" === typeof input.created_at ||
                        $guard(_exceptionable, {
                            path: _path + ".created_at",
                            expected: "string",
                            value: input.created_at,
                        })) &&
                    (6 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (
                                [
                                    "writer",
                                    "answer",
                                    "id",
                                    "hit",
                                    "contents",
                                    "created_at",
                                ].some((prop: any) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.id ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "string",
                            value: input.id,
                        })) &&
                    (("number" === typeof input.hit &&
                        Number.isFinite(input.hit)) ||
                        $guard(_exceptionable, {
                            path: _path + ".hit",
                            expected: "number",
                            value: input.hit,
                        })) &&
                    (((Array.isArray(input.contents) ||
                        $guard(_exceptionable, {
                            path: _path + ".contents",
                            expected:
                                "Array<ObjectGenericUnion.ISaleArticle.IContent>",
                            value: input.contents,
                        })) &&
                        input.contents.every(
                            (elem: any, _index2: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".contents[" +
                                            _index2 +
                                            "]",
                                        expected:
                                            "ObjectGenericUnion.ISaleArticle.IContent",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path + ".contents[" + _index2 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".contents[" + _index2 + "]",
                                    expected:
                                        "ObjectGenericUnion.ISaleArticle.IContent",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".contents",
                            expected:
                                "Array<ObjectGenericUnion.ISaleArticle.IContent>",
                            value: input.contents,
                        })) &&
                    ("string" === typeof input.created_at ||
                        $guard(_exceptionable, {
                            path: _path + ".created_at",
                            expected: "string",
                            value: input.created_at,
                        })) &&
                    (4 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["id", "hit", "contents", "created_at"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.id ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "string",
                            value: input.id,
                        })) &&
                    ("string" === typeof input.created_at ||
                        $guard(_exceptionable, {
                            path: _path + ".created_at",
                            expected: "string",
                            value: input.created_at,
                        })) &&
                    ("string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "string",
                            value: input.title,
                        })) &&
                    ("string" === typeof input.body ||
                        $guard(_exceptionable, {
                            path: _path + ".body",
                            expected: "string",
                            value: input.body,
                        })) &&
                    (((Array.isArray(input.files) ||
                        $guard(_exceptionable, {
                            path: _path + ".files",
                            expected:
                                'Array<Omit<ObjectGenericUnion.IAttachmentFile, "id">>',
                            value: input.files,
                        })) &&
                        input.files.every(
                            (elem: any, _index3: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".files[" + _index3 + "]",
                                        expected:
                                            'Omit<ObjectGenericUnion.IAttachmentFile, "id">',
                                        value: elem,
                                    })) &&
                                    $ao3(
                                        elem,
                                        _path + ".files[" + _index3 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".files[" + _index3 + "]",
                                    expected:
                                        'Omit<ObjectGenericUnion.IAttachmentFile, "id">',
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".files",
                            expected:
                                'Array<Omit<ObjectGenericUnion.IAttachmentFile, "id">>',
                            value: input.files,
                        })) &&
                    (5 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (
                                [
                                    "id",
                                    "created_at",
                                    "title",
                                    "body",
                                    "files",
                                ].some((prop: any) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao3 = (
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
                    (null === input.extension ||
                        "string" === typeof input.extension ||
                        $guard(_exceptionable, {
                            path: _path + ".extension",
                            expected: "(null | string)",
                            value: input.extension,
                        })) &&
                    ("string" === typeof input.url ||
                        $guard(_exceptionable, {
                            path: _path + ".url",
                            expected: "string",
                            value: input.url,
                        })) &&
                    (3 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["name", "extension", "url"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao4 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.writer ||
                        $guard(_exceptionable, {
                            path: _path + ".writer",
                            expected: "string",
                            value: input.writer,
                        })) &&
                    (null === input.answer ||
                        ((("object" === typeof input.answer &&
                            null !== input.answer) ||
                            $guard(_exceptionable, {
                                path: _path + ".answer",
                                expected:
                                    "(ObjectGenericUnion.ISaleAnswer | null)",
                                value: input.answer,
                            })) &&
                            $ao1(
                                input.answer,
                                _path + ".answer",
                                true && _exceptionable,
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".answer",
                            expected: "(ObjectGenericUnion.ISaleAnswer | null)",
                            value: input.answer,
                        })) &&
                    ("string" === typeof input.id ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "string",
                            value: input.id,
                        })) &&
                    (("number" === typeof input.hit &&
                        Number.isFinite(input.hit)) ||
                        $guard(_exceptionable, {
                            path: _path + ".hit",
                            expected: "number",
                            value: input.hit,
                        })) &&
                    (((Array.isArray(input.contents) ||
                        $guard(_exceptionable, {
                            path: _path + ".contents",
                            expected:
                                "Array<ObjectGenericUnion.ISaleReview.IContent>",
                            value: input.contents,
                        })) &&
                        input.contents.every(
                            (elem: any, _index4: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".contents[" +
                                            _index4 +
                                            "]",
                                        expected:
                                            "ObjectGenericUnion.ISaleReview.IContent",
                                        value: elem,
                                    })) &&
                                    $ao5(
                                        elem,
                                        _path + ".contents[" + _index4 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".contents[" + _index4 + "]",
                                    expected:
                                        "ObjectGenericUnion.ISaleReview.IContent",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".contents",
                            expected:
                                "Array<ObjectGenericUnion.ISaleReview.IContent>",
                            value: input.contents,
                        })) &&
                    ("string" === typeof input.created_at ||
                        $guard(_exceptionable, {
                            path: _path + ".created_at",
                            expected: "string",
                            value: input.created_at,
                        })) &&
                    (6 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (
                                [
                                    "writer",
                                    "answer",
                                    "id",
                                    "hit",
                                    "contents",
                                    "created_at",
                                ].some((prop: any) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao5 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.score &&
                        Number.isFinite(input.score)) ||
                        $guard(_exceptionable, {
                            path: _path + ".score",
                            expected: "number",
                            value: input.score,
                        })) &&
                    ("string" === typeof input.id ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "string",
                            value: input.id,
                        })) &&
                    ("string" === typeof input.created_at ||
                        $guard(_exceptionable, {
                            path: _path + ".created_at",
                            expected: "string",
                            value: input.created_at,
                        })) &&
                    ("string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "string",
                            value: input.title,
                        })) &&
                    ("string" === typeof input.body ||
                        $guard(_exceptionable, {
                            path: _path + ".body",
                            expected: "string",
                            value: input.body,
                        })) &&
                    (((Array.isArray(input.files) ||
                        $guard(_exceptionable, {
                            path: _path + ".files",
                            expected:
                                'Array<Omit<ObjectGenericUnion.IAttachmentFile, "id">>',
                            value: input.files,
                        })) &&
                        input.files.every(
                            (elem: any, _index5: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".files[" + _index5 + "]",
                                        expected:
                                            'Omit<ObjectGenericUnion.IAttachmentFile, "id">',
                                        value: elem,
                                    })) &&
                                    $ao3(
                                        elem,
                                        _path + ".files[" + _index5 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".files[" + _index5 + "]",
                                    expected:
                                        'Omit<ObjectGenericUnion.IAttachmentFile, "id">',
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".files",
                            expected:
                                'Array<Omit<ObjectGenericUnion.IAttachmentFile, "id">>',
                            value: input.files,
                        })) &&
                    (6 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (
                                [
                                    "score",
                                    "id",
                                    "created_at",
                                    "title",
                                    "body",
                                    "files",
                                ].some((prop: any) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $au0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ($ao4(input, _path, false && _exceptionable))
                            return $ao4(input, _path, true && _exceptionable);
                        if ($ao0(input, _path, false && _exceptionable))
                            return $ao0(input, _path, true && _exceptionable);
                        return $guard(_exceptionable, {
                            path: _path,
                            expected:
                                "(ObjectGenericUnion.ISaleReview | ObjectGenericUnion.ISaleQuestion)",
                            value: input,
                        });
                    })();
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "(ObjectGenericUnion.ISaleQuestion | ObjectGenericUnion.ISaleReview)",
                            value: input,
                        })) &&
                        $au0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected:
                            "(ObjectGenericUnion.ISaleQuestion | ObjectGenericUnion.ISaleReview)",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
);
