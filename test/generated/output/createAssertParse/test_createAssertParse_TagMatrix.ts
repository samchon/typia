import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_createAssertParse_TagMatrix = _test_assertParse(
    "TagMatrix",
    TagMatrix.generate,
    (input: string): typia.Primitive<TagMatrix> => {
        const assert = (input: any): TagMatrix => {
            const $guard = (typia.createAssertParse as any).guard;
            const $is_uuid = (typia.createAssertParse as any).is_uuid;
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
                    ((Array.isArray(input.matrix) &&
                        (3 === input.matrix.length ||
                            $guard(_exceptionable, {
                                path: _path + ".matrix",
                                expected: "Array.length (@items 3)",
                                value: input.matrix,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".matrix",
                            expected: "Array<Array<string>>",
                            value: input.matrix,
                        })) &&
                    input.matrix.every(
                        (elem: any, _index1: number) =>
                            ((Array.isArray(elem) &&
                                (3 === elem.length ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".matrix[" + _index1 + "]",
                                        expected: "Array.length (@items 3)",
                                        value: elem,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".matrix[" + _index1 + "]",
                                    expected: "Array<string>",
                                    value: elem,
                                })) &&
                            elem.every(
                                (elem: any, _index2: number) =>
                                    ("string" === typeof elem &&
                                        (true === $is_uuid(elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".matrix[" +
                                                    _index1 +
                                                    "][" +
                                                    _index2 +
                                                    "]",
                                                expected:
                                                    "string (@format uuid)",
                                                value: elem,
                                            }))) ||
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
        };
        input = JSON.parse(input);
        return assert(input);
    },
    TagMatrix.SPOILERS,
);
