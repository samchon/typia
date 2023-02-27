import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagRange } from "../../../structures/TagRange";

export const test_random_TagRange = _test_random(
    "TagRange",
    () =>
        ((
            generator: Partial<typia.IRandomGenerator> = (typia.random as any)
                .generator,
        ): typia.Primitive<TagRange> => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                greater: (generator.number ?? $generator.number)(3, 13),
                greater_equal: (generator.number ?? $generator.number)(3, 13),
                less: (generator.number ?? $generator.number)(-3, 7),
                less_equal: (generator.number ?? $generator.number)(-3, 7),
                greater_less: (generator.number ?? $generator.number)(3, 7),
                greater_equal_less: (generator.number ?? $generator.number)(
                    3,
                    7,
                ),
                greater_less_equal: (generator.number ?? $generator.number)(
                    3,
                    7,
                ),
                greater_equal_less_equal: (
                    generator.number ?? $generator.number
                )(3, 7),
            });
            return (generator.array ?? $generator.array)(() => $ro0());
        })(),
    (input: any): TagRange => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagRange => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("number" === typeof input.greater &&
                    Number.isFinite(input.greater) &&
                    3 < input.greater) ||
                    $guard(_exceptionable, {
                        path: _path + ".greater",
                        expected: "number",
                        value: input.greater,
                    })) &&
                (("number" === typeof input.greater_equal &&
                    Number.isFinite(input.greater_equal) &&
                    3 <= input.greater_equal) ||
                    $guard(_exceptionable, {
                        path: _path + ".greater_equal",
                        expected: "number",
                        value: input.greater_equal,
                    })) &&
                (("number" === typeof input.less &&
                    Number.isFinite(input.less) &&
                    7 > input.less) ||
                    $guard(_exceptionable, {
                        path: _path + ".less",
                        expected: "number",
                        value: input.less,
                    })) &&
                (("number" === typeof input.less_equal &&
                    Number.isFinite(input.less_equal) &&
                    7 >= input.less_equal) ||
                    $guard(_exceptionable, {
                        path: _path + ".less_equal",
                        expected: "number",
                        value: input.less_equal,
                    })) &&
                (("number" === typeof input.greater_less &&
                    3 < input.greater_less &&
                    7 > input.greater_less) ||
                    $guard(_exceptionable, {
                        path: _path + ".greater_less",
                        expected: "number",
                        value: input.greater_less,
                    })) &&
                (("number" === typeof input.greater_equal_less &&
                    3 <= input.greater_equal_less &&
                    7 > input.greater_equal_less) ||
                    $guard(_exceptionable, {
                        path: _path + ".greater_equal_less",
                        expected: "number",
                        value: input.greater_equal_less,
                    })) &&
                (("number" === typeof input.greater_less_equal &&
                    3 < input.greater_less_equal &&
                    7 >= input.greater_less_equal) ||
                    $guard(_exceptionable, {
                        path: _path + ".greater_less_equal",
                        expected: "number",
                        value: input.greater_less_equal,
                    })) &&
                (("number" === typeof input.greater_equal_less_equal &&
                    3 <= input.greater_equal_less_equal &&
                    7 >= input.greater_equal_less_equal) ||
                    $guard(_exceptionable, {
                        path: _path + ".greater_equal_less_equal",
                        expected: "number",
                        value: input.greater_equal_less_equal,
                    }));
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Array<Resolve<TagRange.Type>>",
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected: "Resolve<TagRange.Type>",
                                value: elem,
                            })) &&
                        $ao0(elem, _path + "[" + _index1 + "]", true),
                )
            );
        })(input, "$input", true);
        return input;
    },
);
