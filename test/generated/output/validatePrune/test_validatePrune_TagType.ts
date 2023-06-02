import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { TagType } from "../../../structures/TagType";

export const test_validatePrune_TagType = _test_validatePrune(
    "TagType",
    TagType.generate,
    (input) =>
        ((input: any): typia.IValidation<Array<TagType.Type>> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<Array<TagType.Type>> => {
                const __is: any = (
                    input: any,
                ): input is Array<TagType.Type> => {
                    const $io0: any = (input: any): boolean =>
                        "number" === typeof input.int &&
                        Number.isFinite(input.int) &&
                        parseInt(input.int) === input.int &&
                        "number" === typeof input.uint &&
                        Number.isFinite(input.uint) &&
                        parseInt(input.uint) === input.uint &&
                        0 <= input.uint;
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        )
                    );
                };
                const errors: any = [] as any[];
                const $report: any = (typia.validatePrune as any).report(
                    errors,
                );
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<TagType.Type> => {
                        const $vo0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("number" === typeof input.int &&
                                    Number.isFinite(input.int) &&
                                    (parseInt(input.int) === input.int ||
                                        $report(_exceptionable, {
                                            path: _path + ".int",
                                            expected: "number (@type int)",
                                            value: input.int,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".int",
                                        expected: "number",
                                        value: input.int,
                                    }),
                                ("number" === typeof input.uint &&
                                    Number.isFinite(input.uint) &&
                                    (parseInt(input.uint) === input.uint ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint",
                                            expected: "number (@type uint)",
                                            value: input.uint,
                                        })) &&
                                    (0 <= input.uint ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint",
                                            expected: "number (@type uint)",
                                            value: input.uint,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".uint",
                                        expected: "number",
                                        value: input.uint,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "Array<TagType.Type>",
                                    value: input,
                                })) &&
                                input
                                    .map(
                                        (elem: any, _index1: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected: "TagType.Type",
                                                    value: elem,
                                                })) &&
                                                $vo0(
                                                    elem,
                                                    _path + "[" + _index1 + "]",
                                                    true,
                                                )) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected: "TagType.Type",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Array<TagType.Type>",
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
            const prune: any = (input: Array<TagType.Type>): void => {
                const $po0: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if ("int" === key || "uint" === key) continue;
                        delete input[key];
                    }
                };
                if (Array.isArray(input))
                    (() =>
                        input.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $po0(elem);
                        }))();
            };
            const output: any = validate(input);
            if (output.success) prune(input);
            return output;
        })(input),
    TagType.SPOILERS,
);
