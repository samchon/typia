import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_misc_isClone_ToJsonDouble = _test_misc_isClone<ToJsonDouble>(
    ToJsonDouble,
)((input: any): typia.Primitive<ToJsonDouble> | null => {
    const is = (input: any): input is ToJsonDouble => {
        return "object" === typeof input && null !== input && true;
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
    if (!is(input)) return null;
    const output = clone(input);
    return output;
});
