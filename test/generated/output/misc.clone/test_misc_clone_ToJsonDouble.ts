import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_misc_clone_ToJsonDouble = _test_misc_clone<ToJsonDouble>(
    ToJsonDouble,
)((input) =>
    ((input: ToJsonDouble.Parent): typia.Primitive<ToJsonDouble.Parent> => {
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
    })(input),
);
