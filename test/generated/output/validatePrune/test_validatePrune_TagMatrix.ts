import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_validatePrune_TagMatrix = _test_validatePrune(
    "TagMatrix",
    TagMatrix.generate,
    (input) =>
        ((input: any): typia.IValidation<TagMatrix> => {
            const validate = (input: any): typia.IValidation<TagMatrix> => {
                const __is = (input: any): input is TagMatrix => {
                    const $io0 = (input: any): boolean =>
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
                const errors = [] as any[];
                const $report = (typia.validatePrune as any).report(errors);
                const $is_uuid = (typia.validatePrune as any).is_uuid;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagMatrix => {
                        const $vo0 = (
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
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".matrix[" +
                                                                    _index1 +
                                                                    "]",
                                                                expected:
                                                                    "Array.length (@items 3)",
                                                                value: elem,
                                                            },
                                                        ))) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".matrix[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "Array<string>",
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
                                                            (flag: boolean) =>
                                                                flag,
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
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const prune = (input: TagMatrix): void => {
                const $is_uuid = (typia.validatePrune as any).is_uuid;
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("matrix" === key) continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            const output = validate(input);
            if (output.success) prune(input);
            return output;
        })(input),
    TagMatrix.SPOILERS,
);
