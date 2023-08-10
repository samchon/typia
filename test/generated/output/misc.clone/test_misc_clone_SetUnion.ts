import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { SetUnion } from "../../../structures/SetUnion";

export const test_misc_clone_SetUnion = _test_misc_clone<SetUnion>(SetUnion)(
    (input) =>
        ((input: SetUnion): typia.Primitive<SetUnion> => {
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    elem instanceof Set ? {} : (elem as any),
                );
            return Array.isArray(input) ? $cp0(input) : (input as any);
        })(input),
);
