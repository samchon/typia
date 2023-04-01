import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { TagType } from "../../../structures/TagType";

export const test_createValidate_TagType = _test_validate(
    "TagType",
    TagType.generate,
    (input: any): typia.IValidation<TagType> => {
        const errors = [] as any[];
        const $report = (typia.createValidate as any).report(errors);
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagType => {
            const $vo0 = (
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
                        expected: "Array<Resolve<TagType.Type>>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "Resolve<TagType.Type>",
                                        value: elem,
                                    })) &&
                                    $vo0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    )) ||
                                $report(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "Resolve<TagType.Type>",
                                    value: elem,
                                }),
                        )
                        .every((flag: boolean) => flag)) ||
                $report(true, {
                    path: _path + "",
                    expected: "Array<Resolve<TagType.Type>>",
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
    },
    TagType.SPOILERS,
);
