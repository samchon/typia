import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_random_ObjectUnionNonPredictable = _test_random(
    "ObjectUnionNonPredictable",
    () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<ObjectUnionNonPredictable> => {
            const $pick: any = (typia.random as any).pick;
            const $generator: any = (typia.random as any).generator;
            const $ro0: any = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: $ro1(_recursive, _recursive ? 1 + _depth : _depth),
            });
            const $ro1: any = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: $pick([
                    () => $ro6(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro4(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                ])(),
            });
            const $ro2: any = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: $ro3(_recursive, _recursive ? 1 + _depth : _depth),
            });
            const $ro3: any = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: (generator?.boolean ?? $generator.boolean)(),
            });
            const $ro4: any = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: $ro5(_recursive, _recursive ? 1 + _depth : _depth),
            });
            const $ro5: any = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            });
            const $ro6: any = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: $ro7(_recursive, _recursive ? 1 + _depth : _depth),
            });
            const $ro7: any = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value:
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            });
            return (generator?.array ?? $generator.array)(() => $ro0());
        })(),
    (input: any): typia.Primitive<ObjectUnionNonPredictable> => {
        const __is: any = (
            input: any,
        ): input is typia.Primitive<ObjectUnionNonPredictable> => {
            const $io0: any = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io1(input.value);
            const $io1: any = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $iu0(input.value);
            const $io2: any = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "boolean" === typeof input.value.value;
            const $io4: any = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "number" === typeof input.value.value &&
                Number.isFinite(input.value.value);
            const $io6: any = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "string" === typeof input.value.value;
            const $iu0: any = (input: any): any =>
                (() => {
                    if ($io6(input)) return $io6(input);
                    if ($io4(input)) return $io4(input);
                    if ($io2(input)) return $io2(input);
                    return false;
                })();
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const $guard: any = (typia.createAssert as any).guard;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<ObjectUnionNonPredictable> => {
                const $ao0: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected:
                                "ObjectUnionNonPredictable.IPointer<ObjectUnionNonPredictable.IUnion>",
                            value: input.value,
                        })) &&
                    $ao1(input.value, _path + ".value", true && _exceptionable);
                const $ao1: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected:
                                "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
                            value: input.value,
                        })) &&
                    $au0(input.value, _path + ".value", true && _exceptionable);
                const $ao2: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected:
                                "ObjectUnionNonPredictable.IPointer<boolean>",
                            value: input.value,
                        })) &&
                    $ao3(input.value, _path + ".value", true && _exceptionable);
                const $ao3: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "boolean" === typeof input.value ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "boolean",
                        value: input.value,
                    });
                const $ao4: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected:
                                "ObjectUnionNonPredictable.IPointer<number>",
                            value: input.value,
                        })) &&
                    $ao5(input.value, _path + ".value", true && _exceptionable);
                const $ao5: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("number" === typeof input.value &&
                        Number.isFinite(input.value)) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "number",
                        value: input.value,
                    });
                const $ao6: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected:
                                "ObjectUnionNonPredictable.IPointer<string>",
                            value: input.value,
                        })) &&
                    $ao7(input.value, _path + ".value", true && _exceptionable);
                const $ao7: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "string" === typeof input.value ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "string",
                        value: input.value,
                    });
                const $au0: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    $ao6(input, _path, false && _exceptionable) ||
                    $ao4(input, _path, false && _exceptionable) ||
                    $ao2(input, _path, false && _exceptionable) ||
                    $guard(_exceptionable, {
                        path: _path,
                        expected:
                            "(ObjectUnionNonPredictable.IWrapper<string> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<boolean>)",
                        value: input,
                    });
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectUnionNonPredictable",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
        return input;
    },
);
