import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_misc_clone_ToJsonNull = _test_misc_clone(
    "ToJsonNull",
)<ToJsonNull>(ToJsonNull)((input) =>
    ((input: ToJsonNull): typia.Primitive<ToJsonNull> => {
        return "object" === typeof input &&
            null !== input &&
            "function" === typeof input.toJSON
            ? (input.toJSON() as any)
            : (input as any);
    })(input),
);
