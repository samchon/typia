import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { SetUnion } from "../../../structures/SetUnion";

export const test_createClone_SetUnion = _test_clone(
    "SetUnion",
    SetUnion.generate,
    (input: SetUnion): typia.Primitive<SetUnion> => {
        const $cp0 = (input: any) =>
            input.map((elem: any) =>
                elem instanceof Set ? {} : (elem as any),
            );
        return Array.isArray(input) ? $cp0(input) : (input as any);
    },
);
