import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_createValidateStringify_TagMatrix = _test_validateStringify(
    "TagMatrix",
    TagMatrix.generate,
    (input: TagMatrix): typia.IValidation<string> => {
        const validate: any = (input: any): typia.IValidation<TagMatrix> => {
            const __is: any = (input: any): input is TagMatrix => {
                const $is_uuid: any = (typia.createValidateStringify as any)
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
                                    "string" === typeof elem && $is_uuid(elem),
                            ),
                    );
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const errors: any = [] as any[];
            const $report: any = (typia.createValidateStringify as any).report(
                errors,
            );
            const $is_uuid: any = (typia.createValidateStringify as any)
                .is_uuid;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagMatrix => {
                    const $vo0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            (((Array.isArray(input.matrix) &&
                                (3 === input.matrix.length ||
                                    $report(_exceptionable, {
                                        path: _path + ".matrix",
                                        expected: "Array.length (@items 3)",
                                        value: input.matrix,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".matrix",
                                    expected: "Array<Array<string>>",
                                    value: input.matrix,
                                })) &&
                                input.matrix
                                    .map(
                                        (elem: any, _index1: number) =>
                                            (((Array.isArray(elem) &&
                                                (3 === elem.length ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".matrix[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "Array.length (@items 3)",
                                                        value: elem,
                                                    }))) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".matrix[" +
                                                        _index1 +
                                                        "]",
                                                    expected: "Array<string>",
                                                    value: elem,
                                                })) &&
                                                elem
                                                    .map(
                                                        (
                                                            elem: any,
                                                            _index2: number,
                                                        ) =>
                                                            ("string" ===
                                                                typeof elem &&
                                                                ($is_uuid(
                                                                    elem,
                                                                ) ||
                                                                    $report(
                                                                        _exceptionable,
                                                                        {
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
                                                                        },
                                                                    ))) ||
                                                            $report(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        ".matrix[" +
                                                                        _index1 +
                                                                        "][" +
                                                                        _index2 +
                                                                        "]",
                                                                    expected:
                                                                        "string",
                                                                    value: elem,
                                                                },
                                                            ),
                                                    )
                                                    .every(
                                                        (flag: boolean) => flag,
                                                    )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".matrix[" +
                                                    _index1 +
                                                    "]",
                                                expected: "Array<string>",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".matrix",
                                    expected: "Array<Array<string>>",
                                    value: input.matrix,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TagMatrix",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "TagMatrix",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            const success: any = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        const stringify: any = (input: TagMatrix): string => {
            const $string: any = (typia.createValidateStringify as any).string;
            const $is_uuid: any = (typia.createValidateStringify as any)
                .is_uuid;
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
        const output: any = validate(input) as any;
        if (output.success) output.data = stringify(input);
        return output;
    },
    TagMatrix.SPOILERS,
);
