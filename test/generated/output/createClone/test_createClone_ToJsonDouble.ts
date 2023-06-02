import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_createClone_ToJsonDouble = _test_clone(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input: ToJsonDouble): typia.Primitive<ToJsonDouble> => {
        const $co0: any = (input: any): any => ({
            id: input.id as any,
            flag: input.flag as any,
        });
        return "object" === typeof input &&
            null !== input &&
            "function" === typeof input.toJSON
            ? "object" === typeof input.toJSON() && null !== input.toJSON()
                ? $co0(input.toJSON())
                : (input.toJSON() as any)
            : (input as any);
    },
);
