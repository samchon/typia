import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_createAssertStringify_ToJsonDouble = _test_assertStringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input: any): string => {
        const assert = (input: any): ToJsonDouble => {
            const $guard = (typia.createAssertStringify as any).guard;
            const __is = (input: any): input is ToJsonDouble => {
                return "object" === typeof input && null !== input && true;
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ToJsonDouble => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean => true;
                    return (
                        (("object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "Resolve<ToJsonDouble.Parent>",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
            return input;
        };
        const stringify = (input: ToJsonDouble): string => {
            const $number = (typia.createAssertStringify as any).number;
            const $so0 = (input: any): any =>
                `{"id":${$number(input.id)},"flag":${input.flag}}`;
            return $so0(input.toJSON());
        };
        return stringify(assert(input));
    },
);
