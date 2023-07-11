import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_createAssertClone_ToJsonDouble = _test_assertClone(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input: any): typia.Primitive<ToJsonDouble> => {
        const assert = (input: any): ToJsonDouble => {
            const __is = (input: any): input is ToJsonDouble => {
                return "object" === typeof input && null !== input && true;
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ToJsonDouble => {
                    const $guard = (typia.createAssertClone as any).guard;
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
        const clone = (input: ToJsonDouble): typia.Primitive<ToJsonDouble> => {
            const $co1 = (input: any): any => ({
                id: input.id as any,
                flag: input.flag as any,
            });
            return "object" === typeof input &&
                null !== input &&
                "function" === typeof input.toJSON
                ? "object" === typeof input.toJSON() && null !== input.toJSON()
                    ? $co1(input.toJSON())
                    : (input.toJSON() as any)
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
);
