import typia from "../../../../src";
import { SetUnion } from "../../../structures/SetUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_SetUnion = _test_clone(
    "SetUnion",
    SetUnion.generate,
    (input: SetUnion): typia.Primitive<SetUnion> => {
        return Array.isArray(input)
            ? input.map((elem: any) =>
                  elem instanceof Set ? {} : (elem as any),
              )
            : (input as any);
    },
);
