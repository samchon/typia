import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_createAssertStringify_ObjectGenericUnion =
    _test_assertStringify(
        "ObjectGenericUnion",
        ObjectGenericUnion.generate,
        (input: any): string => {
            const assert: any = (input: any): ObjectGenericUnion => {
                const __is: any = (input: any): input is ObjectGenericUnion => {
                    const $io0: any = (input: any): boolean =>
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
                    const $io1: any = (input: any): boolean =>
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
                    const $io2: any = (input: any): boolean =>
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
                    const $io3: any = (input: any): boolean =>
                        (null === input.extension ||
                            "string" === typeof input.extension) &&
                        "string" === typeof input.name &&
                        "string" === typeof input.url;
                    const $io4: any = (input: any): boolean =>
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
                    const $io5: any = (input: any): boolean =>
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
                    const $iu0: any = (input: any): any =>
                        (() => {
                            if ($io4(input)) return $io4(input);
                            if ($io0(input)) return $io0(input);
                            return false;
                        })();
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $iu0(input)
                    );
                };
                const $guard: any = (typia.createAssertStringify as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectGenericUnion => {
                        const $ao0: any = (
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
                                        "Array<ObjectGenericUnion.ISaleArticle.IContent>",
                                    value: input.contents,
                                })) &&
                            input.contents.every(
                                (elem: any, _index1: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
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
                                    ),
                            ) &&
                            ("string" === typeof input.created_at ||
                                $guard(_exceptionable, {
                                    path: _path + ".created_at",
                                    expected: "string",
                                    value: input.created_at,
                                }));
                        const $ao1: any = (
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
                                        "Array<ObjectGenericUnion.ISaleArticle.IContent>",
                                    value: input.contents,
                                })) &&
                            input.contents.every(
                                (elem: any, _index2: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
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
                                    ),
                            ) &&
                            ("string" === typeof input.created_at ||
                                $guard(_exceptionable, {
                                    path: _path + ".created_at",
                                    expected: "string",
                                    value: input.created_at,
                                }));
                        const $ao2: any = (
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
                                        'Array<Omit<ObjectGenericUnion.IAttachmentFile, "id">>',
                                    value: input.files,
                                })) &&
                            input.files.every(
                                (elem: any, _index3: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".files[" +
                                                _index3 +
                                                "]",
                                            expected:
                                                'Omit<ObjectGenericUnion.IAttachmentFile, "id">',
                                            value: elem,
                                        })) &&
                                    $ao3(
                                        elem,
                                        _path + ".files[" + _index3 + "]",
                                        true && _exceptionable,
                                    ),
                            );
                        const $ao3: any = (
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
                        const $ao4: any = (
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
                                        "Array<ObjectGenericUnion.ISaleReview.IContent>",
                                    value: input.contents,
                                })) &&
                            input.contents.every(
                                (elem: any, _index4: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
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
                                    ),
                            ) &&
                            ("string" === typeof input.created_at ||
                                $guard(_exceptionable, {
                                    path: _path + ".created_at",
                                    expected: "string",
                                    value: input.created_at,
                                }));
                        const $ao5: any = (
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
                                        'Array<Omit<ObjectGenericUnion.IAttachmentFile, "id">>',
                                    value: input.files,
                                })) &&
                            input.files.every(
                                (elem: any, _index5: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".files[" +
                                                _index5 +
                                                "]",
                                            expected:
                                                'Omit<ObjectGenericUnion.IAttachmentFile, "id">',
                                            value: elem,
                                        })) &&
                                    $ao3(
                                        elem,
                                        _path + ".files[" + _index5 + "]",
                                        true && _exceptionable,
                                    ),
                            );
                        const $au0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            $ao4(input, _path, false && _exceptionable) ||
                            $ao0(input, _path, false && _exceptionable) ||
                            $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    "(ObjectGenericUnion.ISaleReview | ObjectGenericUnion.ISaleQuestion)",
                                value: input,
                            });
                        return (
                            (("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected:
                                        "(ObjectGenericUnion.ISaleQuestion | ObjectGenericUnion.ISaleReview)",
                                    value: input,
                                })) &&
                            $au0(input, _path + "", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify: any = (input: ObjectGenericUnion): string => {
                const $io0: any = (input: any): boolean =>
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
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ) &&
                    "string" === typeof input.created_at;
                const $io1: any = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "number" === typeof input.hit &&
                    Array.isArray(input.contents) &&
                    input.contents.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ) &&
                    "string" === typeof input.created_at;
                const $io2: any = (input: any): boolean =>
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
                const $io3: any = (input: any): boolean =>
                    (null === input.extension ||
                        "string" === typeof input.extension) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.url;
                const $io4: any = (input: any): boolean =>
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
                            "object" === typeof elem &&
                            null !== elem &&
                            $io5(elem),
                    ) &&
                    "string" === typeof input.created_at;
                const $io5: any = (input: any): boolean =>
                    "number" === typeof input.score &&
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
                const $string: any = (typia.createAssertStringify as any)
                    .string;
                const $number: any = (typia.createAssertStringify as any)
                    .number;
                const $throws: any = (typia.createAssertStringify as any)
                    .throws;
                const $so0: any = (input: any): any =>
                    `{"writer":${$string(input.writer)},"answer":${
                        null !== input.answer ? $so1(input.answer) : "null"
                    },"id":${$string(input.id)},"hit":${$number(
                        input.hit,
                    )},"contents":${(() =>
                        `[${input.contents
                            .map((elem: any) => $so2(elem))
                            .join(",")}]`)()},"created_at":${$string(
                        input.created_at,
                    )}}`;
                const $so1: any = (input: any): any =>
                    `{"id":${$string(input.id)},"hit":${$number(
                        input.hit,
                    )},"contents":${(() =>
                        `[${input.contents
                            .map((elem: any) => $so2(elem))
                            .join(",")}]`)()},"created_at":${$string(
                        input.created_at,
                    )}}`;
                const $so2: any = (input: any): any =>
                    `{"id":${$string(input.id)},"created_at":${$string(
                        input.created_at,
                    )},"title":${$string(input.title)},"body":${$string(
                        input.body,
                    )},"files":${(() =>
                        `[${input.files
                            .map((elem: any) => $so3(elem))
                            .join(",")}]`)()}}`;
                const $so3: any = (input: any): any =>
                    `{"extension":${
                        null !== input.extension
                            ? $string(input.extension)
                            : "null"
                    },"name":${$string(input.name)},"url":${$string(
                        input.url,
                    )}}`;
                const $so4: any = (input: any): any =>
                    `{"writer":${$string(input.writer)},"answer":${
                        null !== input.answer ? $so1(input.answer) : "null"
                    },"id":${$string(input.id)},"hit":${$number(
                        input.hit,
                    )},"contents":${(() =>
                        `[${input.contents
                            .map((elem: any) => $so5(elem))
                            .join(",")}]`)()},"created_at":${$string(
                        input.created_at,
                    )}}`;
                const $so5: any = (input: any): any =>
                    `{"score":${$number(input.score)},"id":${$string(
                        input.id,
                    )},"created_at":${$string(
                        input.created_at,
                    )},"title":${$string(input.title)},"body":${$string(
                        input.body,
                    )},"files":${(() =>
                        `[${input.files
                            .map((elem: any) => $so3(elem))
                            .join(",")}]`)()}}`;
                const $su0: any = (input: any): any =>
                    (() => {
                        if ($io4(input)) return $so4(input);
                        if ($io0(input)) return $so0(input);
                        $throws({
                            expected:
                                "(ObjectGenericUnion.ISaleReview | ObjectGenericUnion.ISaleQuestion)",
                            value: input,
                        });
                    })();
                return $su0(input);
            };
            return stringify(assert(input));
        },
        ObjectGenericUnion.SPOILERS,
    );
