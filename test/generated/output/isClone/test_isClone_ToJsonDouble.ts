import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_isClone_ToJsonDouble = _test_isClone(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) =>
        ((input: any): typia.Primitive<ToJsonDouble.Parent> | null => {
            const is: any = (input: any): input is ToJsonDouble.Parent => {
                return "object" === typeof input && null !== input && true;
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
            if (!is(input)) return null;
            const output: any = clone(input);
            return output;
        })(input),
);
