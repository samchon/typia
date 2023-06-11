import typia from "../../../../src";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { _test_clone } from "../../../internal/_test_clone";
export const test_clone_ToJsonDouble = _test_clone("ToJsonDouble", ToJsonDouble.generate, (input) => ((input: ToJsonDouble.Parent): typia.Primitive<ToJsonDouble.Parent> => {
    const $co0 = (input: any): any => ({
        id: input.id as any,
        flag: input.flag as any
    });
    return "object" === typeof input && null !== input && "function" === typeof input.toJSON ? "object" === typeof input.toJSON() && null !== input.toJSON() ? $co0(input.toJSON()) : input.toJSON() as any : input as any;
})(input));
