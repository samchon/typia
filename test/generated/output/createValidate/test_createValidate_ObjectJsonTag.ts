import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_validate_ObjectJsonTag = _test_validate<ObjectJsonTag>(
    ObjectJsonTag,
)((input: any): typia.IValidation<ObjectJsonTag> => {
    const errors = [] as any[];
    const __is = (input: any): input is ObjectJsonTag => {
        const $is_custom = (typia.createValidate as any).is_custom;
        return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).vulnerable &&
            $is_custom("deprecated", "string", "", (input as any).vulnerable) &&
            "string" === typeof (input as any).description &&
            "string" === typeof (input as any).title &&
            $is_custom("title", "string", "something", (input as any).title) &&
            "string" === typeof (input as any).complicate_title
        );
    };
    if (false === __is(input)) {
        const $report = (typia.createValidate as any).report(errors);
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ObjectJsonTag => {
            const $is_custom = (typia.createValidate as any).is_custom;
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ("string" === typeof input.vulnerable &&
                        ($is_custom(
                            "deprecated",
                            "string",
                            "",
                            input.vulnerable,
                        ) ||
                            $report(_exceptionable, {
                                path: _path + ".vulnerable",
                                expected: "string (@deprecated)",
                                value: input.vulnerable,
                            }))) ||
                        $report(_exceptionable, {
                            path: _path + ".vulnerable",
                            expected: "string",
                            value: input.vulnerable,
                        }),
                    "string" === typeof input.description ||
                        $report(_exceptionable, {
                            path: _path + ".description",
                            expected: "string",
                            value: input.description,
                        }),
                    ("string" === typeof input.title &&
                        ($is_custom(
                            "title",
                            "string",
                            "something",
                            input.title,
                        ) ||
                            $report(_exceptionable, {
                                path: _path + ".title",
                                expected: "string (@title something)",
                                value: input.title,
                            }))) ||
                        $report(_exceptionable, {
                            path: _path + ".title",
                            expected: "string",
                            value: input.title,
                        }),
                    "string" === typeof input.complicate_title ||
                        $report(_exceptionable, {
                            path: _path + ".complicate_title",
                            expected: "string",
                            value: input.complicate_title,
                        }),
                ].every((flag: boolean) => flag);
            return (
                ((("object" === typeof input && null !== input) ||
                    $report(true, {
                        path: _path + "",
                        expected: "ObjectJsonTag",
                        value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                $report(true, {
                    path: _path + "",
                    expected: "ObjectJsonTag",
                    value: input,
                })
            );
        })(input, "$input", true);
    }
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined,
    } as any;
});
