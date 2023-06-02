import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_createAssert_ToJsonDouble = _test_assert(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input: any): ToJsonDouble => {
        const __is: any = (input: any): input is ToJsonDouble => {
            return "object" === typeof input && null !== input && true;
        };
        const $guard: any = (typia.createAssert as any).guard;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ToJsonDouble => {
                const $ao0: any = (
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
                            expected: "ToJsonDouble.Parent",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
        return input;
    },
);
