import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_random_TagObjectUnion = _test_random(
    "TagObjectUnion",
    () =>
        ((
            generator: Partial<typia.IRandomGenerator> = (typia.random as any)
                .generator,
        ): typia.Primitive<TagObjectUnion> => {
            const $generator = (typia.random as any).generator;
            const $pick = (typia.random as any).pick;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: (generator.number ?? $generator.number)(3, 13),
            });
            const $ro1 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: (generator.string ?? $generator.string)(
                    (generator.integer ?? $generator.integer)(3, 7),
                ),
            });
            return (generator.array ?? $generator.array)(() =>
                $pick([() => $ro0(), () => $ro1()])(),
            );
        })(),
    (input: any): TagObjectUnion => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagObjectUnion => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("number" === typeof input.value &&
                    Number.isFinite(input.value) &&
                    3 <= input.value) ||
                $guard(_exceptionable, {
                    path: _path + ".value",
                    expected: "number",
                    value: input.value,
                });
            const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("string" === typeof input.value &&
                    3 <= input.value.length &&
                    7 >= input.value.length) ||
                $guard(_exceptionable, {
                    path: _path + ".value",
                    expected: "string",
                    value: input.value,
                });
            const $au0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                (() => {
                    if ("number" === typeof input.value)
                        return $ao0(input, _path, true && _exceptionable);
                    if ("string" === typeof input.value)
                        return $ao1(input, _path, true && _exceptionable);
                    return $guard(_exceptionable, {
                        path: _path,
                        expected:
                            "(TagObjectUnion.Numeric | TagObjectUnion.Literal)",
                        value: input,
                    });
                })();
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected:
                            "Array<(TagObjectUnion.Literal | TagObjectUnion.Numeric)>",
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected:
                                    "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                                value: elem,
                            })) &&
                        $au0(elem, _path + "[" + _index1 + "]", true),
                )
            );
        })(input, "$input", true);
        return input;
    },
);
