import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_createRandom_ObjectUnionDouble = _test_random(
    "ObjectUnionDouble",
    (
        generator: Partial<typia.IRandomGenerator> = (typia.createRandom as any)
            .generator,
    ): typia.Primitive<ObjectUnionDouble> => {
        const $pick = (typia.createRandom as any).pick;
        const $generator = (typia.createRandom as any).generator;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            value: $ro1(_recursive, _recursive ? 1 + _depth : _depth),
            child: $pick([
                () => $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro4(_recursive, _recursive ? 1 + _depth : _depth),
            ])(),
        });
        const $ro1 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            x: (generator.number ?? $generator.number)(0, 100),
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
            y: (generator.boolean ?? $generator.boolean)(),
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
            y: (generator.number ?? $generator.number)(0, 100),
        });
        const $ro6 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            value: $ro7(_recursive, _recursive ? 1 + _depth : _depth),
            child: $pick([
                () => $ro8(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro10(_recursive, _recursive ? 1 + _depth : _depth),
            ])(),
        });
        const $ro7 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            x: (generator.string ?? $generator.string)(),
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
            y: (generator.string ?? $generator.string)(),
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
            y: (generator.array ?? $generator.array)(() =>
                (generator.number ?? $generator.number)(0, 100),
            ),
        });
        return (generator.array ?? $generator.array)(() =>
            $pick([() => $ro0(), () => $ro6()])(),
        );
    },
    (input: any): ObjectUnionDouble => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ObjectUnionDouble => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("object" === typeof input.value && null !== input.value) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "__type",
                        value: input.value,
                    })) &&
                $ao1(input.value, _path + ".value", true && _exceptionable) &&
                (("object" === typeof input.child && null !== input.child) ||
                    $guard(_exceptionable, {
                        path: _path + ".child",
                        expected:
                            "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                        value: input.child,
                    })) &&
                $au0(input.child, _path + ".child", true && _exceptionable);
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
                (("object" === typeof input.value && null !== input.value) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "__type.o1",
                        value: input.value,
                    })) &&
                $ao3(input.value, _path + ".value", true && _exceptionable);
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
                (("object" === typeof input.value && null !== input.value) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "__type.o2",
                        value: input.value,
                    })) &&
                $ao5(input.value, _path + ".value", true && _exceptionable);
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
                (("object" === typeof input.value && null !== input.value) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "__type.o3",
                        value: input.value,
                    })) &&
                $ao7(input.value, _path + ".value", true && _exceptionable) &&
                (("object" === typeof input.child && null !== input.child) ||
                    $guard(_exceptionable, {
                        path: _path + ".child",
                        expected:
                            "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                        value: input.child,
                    })) &&
                $au1(input.child, _path + ".child", true && _exceptionable);
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
                (("object" === typeof input.value && null !== input.value) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "__type.o4",
                        value: input.value,
                    })) &&
                $ao9(input.value, _path + ".value", true && _exceptionable);
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
                (("object" === typeof input.value && null !== input.value) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "__type.o5",
                        value: input.value,
                    })) &&
                $ao11(input.value, _path + ".value", true && _exceptionable);
            const $ao11 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (Array.isArray(input.y) ||
                    $guard(_exceptionable, {
                        path: _path + ".y",
                        expected: "Array<number>",
                        value: input.y,
                    })) &&
                input.y.every(
                    (elem: any, _index2: number) =>
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        $guard(_exceptionable, {
                            path: _path + ".y[" + _index2 + "]",
                            expected: "number",
                            value: elem,
                        }),
                );
            const $au0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                $ao2(input, _path, false && _exceptionable) ||
                $ao4(input, _path, false && _exceptionable) ||
                $guard(_exceptionable, {
                    path: _path,
                    expected: "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                    value: input,
                });
            const $au1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                $ao8(input, _path, false && _exceptionable) ||
                $ao10(input, _path, false && _exceptionable) ||
                $guard(_exceptionable, {
                    path: _path,
                    expected: "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                    value: input,
                });
            const $au2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                $ao0(input, _path, false && _exceptionable) ||
                $ao6(input, _path, false && _exceptionable) ||
                $guard(_exceptionable, {
                    path: _path,
                    expected: "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                    value: input,
                });
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected:
                            "Array<(ObjectUnionDouble.IA | ObjectUnionDouble.IB)>",
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected:
                                    "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                                value: elem,
                            })) &&
                        $au2(elem, _path + "[" + _index1 + "]", true),
                )
            );
        })(input, "$input", true);
        return input;
    },
);
