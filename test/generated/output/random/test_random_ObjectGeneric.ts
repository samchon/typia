import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";

export const test_random_ObjectGeneric = _test_random(
    "ObjectGeneric",
    () =>
        ((
            generator: Partial<typia.IRandomGenerator> = (typia.random as any)
                .generator,
        ): typia.Primitive<
            [
                ObjectGeneric.ISomething<boolean>,
                ObjectGeneric.ISomething<number>,
                ObjectGeneric.ISomething<string>,
            ]
        > => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: (generator.boolean ?? $generator.boolean)(),
                child: $ro1(_recursive, _recursive ? 1 + _depth : _depth),
                elements: (generator.array ?? $generator.array)(() =>
                    $ro1(_recursive, _recursive ? 1 + _depth : _depth),
                ),
            });
            const $ro1 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                child_value: (generator.boolean ?? $generator.boolean)(),
                child_next: (generator.boolean ?? $generator.boolean)(),
            });
            const $ro2 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: (generator.number ?? $generator.number)(0, 100),
                child: $ro3(_recursive, _recursive ? 1 + _depth : _depth),
                elements: (generator.array ?? $generator.array)(() =>
                    $ro3(_recursive, _recursive ? 1 + _depth : _depth),
                ),
            });
            const $ro3 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                child_value: (generator.number ?? $generator.number)(0, 100),
                child_next: (generator.number ?? $generator.number)(0, 100),
            });
            const $ro4 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: (generator.string ?? $generator.string)(),
                child: $ro5(_recursive, _recursive ? 1 + _depth : _depth),
                elements: (generator.array ?? $generator.array)(() =>
                    $ro5(_recursive, _recursive ? 1 + _depth : _depth),
                ),
            });
            const $ro5 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                child_value: (generator.string ?? $generator.string)(),
                child_next: (generator.string ?? $generator.string)(),
            });
            return [$ro0(), $ro2(), $ro4()];
        })(),
    (
        input: any,
    ): [
        ObjectGeneric.ISomething<boolean>,
        ObjectGeneric.ISomething<number>,
        ObjectGeneric.ISomething<string>,
    ] => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ObjectGeneric => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("boolean" === typeof input.value ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "boolean",
                        value: input.value,
                    })) &&
                (("object" === typeof input.child && null !== input.child) ||
                    $guard(_exceptionable, {
                        path: _path + ".child",
                        expected:
                            "Resolve<ObjectGeneric.IChild<boolean, boolean>>",
                        value: input.child,
                    })) &&
                $ao1(input.child, _path + ".child", true && _exceptionable) &&
                (Array.isArray(input.elements) ||
                    $guard(_exceptionable, {
                        path: _path + ".elements",
                        expected:
                            "Array<Resolve<ObjectGeneric.IChild<boolean, boolean>>>",
                        value: input.elements,
                    })) &&
                input.elements.every(
                    (elem: any, _index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(_exceptionable, {
                                path: _path + ".elements[" + _index1 + "]",
                                expected:
                                    "Resolve<ObjectGeneric.IChild<boolean, boolean>>",
                                value: elem,
                            })) &&
                        $ao1(
                            elem,
                            _path + ".elements[" + _index1 + "]",
                            true && _exceptionable,
                        ),
                );
            const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("boolean" === typeof input.child_value ||
                    $guard(_exceptionable, {
                        path: _path + ".child_value",
                        expected: "boolean",
                        value: input.child_value,
                    })) &&
                ("boolean" === typeof input.child_next ||
                    $guard(_exceptionable, {
                        path: _path + ".child_next",
                        expected: "boolean",
                        value: input.child_next,
                    }));
            const $ao2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("number" === typeof input.value &&
                    Number.isFinite(input.value)) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "number",
                        value: input.value,
                    })) &&
                (("object" === typeof input.child && null !== input.child) ||
                    $guard(_exceptionable, {
                        path: _path + ".child",
                        expected:
                            "Resolve<ObjectGeneric.IChild<number, number>>",
                        value: input.child,
                    })) &&
                $ao3(input.child, _path + ".child", true && _exceptionable) &&
                (Array.isArray(input.elements) ||
                    $guard(_exceptionable, {
                        path: _path + ".elements",
                        expected:
                            "Array<Resolve<ObjectGeneric.IChild<number, number>>>",
                        value: input.elements,
                    })) &&
                input.elements.every(
                    (elem: any, _index2: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(_exceptionable, {
                                path: _path + ".elements[" + _index2 + "]",
                                expected:
                                    "Resolve<ObjectGeneric.IChild<number, number>>",
                                value: elem,
                            })) &&
                        $ao3(
                            elem,
                            _path + ".elements[" + _index2 + "]",
                            true && _exceptionable,
                        ),
                );
            const $ao3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("number" === typeof input.child_value &&
                    Number.isFinite(input.child_value)) ||
                    $guard(_exceptionable, {
                        path: _path + ".child_value",
                        expected: "number",
                        value: input.child_value,
                    })) &&
                (("number" === typeof input.child_next &&
                    Number.isFinite(input.child_next)) ||
                    $guard(_exceptionable, {
                        path: _path + ".child_next",
                        expected: "number",
                        value: input.child_next,
                    }));
            const $ao4 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("string" === typeof input.value ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "string",
                        value: input.value,
                    })) &&
                (("object" === typeof input.child && null !== input.child) ||
                    $guard(_exceptionable, {
                        path: _path + ".child",
                        expected:
                            "Resolve<ObjectGeneric.IChild<string, string>>",
                        value: input.child,
                    })) &&
                $ao5(input.child, _path + ".child", true && _exceptionable) &&
                (Array.isArray(input.elements) ||
                    $guard(_exceptionable, {
                        path: _path + ".elements",
                        expected:
                            "Array<Resolve<ObjectGeneric.IChild<string, string>>>",
                        value: input.elements,
                    })) &&
                input.elements.every(
                    (elem: any, _index3: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(_exceptionable, {
                                path: _path + ".elements[" + _index3 + "]",
                                expected:
                                    "Resolve<ObjectGeneric.IChild<string, string>>",
                                value: elem,
                            })) &&
                        $ao5(
                            elem,
                            _path + ".elements[" + _index3 + "]",
                            true && _exceptionable,
                        ),
                );
            const $ao5 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("string" === typeof input.child_value ||
                    $guard(_exceptionable, {
                        path: _path + ".child_value",
                        expected: "string",
                        value: input.child_value,
                    })) &&
                ("string" === typeof input.child_next ||
                    $guard(_exceptionable, {
                        path: _path + ".child_next",
                        expected: "string",
                        value: input.child_next,
                    }));
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected:
                            "[Resolve<ObjectGeneric.ISomething<boolean>>, Resolve<ObjectGeneric.ISomething<number>>, Resolve<ObjectGeneric.ISomething<string>>]",
                        value: input,
                    })) &&
                (input.length === 3 ||
                    $guard(true, {
                        path: _path + "",
                        expected:
                            "[Resolve<ObjectGeneric.ISomething<boolean>>, Resolve<ObjectGeneric.ISomething<number>>, Resolve<ObjectGeneric.ISomething<string>>]",
                        value: input,
                    })) &&
                (("object" === typeof input[0] && null !== input[0]) ||
                    $guard(true, {
                        path: _path + "[0]",
                        expected: "Resolve<ObjectGeneric.ISomething<boolean>>",
                        value: input[0],
                    })) &&
                $ao0(input[0], _path + "[0]", true) &&
                (("object" === typeof input[1] && null !== input[1]) ||
                    $guard(true, {
                        path: _path + "[1]",
                        expected: "Resolve<ObjectGeneric.ISomething<number>>",
                        value: input[1],
                    })) &&
                $ao2(input[1], _path + "[1]", true) &&
                (("object" === typeof input[2] && null !== input[2]) ||
                    $guard(true, {
                        path: _path + "[2]",
                        expected: "Resolve<ObjectGeneric.ISomething<string>>",
                        value: input[2],
                    })) &&
                $ao4(input[2], _path + "[2]", true)
            );
        })(input, "$input", true);
        return input;
    },
);
