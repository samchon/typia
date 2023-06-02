import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_assertClone_ToJsonDouble = _test_assertClone(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) =>
        ((input: any): typia.Primitive<ToJsonDouble.Parent> => {
            const assert: any = (input: any): ToJsonDouble.Parent => {
                const __is: any = (
                    input: any,
                ): input is ToJsonDouble.Parent => {
                    return "object" === typeof input && null !== input && true;
                };
                const $guard: any = (typia.assertClone as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ToJsonDouble.Parent => {
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
            };
            const clone: any = (
                input: ToJsonDouble.Parent,
            ): typia.Primitive<ToJsonDouble.Parent> => {
                const $co0: any = (input: any): any => ({
                    id: input.id as any,
                    flag: input.flag as any,
                });
                return "object" === typeof input &&
                    null !== input &&
                    "function" === typeof input.toJSON
                    ? "object" === typeof input.toJSON() &&
                      null !== input.toJSON()
                        ? $co0(input.toJSON())
                        : (input.toJSON() as any)
                    : (input as any);
            };
            assert(input);
            const output: any = clone(input);
            return output;
        })(input),
);
