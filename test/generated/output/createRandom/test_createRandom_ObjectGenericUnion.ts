import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_createRandom_ObjectGenericUnion = _test_random(
    "ObjectGenericUnion",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<ObjectGenericUnion> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            writer:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            answer: $pick([
                () => null,
                () => $ro1(_recursive, _recursive ? 1 + _depth : _depth),
            ])(),
            id:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            hit:
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
            contents: (generator?.array ?? $generator.array)(() =>
                $ro2(_recursive, _recursive ? 1 + _depth : _depth),
            ),
            created_at:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
        });
        const $ro1 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            id:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            hit:
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
            contents: (generator?.array ?? $generator.array)(() =>
                $ro2(_recursive, _recursive ? 1 + _depth : _depth),
            ),
            created_at:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
        });
        const $ro2 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            id:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            created_at:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            title:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            body:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            files: (generator?.array ?? $generator.array)(() =>
                $ro3(_recursive, _recursive ? 1 + _depth : _depth),
            ),
        });
        const $ro3 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            extension: $pick([
                () => null,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            name:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            url:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
        });
        const $ro4 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            writer:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            answer: $pick([
                () => null,
                () => $ro1(_recursive, _recursive ? 1 + _depth : _depth),
            ])(),
            id:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            hit:
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
            contents: (generator?.array ?? $generator.array)(() =>
                $ro5(_recursive, _recursive ? 1 + _depth : _depth),
            ),
            created_at:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
        });
        const $ro5 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            score:
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
            id:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            created_at:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            title:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            body:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            files: (generator?.array ?? $generator.array)(() =>
                $ro3(_recursive, _recursive ? 1 + _depth : _depth),
            ),
        });
        return $pick([() => $ro0(), () => $ro4()])();
    },
    (input: any): typia.Primitive<ObjectGenericUnion> => {
        const $guard = (typia.createAssert as any).guard;
        const __is = (
            input: any,
        ): input is typia.Primitive<ObjectGenericUnion> => {
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
                        "object" === typeof elem && null !== elem && $io4(elem),
                ) &&
                "string" === typeof input.created_at;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.id &&
                "number" === typeof input.hit &&
                Number.isFinite(input.hit) &&
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
                "string" === typeof input.id &&
                "string" === typeof input.created_at &&
                "string" === typeof input.title &&
                "string" === typeof input.body &&
                Array.isArray(input.files) &&
                input.files.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io5(elem),
                );
            const $io5 = (input: any): boolean =>
                (null === input.extension ||
                    "string" === typeof input.extension) &&
                "string" === typeof input.name &&
                "string" === typeof input.url;
            const $io6 = (input: any): boolean =>
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
                        "object" === typeof elem && null !== elem && $io7(elem),
                ) &&
                "string" === typeof input.created_at;
            const $io7 = (input: any): boolean =>
                "number" === typeof input.score &&
                Number.isFinite(input.score) &&
                "string" === typeof input.id &&
                "string" === typeof input.created_at &&
                "string" === typeof input.title &&
                "string" === typeof input.body &&
                Array.isArray(input.files) &&
                input.files.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io5(elem),
                );
            const $iu0 = (input: any): any =>
                (() => {
                    if ($io0(input)) return $io0(input);
                    if ($io6(input)) return $io6(input);
                    return false;
                })();
            return "object" === typeof input && null !== input && $iu0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<ObjectGenericUnion> => {
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
                            expected: "Array<Resolve<__type.o1>>",
                            value: input.contents,
                        })) &&
                    input.contents.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".contents[" + _index1 + "]",
                                    expected: "Resolve<__type.o1>",
                                    value: elem,
                                })) &&
                            $ao4(
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
                                    path: _path + ".contents[" + _index2 + "]",
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
                            expected: "Array<Resolve<__type.o2>>",
                            value: input.files,
                        })) &&
                    input.files.every(
                        (elem: any, _index4: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".files[" + _index4 + "]",
                                    expected: "Resolve<__type.o2>",
                                    value: elem,
                                })) &&
                            $ao5(
                                elem,
                                _path + ".files[" + _index4 + "]",
                                true && _exceptionable,
                            ),
                    );
                const $ao5 = (
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
                const $ao6 = (
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
                            expected: "Array<Resolve<__type.o4>>",
                            value: input.contents,
                        })) &&
                    input.contents.every(
                        (elem: any, _index5: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".contents[" + _index5 + "]",
                                    expected: "Resolve<__type.o4>",
                                    value: elem,
                                })) &&
                            $ao7(
                                elem,
                                _path + ".contents[" + _index5 + "]",
                                true && _exceptionable,
                            ),
                    ) &&
                    ("string" === typeof input.created_at ||
                        $guard(_exceptionable, {
                            path: _path + ".created_at",
                            expected: "string",
                            value: input.created_at,
                        }));
                const $ao7 = (
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
                            expected: "Array<Resolve<__type.o2>>",
                            value: input.files,
                        })) &&
                    input.files.every(
                        (elem: any, _index6: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".files[" + _index6 + "]",
                                    expected: "Resolve<__type.o2>",
                                    value: elem,
                                })) &&
                            $ao5(
                                elem,
                                _path + ".files[" + _index6 + "]",
                                true && _exceptionable,
                            ),
                    );
                const $au0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    $ao0(input, _path, false && _exceptionable) ||
                    $ao6(input, _path, false && _exceptionable) ||
                    $guard(_exceptionable, {
                        path: _path,
                        expected: "(__type | __type.o3)",
                        value: input,
                    });
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "(Resolve<__type.o3> | Resolve<__type>)",
                            value: input,
                        })) &&
                    $au0(input, _path + "", true)
                );
            })(input, "$input", true);
        return input;
    },
);
