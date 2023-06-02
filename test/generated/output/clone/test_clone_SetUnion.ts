import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { SetUnion } from "../../../structures/SetUnion";

export const test_clone_SetUnion = _test_clone(
    "SetUnion",
    SetUnion.generate,
    (input) =>
        ((
            input: Array<SetUnion.Union>,
        ): typia.Primitive<Array<SetUnion.Union>> => {
            return Array.isArray(input)
                ? (() =>
                      input.map((elem: any) =>
                          elem instanceof Set ? {} : (elem as any),
                      ))()
                : (input as any);
        })(input),
);
