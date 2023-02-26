import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_assertClone_ToJsonDouble = _test_assertClone(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) =>
        ((input: any): typia.Primitive<ToJsonDouble.Parent> => {
            const assert = (input: any): ToJsonDouble.Parent => {
                const $guard = (typia.assertClone as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ToJsonDouble.Parent => {
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
            const clone = (
                input: ToJsonDouble.Parent,
            ): typia.Primitive<ToJsonDouble.Parent> => {
                const $co0 = (input: any): any => ({
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
            const output = clone(input);
            return output;
        })(input),
);
