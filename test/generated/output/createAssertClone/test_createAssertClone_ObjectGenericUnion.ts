import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_createAssertClone_ObjectGenericUnion = _test_assertClone(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input: any): typia.Primitive<ObjectGenericUnion> => {
        const assert = (input: any): ObjectGenericUnion => {
            const $guard = (typia.createAssertClone as any).guard;
            const __is = (input: any): input is ObjectGenericUnion => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.writer &&
                    (null === input.answer ||
                        ("object" === typeof input.answer &&
                            null !== input.answer &&
                            $io1(input.answer))) &&
                    "string" === typeof input.id &&
                    "number" === typeof input.hit &&
                    Number.isFinite(input.hit) &&
                    Array.isArray(input.contents) &&
                    input.contents.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ) &&
                    "string" === typeof input.created_at;
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "number" === typeof input.hit &&
                    Number.isFinite(input.hit) &&
                    Array.isArray(input.contents) &&
                    input.contents.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ) &&
                    "string" === typeof input.created_at;
                const $io2 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.created_at &&
                    "string" === typeof input.title &&
                    "string" === typeof input.body &&
                    Array.isArray(input.files) &&
                    input.files.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io3(elem),
                    );
                const $io3 = (input: any): boolean =>
                    (null === input.extension ||
                        "string" === typeof input.extension) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.url;
                const $io4 = (input: any): boolean =>
                    "string" === typeof input.writer &&
                    (null === input.answer ||
                        ("object" === typeof input.answer &&
                            null !== input.answer &&
                            $io1(input.answer))) &&
                    "string" === typeof input.id &&
                    "number" === typeof input.hit &&
                    Number.isFinite(input.hit) &&
                    Array.isArray(input.contents) &&
                    input.contents.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io5(elem),
                    ) &&
                    "string" === typeof input.created_at;
                const $io5 = (input: any): boolean =>
                    "number" === typeof input.score &&
                    Number.isFinite(input.score) &&
                    "string" === typeof input.id &&
                    "string" === typeof input.created_at &&
                    "string" === typeof input.title &&
                    "string" === typeof input.body &&
                    Array.isArray(input.files) &&
                    input.files.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io3(elem),
                    );
                const $iu0 = (input: any): any =>
                    (() => {
                        if ($io0(input)) return $io0(input);
                        if ($io4(input)) return $io4(input);
                        return false;
                    })();
                return (
                    "object" === typeof input && null !== input && $iu0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectGenericUnion => {
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
                                        "(Resolve<ObjectGenericUnion.ISaleAnswer> | null)",
                                    value: input.answer,
                                })) &&
                                $ao1(
                                    input.answer,
                                    _path + ".answer",
                                    true && _exceptionable,
                                ))) &&
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
                        (Array.isArray(input.contents) ||
                            $guard(_exceptionable, {
                                path: _path + ".contents",
                                expected:
                                    "Array<Resolve<ObjectGenericUnion.ISaleArticle.IContent>>",
                                value: input.contents,
                            })) &&
                        input.contents.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".contents[" +
                                            _index1 +
                                            "]",
                                        expected:
                                            "Resolve<ObjectGenericUnion.ISaleArticle.IContent>",
                                        value: elem,
                                    })) &&
                                $ao2(
                                    elem,
                                    _path + ".contents[" + _index1 + "]",
                                    true && _exceptionable,
                                ),
                        ) &&
                        ("string" === typeof input.created_at ||
                            $guard(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "string",
                                value: input.created_at,
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
                        (Array.isArray(input.contents) ||
                            $guard(_exceptionable, {
                                path: _path + ".contents",
                                expected:
                                    "Array<Resolve<ObjectGenericUnion.ISaleArticle.IContent>>",
                                value: input.contents,
                            })) &&
                        input.contents.every(
                            (elem: any, _index2: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".contents[" +
                                            _index2 +
                                            "]",
                                        expected:
                                            "Resolve<ObjectGenericUnion.ISaleArticle.IContent>",
                                        value: elem,
                                    })) &&
                                $ao2(
                                    elem,
                                    _path + ".contents[" + _index2 + "]",
                                    true && _exceptionable,
                                ),
                        ) &&
                        ("string" === typeof input.created_at ||
                            $guard(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "string",
                                value: input.created_at,
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
                        (Array.isArray(input.files) ||
                            $guard(_exceptionable, {
                                path: _path + ".files",
                                expected:
                                    'Array<Resolve<Omit<ObjectGenericUnion.IAttachmentFile, "id">>>',
                                value: input.files,
                            })) &&
                        input.files.every(
                            (elem: any, _index3: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".files[" + _index3 + "]",
                                        expected:
                                            'Resolve<Omit<ObjectGenericUnion.IAttachmentFile, "id">>',
                                        value: elem,
                                    })) &&
                                $ao3(
                                    elem,
                                    _path + ".files[" + _index3 + "]",
                                    true && _exceptionable,
                                ),
                        );
                    const $ao3 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (null === input.extension ||
                            "string" === typeof input.extension ||
                            $guard(_exceptionable, {
                                path: _path + ".extension",
                                expected: "(null | string)",
                                value: input.extension,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        ("string" === typeof input.url ||
                            $guard(_exceptionable, {
                                path: _path + ".url",
                                expected: "string",
                                value: input.url,
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
                                        "(Resolve<ObjectGenericUnion.ISaleAnswer> | null)",
                                    value: input.answer,
                                })) &&
                                $ao1(
                                    input.answer,
                                    _path + ".answer",
                                    true && _exceptionable,
                                ))) &&
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
                        (Array.isArray(input.contents) ||
                            $guard(_exceptionable, {
                                path: _path + ".contents",
                                expected:
                                    "Array<Resolve<ObjectGenericUnion.ISaleReview.IContent>>",
                                value: input.contents,
                            })) &&
                        input.contents.every(
                            (elem: any, _index4: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".contents[" +
                                            _index4 +
                                            "]",
                                        expected:
                                            "Resolve<ObjectGenericUnion.ISaleReview.IContent>",
                                        value: elem,
                                    })) &&
                                $ao5(
                                    elem,
                                    _path + ".contents[" + _index4 + "]",
                                    true && _exceptionable,
                                ),
                        ) &&
                        ("string" === typeof input.created_at ||
                            $guard(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "string",
                                value: input.created_at,
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
                        (Array.isArray(input.files) ||
                            $guard(_exceptionable, {
                                path: _path + ".files",
                                expected:
                                    'Array<Resolve<Omit<ObjectGenericUnion.IAttachmentFile, "id">>>',
                                value: input.files,
                            })) &&
                        input.files.every(
                            (elem: any, _index5: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".files[" + _index5 + "]",
                                        expected:
                                            'Resolve<Omit<ObjectGenericUnion.IAttachmentFile, "id">>',
                                        value: elem,
                                    })) &&
                                $ao3(
                                    elem,
                                    _path + ".files[" + _index5 + "]",
                                    true && _exceptionable,
                                ),
                        );
                    const $au0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        $ao0(input, _path, false && _exceptionable) ||
                        $ao4(input, _path, false && _exceptionable) ||
                        $guard(_exceptionable, {
                            path: _path,
                            expected:
                                "(ObjectGenericUnion.ISaleQuestion | ObjectGenericUnion.ISaleReview)",
                            value: input,
                        });
                    return (
                        (("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "(Resolve<ObjectGenericUnion.ISaleQuestion> | Resolve<ObjectGenericUnion.ISaleReview>)",
                                value: input,
                            })) &&
                        $au0(input, _path + "", true)
                    );
                })(input, "$input", true);
            return input;
        };
        const clone = (
            input: ObjectGenericUnion,
        ): typia.Primitive<ObjectGenericUnion> => {
            const $throws = (typia.createAssertClone as any).throws;
            const $io0 = (input: any): boolean =>
                "string" === typeof input.writer &&
                (null === input.answer ||
                    ("object" === typeof input.answer &&
                        null !== input.answer &&
                        $io1(input.answer))) &&
                "string" === typeof input.id &&
                "number" === typeof input.hit &&
                Array.isArray(input.contents) &&
                input.contents.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                ) &&
                "string" === typeof input.created_at;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.id &&
                "number" === typeof input.hit &&
                Array.isArray(input.contents) &&
                input.contents.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                ) &&
                "string" === typeof input.created_at;
            const $io2 = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.created_at &&
                "string" === typeof input.title &&
                "string" === typeof input.body &&
                Array.isArray(input.files) &&
                input.files.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io3(elem),
                );
            const $io3 = (input: any): boolean =>
                (null === input.extension ||
                    "string" === typeof input.extension) &&
                "string" === typeof input.name &&
                "string" === typeof input.url;
            const $io4 = (input: any): boolean =>
                "string" === typeof input.writer &&
                (null === input.answer ||
                    ("object" === typeof input.answer &&
                        null !== input.answer &&
                        $io1(input.answer))) &&
                "string" === typeof input.id &&
                "number" === typeof input.hit &&
                Array.isArray(input.contents) &&
                input.contents.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io5(elem),
                ) &&
                "string" === typeof input.created_at;
            const $io5 = (input: any): boolean =>
                "number" === typeof input.score &&
                "string" === typeof input.id &&
                "string" === typeof input.created_at &&
                "string" === typeof input.title &&
                "string" === typeof input.body &&
                Array.isArray(input.files) &&
                input.files.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io3(elem),
                );
            const $iu0 = (input: any): any => $io0(input) || $io4(input);
            const $co0 = (input: any): any => ({
                writer: input.writer as any,
                answer:
                    "object" === typeof input.answer && null !== input.answer
                        ? $co1(input.answer)
                        : (input.answer as any),
                id: input.id as any,
                hit: input.hit as any,
                contents: Array.isArray(input.contents)
                    ? input.contents.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co2(elem)
                              : (elem as any),
                      )
                    : (input.contents as any),
                created_at: input.created_at as any,
            });
            const $co1 = (input: any): any => ({
                id: input.id as any,
                hit: input.hit as any,
                contents: Array.isArray(input.contents)
                    ? input.contents.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co2(elem)
                              : (elem as any),
                      )
                    : (input.contents as any),
                created_at: input.created_at as any,
            });
            const $co2 = (input: any): any => ({
                id: input.id as any,
                created_at: input.created_at as any,
                title: input.title as any,
                body: input.body as any,
                files: Array.isArray(input.files)
                    ? input.files.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co3(elem)
                              : (elem as any),
                      )
                    : (input.files as any),
            });
            const $co3 = (input: any): any => ({
                extension: input.extension as any,
                name: input.name as any,
                url: input.url as any,
            });
            const $co4 = (input: any): any => ({
                writer: input.writer as any,
                answer:
                    "object" === typeof input.answer && null !== input.answer
                        ? $co1(input.answer)
                        : (input.answer as any),
                id: input.id as any,
                hit: input.hit as any,
                contents: Array.isArray(input.contents)
                    ? input.contents.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co5(elem)
                              : (elem as any),
                      )
                    : (input.contents as any),
                created_at: input.created_at as any,
            });
            const $co5 = (input: any): any => ({
                score: input.score as any,
                id: input.id as any,
                created_at: input.created_at as any,
                title: input.title as any,
                body: input.body as any,
                files: Array.isArray(input.files)
                    ? input.files.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co3(elem)
                              : (elem as any),
                      )
                    : (input.files as any),
            });
            const $cu0 = (input: any): any =>
                (() => {
                    if ($io0(input)) return $co0(input);
                    if ($io4(input)) return $co4(input);
                    $throws({
                        expected:
                            "(ObjectGenericUnion.ISaleQuestion | ObjectGenericUnion.ISaleReview)",
                        value: input,
                    });
                })();
            return "object" === typeof input && null !== input
                ? $cu0(input)
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
    ObjectGenericUnion.SPOILERS,
);
