import typia from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_ToJsonDouble = _test_clone("ToJsonDouble", ToJsonDouble.generate, (input: Parent): typia.Primitive<Parent> => {
    const $co0 = (input: any) => ({
        id: input.id,
        flag: input.flag
    });
    return "object" === typeof input && null !== input && "function" === typeof input.toJSON ? "object" === typeof input.toJSON() && null !== input.toJSON() ? $co0(input.toJSON()) : input.toJSON() : input;
});
