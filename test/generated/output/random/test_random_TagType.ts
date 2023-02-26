import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagType } from "../../../structures/TagType";

export const test_random_TagType = _test_random(
    "TagType",
    () =>
        ((
            generator: Partial<typia.IRandomGenerator> = (typia.random as any)
                .generator,
        ): typia.Primitive<Array<TagType.Type>> => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                int: (generator.integer ?? $generator.integer)(0, 100),
                uint: (generator.integer ?? $generator.integer)(0, 10),
            });
            return (generator.array ?? $generator.array)(() => $ro0());
        })(),
    (input: any): Array<TagType.Type> => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagType => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("number" === typeof input.int &&
                    Number.isFinite(input.int) &&
                    parseInt(input.int) === input.int) ||
                    $guard(_exceptionable, {
                        path: _path + ".int",
                        expected: "number",
                        value: input.int,
                    })) &&
                (("number" === typeof input.uint &&
                    Number.isFinite(input.uint) &&
                    parseInt(input.uint) === input.uint &&
                    0 <= input.uint) ||
                    $guard(_exceptionable, {
                        path: _path + ".uint",
                        expected: "number",
                        value: input.uint,
                    }));
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Array<Resolve<TagType.Type>>",
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected: "Resolve<TagType.Type>",
                                value: elem,
                            })) &&
                        $ao0(elem, _path + "[" + _index1 + "]", true),
                )
            );
        })(input, "$input", true);
        return input;
    },
);
