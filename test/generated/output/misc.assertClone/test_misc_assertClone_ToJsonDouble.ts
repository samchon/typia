import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_misc_assertClone_ToJsonDouble =
    _test_misc_assertClone<ToJsonDouble>(ToJsonDouble)((input) =>
        ((input: any): typia.Primitive<ToJsonDouble.Parent> => {
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
                        const $guard = (typia.misc.assertClone as any).guard;
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
            const clone = (
                input: ToJsonDouble.Parent,
            ): typia.Primitive<ToJsonDouble.Parent> => {
                const $co1 = (input: any): any => ({
                    id: input.id as any,
                    flag: input.flag as any,
                });
                return "object" === typeof input &&
                    null !== input &&
                    "function" === typeof input.toJSON
                    ? "object" === typeof input.toJSON() &&
                      null !== input.toJSON()
                        ? $co1(input.toJSON())
                        : (input.toJSON() as any)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    );
