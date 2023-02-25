import typia from "../../../../src";
import { TagMatrix } from "../../../structures/TagMatrix";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_TagMatrix = _test_random(
    "TagMatrix",
    (
        generator: Partial<typia.IRandomGenerator> = (typia.createRandom as any)
            .generator,
    ): typia.Primitive<TagMatrix> => {
        const $generator = (typia.createRandom as any).generator;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            matrix: (generator.array ?? $generator.array)(
                () =>
                    (generator.array ?? $generator.array)(
                        () => (generator.uuid ?? $generator.uuid)(),
                        3,
                    ),
                3,
            ),
        });
        return $ro0();
    },
    (input: any): TagMatrix => {
        const $guard = (typia.createAssert as any).guard;
        const $is_uuid = (typia.createAssert as any).is_uuid;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagMatrix => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ((Array.isArray(input.matrix) && 3 === input.matrix.length) ||
                    $guard(_exceptionable, {
                        path: _path + ".matrix",
                        expected: "Array<Array<string>>",
                        value: input.matrix,
                    })) &&
                input.matrix.every(
                    (elem: any, _index1: number) =>
                        ((Array.isArray(elem) && 3 === elem.length) ||
                            $guard(_exceptionable, {
                                path: _path + ".matrix[" + _index1 + "]",
                                expected: "Array<string>",
                                value: elem,
                            })) &&
                        elem.every(
                            (elem: any, _index2: number) =>
                                ("string" === typeof elem &&
                                    true === $is_uuid(elem)) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        ".matrix[" +
                                        _index1 +
                                        "][" +
                                        _index2 +
                                        "]",
                                    expected: "string",
                                    value: elem,
                                }),
                        ),
                );
            return (
                (("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<TagMatrix>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
);
