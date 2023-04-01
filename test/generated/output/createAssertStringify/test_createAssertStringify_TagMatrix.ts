import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_createAssertStringify_TagMatrix = _test_assertStringify(
    "TagMatrix",
    TagMatrix.generate,
    (input: any): string => {
        const assert = (input: any): TagMatrix => {
            const $guard = (typia.createAssertStringify as any).guard;
            const $is_uuid = (typia.createAssertStringify as any).is_uuid;
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
        const stringify = (input: TagMatrix): string => {
            const $string = (typia.createAssertStringify as any).string;
            const $is_uuid = (typia.createAssertStringify as any).is_uuid;
            const $so0 = (input: any): any =>
                `{"matrix":${`[${input.matrix
                    .map(
                        (elem: any) =>
                            `[${elem
                                .map((elem: any) => $string(elem))
                                .join(",")}]`,
                    )
                    .join(",")}]`}}`;
            return $so0(input);
        };
        return stringify(assert(input));
    },
    TagMatrix.SPOILERS,
);
