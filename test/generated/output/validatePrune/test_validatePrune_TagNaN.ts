import typia from "../../../../src";
import { TagNaN } from "../../../structures/TagNaN";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_TagNaN = _test_validatePrune(
    "TagNaN",
    TagNaN.generate,
    (input) =>
        ((input: any): typia.IValidation<TagNaN> => {
            const validate = (input: any): typia.IValidation<TagNaN> => {
                const errors = [] as any[];
                const $report = (typia.validatePrune as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagNaN => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("number" === typeof input.value &&
                                Number.isFinite(input.value)) ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "number",
                                    value: input.value,
                                }),
                            ("number" === typeof input.ranged &&
                                0 <= input.ranged &&
                                100 >= input.ranged) ||
                                $report(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "number",
                                    value: input.ranged,
                                }),
                            ("number" === typeof input.minimum &&
                                Number.isFinite(input.minimum) &&
                                0 <= input.minimum) ||
                                $report(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "number",
                                    value: input.minimum,
                                }),
                            ("number" === typeof input.maximum &&
                                Number.isFinite(input.maximum) &&
                                100 >= input.maximum) ||
                                $report(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: "number",
                                    value: input.maximum,
                                }),
                            ("number" === typeof input.multipleOf &&
                                0 === input.multipleOf % 3) ||
                                $report(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "number",
                                    value: input.multipleOf,
                                }),
                            ("number" === typeof input.typed &&
                                Number.isFinite(input.typed) &&
                                parseInt(input.typed) === input.typed) ||
                                $report(_exceptionable, {
                                    path: _path + ".typed",
                                    expected: "number",
                                    value: input.typed,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Resolve<TagNaN>",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Resolve<TagNaN>",
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
            const prune = (input: TagNaN): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "value" === key ||
                            "ranged" === key ||
                            "minimum" === key ||
                            "maximum" === key ||
                            "multipleOf" === key ||
                            "typed" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            const output = validate(input);
            if (output.success) prune(input);
            return output;
        })(input),
    TagNaN.SPOILERS,
);
