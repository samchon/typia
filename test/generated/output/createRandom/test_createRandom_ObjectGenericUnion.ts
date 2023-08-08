import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_random_ObjectGenericUnion = _test_random(
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
            name:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            extension: $pick([
                () => null,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
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
        return $pick([() => $ro4(), () => $ro0()])();
    },
    (input: any): typia.Primitive<ObjectGenericUnion> => {
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
                        "object" === typeof elem && null !== elem && $io2(elem),
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
                "string" === typeof input.name &&
                (null === input.extension ||
                    "string" === typeof input.extension) &&
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
                        "object" === typeof elem && null !== elem && $io5(elem),
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
                        "object" === typeof elem && null !== elem && $io3(elem),
                );
            const $iu0 = (input: any): any =>
                (() => {
                    if ($io4(input)) return $io4(input);
                    if ($io0(input)) return $io0(input);
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
                const $guard = (typia.createAssert as any).guard;
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
                                expected: "(__type.o1 | null)",
                                value: input.answer,
                            })) &&
                            $ao1(
                                input.answer,
                                _path + ".answer",
                                true && _exceptionable,
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".answer",
                            expected: "(__type.o1 | null)",
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
                            expected: "Array<__type>",
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
                                        expected: "__type.o2",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path + ".contents[" + _index1 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".contents[" + _index1 + "]",
                                    expected: "__type.o2",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".contents",
                            expected: "Array<__type>",
                            value: input.contents,
                        })) &&
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
                    (((Array.isArray(input.contents) ||
                        $guard(_exceptionable, {
                            path: _path + ".contents",
                            expected: "Array<__type>",
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
                                        expected: "__type.o2",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path + ".contents[" + _index2 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".contents[" + _index2 + "]",
                                    expected: "__type.o2",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".contents",
                            expected: "Array<__type>",
                            value: input.contents,
                        })) &&
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
                    (((Array.isArray(input.files) ||
                        $guard(_exceptionable, {
                            path: _path + ".files",
                            expected: "Array<__type>.o1",
                            value: input.files,
                        })) &&
                        input.files.every(
                            (elem: any, _index3: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".files[" + _index3 + "]",
                                        expected: "__type.o3",
                                        value: elem,
                                    })) &&
                                    $ao3(
                                        elem,
                                        _path + ".files[" + _index3 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".files[" + _index3 + "]",
                                    expected: "__type.o3",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".files",
                            expected: "Array<__type>.o1",
                            value: input.files,
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
                                expected: "(__type.o1 | null)",
                                value: input.answer,
                            })) &&
                            $ao1(
                                input.answer,
                                _path + ".answer",
                                true && _exceptionable,
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".answer",
                            expected: "(__type.o1 | null)",
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
                            expected: "Array<__type>.o2",
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
                                        expected: "__type.o5",
                                        value: elem,
                                    })) &&
                                    $ao5(
                                        elem,
                                        _path + ".contents[" + _index4 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".contents[" + _index4 + "]",
                                    expected: "__type.o5",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".contents",
                            expected: "Array<__type>.o2",
                            value: input.contents,
                        })) &&
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
                    (((Array.isArray(input.files) ||
                        $guard(_exceptionable, {
                            path: _path + ".files",
                            expected: "Array<__type>.o1",
                            value: input.files,
                        })) &&
                        input.files.every(
                            (elem: any, _index5: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".files[" + _index5 + "]",
                                        expected: "__type.o3",
                                        value: elem,
                                    })) &&
                                    $ao3(
                                        elem,
                                        _path + ".files[" + _index5 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".files[" + _index5 + "]",
                                    expected: "__type.o3",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".files",
                            expected: "Array<__type>.o1",
                            value: input.files,
                        }));
                const $au0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    $ao4(input, _path, false && _exceptionable) ||
                    $ao0(input, _path, false && _exceptionable) ||
                    $guard(_exceptionable, {
                        path: _path,
                        expected: "(__type.o4 | __type)",
                        value: input,
                    });
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "(__type | __type.o4)",
                            value: input,
                        })) &&
                        $au0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "(__type | __type.o4)",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
);
