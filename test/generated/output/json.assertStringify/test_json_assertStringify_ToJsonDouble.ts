import typia from "../../../../src";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_json_assertStringify_ToJsonDouble =
    _test_json_assertStringify<ToJsonDouble>(ToJsonDouble)((input) =>
        ((input: any): string => {
            const assert = (input: any): ToJsonDouble.Parent => {
                const __is = (input: any): input is ToJsonDouble.Parent => {
                    return "object" === typeof input && null !== input && true;
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ToJsonDouble.Parent => {
                        const $guard = (typia.json.assertStringify as any)
                            .guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean => true;
                        return (
                            ((("object" === typeof input &&
                                null !== input &&
                                false === Array.isArray(input)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ToJsonDouble.Parent",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ToJsonDouble.Parent",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify = (input: ToJsonDouble.Parent): string => {
                const $number = (typia.json.assertStringify as any).number;
                return `{"id":${$number((input.toJSON() as any).id)},"flag":${
                    (input.toJSON() as any).flag
                }}`;
            };
            return stringify(assert(input));
        })(input),
    );
