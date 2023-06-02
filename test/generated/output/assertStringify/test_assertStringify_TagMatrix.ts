import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_assertStringify_TagMatrix = _test_assertStringify(
    "TagMatrix",
    TagMatrix.generate,
    (input) =>
        ((input: any): string => {
            const assert: any = (input: any): TagMatrix => {
                const __is: any = (input: any): input is TagMatrix => {
                    const $is_uuid: any = (typia.assertStringify as any)
                        .is_uuid;
                    const $io0: any = (input: any): boolean =>
                        Array.isArray(input.matrix) &&
                        3 === input.matrix.length &&
                        input.matrix.every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                3 === elem.length &&
                                elem.every(
                                    (elem: any) =>
                                        "string" === typeof elem &&
                                        $is_uuid(elem),
                                ),
                        );
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                const $guard: any = (typia.assertStringify as any).guard;
                const $is_uuid: any = (typia.assertStringify as any).is_uuid;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagMatrix => {
                        const $ao0: any = (
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
                                                    _path +
                                                    ".matrix[" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "Array.length (@items 3)",
                                                value: elem,
                                            }))) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".matrix[" +
                                                _index1 +
                                                "]",
                                            expected: "Array<string>",
                                            value: elem,
                                        })) &&
                                    elem.every(
                                        (elem: any, _index2: number) =>
                                            ("string" === typeof elem &&
                                                ($is_uuid(elem) ||
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
                                    expected: "TagMatrix",
                                    value: input,
                                })) &&
                            $ao0(input, _path + "", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify: any = (input: TagMatrix): string => {
                const $string: any = (typia.assertStringify as any).string;
                const $is_uuid: any = (typia.assertStringify as any).is_uuid;
                const $so0: any = (input: any): any =>
                    `{"matrix":${(() =>
                        `[${input.matrix
                            .map((elem: any) =>
                                (() =>
                                    `[${elem
                                        .map((elem: any) => $string(elem))
                                        .join(",")}]`)(),
                            )
                            .join(",")}]`)()}}`;
                return $so0(input);
            };
            return stringify(assert(input));
        })(input),
    TagMatrix.SPOILERS,
);
