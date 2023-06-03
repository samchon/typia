import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_createRandom_ObjectUnionDouble = _test_random(
    "ObjectUnionDouble",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<ObjectUnionDouble> => {
        const $pick = (typia.createRandom as any).pick;
        const $generator = (typia.createRandom as any).generator;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            value: $ro1(_recursive, _recursive ? 1 + _depth : _depth),
            child: $pick([
                () => $ro4(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro2(_recursive, _recursive ? 1 + _depth : _depth),
            ])(),
        });
        const $ro1 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            x:
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
        });
        const $ro2 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            value: $ro3(_recursive, _recursive ? 1 + _depth : _depth),
        });
        const $ro3 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            y: (generator?.boolean ?? $generator.boolean)(),
        });
        const $ro4 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            value: $ro5(_recursive, _recursive ? 1 + _depth : _depth),
        });
        const $ro5 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            y:
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
        });
        const $ro6 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            value: $ro7(_recursive, _recursive ? 1 + _depth : _depth),
            child: $pick([
                () => $ro10(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro8(_recursive, _recursive ? 1 + _depth : _depth),
            ])(),
        });
        const $ro7 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            x:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
        });
        const $ro8 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            value: $ro9(_recursive, _recursive ? 1 + _depth : _depth),
        });
        const $ro9 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            y:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
        });
        const $ro10 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            value: $ro11(_recursive, _recursive ? 1 + _depth : _depth),
        });
        const $ro11 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            y: (generator?.array ?? $generator.array)(
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ),
        });
        return (generator?.array ?? $generator.array)(() =>
            $pick([() => $ro6(), () => $ro0()])(),
        );
    },
    (input: any): typia.Primitive<ObjectUnionDouble> => {
        const __is = (
            input: any,
        ): input is typia.Primitive<ObjectUnionDouble> => {
            const $io0 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "number" === typeof (input.value as any).x &&
                Number.isFinite((input.value as any).x) &&
                "object" === typeof input.child &&
                null !== input.child &&
                $iu1(input.child);
            const $io2 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "boolean" === typeof (input.value as any).y;
            const $io4 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "number" === typeof (input.value as any).y &&
                Number.isFinite((input.value as any).y);
            const $io6 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "string" === typeof (input.value as any).x &&
                "object" === typeof input.child &&
                null !== input.child &&
                $iu2(input.child);
            const $io8 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "string" === typeof (input.value as any).y;
            const $io10 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io11(input.value);
            const $io11 = (input: any): boolean =>
                Array.isArray(input.y) &&
                input.y.every(
                    (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                );
            const $iu0 = (input: any): any =>
                (() => {
                    if ($io6(input)) return $io6(input);
                    if ($io0(input)) return $io0(input);
                    return false;
                })();
            const $iu1 = (input: any): any =>
                (() => {
                    if ($io4(input)) return $io4(input);
                    if ($io2(input)) return $io2(input);
                    return false;
                })();
            const $iu2 = (input: any): any =>
                (() => {
                    if ($io10(input)) return $io10(input);
                    if ($io8(input)) return $io8(input);
                    return false;
                })();
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $iu0(elem),
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<ObjectUnionDouble> => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type",
                            value: input.value,
                        })) &&
                        $ao1(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type",
                            value: input.value,
                        })) &&
                    (((("object" === typeof input.child &&
                        null !== input.child) ||
                        $guard(_exceptionable, {
                            path: _path + ".child",
                            expected:
                                "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                            value: input.child,
                        })) &&
                        $au1(
                            input.child,
                            _path + ".child",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".child",
                            expected:
                                "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                            value: input.child,
                        }));
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("number" === typeof input.x && Number.isFinite(input.x)) ||
                    $guard(_exceptionable, {
                        path: _path + ".x",
                        expected: "number",
                        value: input.x,
                    });
                const $ao2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o1",
                            value: input.value,
                        })) &&
                        $ao3(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "__type.o1",
                        value: input.value,
                    });
                const $ao3 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "boolean" === typeof input.y ||
                    $guard(_exceptionable, {
                        path: _path + ".y",
                        expected: "boolean",
                        value: input.y,
                    });
                const $ao4 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o2",
                            value: input.value,
                        })) &&
                        $ao5(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "__type.o2",
                        value: input.value,
                    });
                const $ao5 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("number" === typeof input.y && Number.isFinite(input.y)) ||
                    $guard(_exceptionable, {
                        path: _path + ".y",
                        expected: "number",
                        value: input.y,
                    });
                const $ao6 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o3",
                            value: input.value,
                        })) &&
                        $ao7(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o3",
                            value: input.value,
                        })) &&
                    (((("object" === typeof input.child &&
                        null !== input.child) ||
                        $guard(_exceptionable, {
                            path: _path + ".child",
                            expected:
                                "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                            value: input.child,
                        })) &&
                        $au2(
                            input.child,
                            _path + ".child",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".child",
                            expected:
                                "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                            value: input.child,
                        }));
                const $ao7 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "string" === typeof input.x ||
                    $guard(_exceptionable, {
                        path: _path + ".x",
                        expected: "string",
                        value: input.x,
                    });
                const $ao8 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o4",
                            value: input.value,
                        })) &&
                        $ao9(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "__type.o4",
                        value: input.value,
                    });
                const $ao9 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "string" === typeof input.y ||
                    $guard(_exceptionable, {
                        path: _path + ".y",
                        expected: "string",
                        value: input.y,
                    });
                const $ao10 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o5",
                            value: input.value,
                        })) &&
                        $ao11(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "__type.o5",
                        value: input.value,
                    });
                const $ao11 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((Array.isArray(input.y) ||
                        $guard(_exceptionable, {
                            path: _path + ".y",
                            expected: "Array<number>",
                            value: input.y,
                        })) &&
                        input.y.every(
                            (elem: any, _index2: number) =>
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".y[" + _index2 + "]",
                                    expected: "number",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".y",
                        expected: "Array<number>",
                        value: input.y,
                    });
                const $au0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    $ao6(input, _path, false && _exceptionable) ||
                    $ao0(input, _path, false && _exceptionable) ||
                    $guard(_exceptionable, {
                        path: _path,
                        expected:
                            "(ObjectUnionDouble.IB | ObjectUnionDouble.IA)",
                        value: input,
                    });
                const $au1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    $ao4(input, _path, false && _exceptionable) ||
                    $ao2(input, _path, false && _exceptionable) ||
                    $guard(_exceptionable, {
                        path: _path,
                        expected:
                            "(ObjectUnionDouble.IAB | ObjectUnionDouble.IAA)",
                        value: input,
                    });
                const $au2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    $ao10(input, _path, false && _exceptionable) ||
                    $ao8(input, _path, false && _exceptionable) ||
                    $guard(_exceptionable, {
                        path: _path,
                        expected:
                            "(ObjectUnionDouble.IBB | ObjectUnionDouble.IBA)",
                        value: input,
                    });
                return (
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectUnionDouble",
                            value: input,
                        })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                                        value: elem,
                                    })) &&
                                    $au0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    )) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                                    value: elem,
                                }),
                        )) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ObjectUnionDouble",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
);
