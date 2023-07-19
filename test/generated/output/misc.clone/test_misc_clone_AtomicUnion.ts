import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_misc_clone_AtomicUnion = _test_misc_clone<AtomicUnion>(
    AtomicUnion,
)((input) =>
    ((
        input: Array<AtomicUnion.Union>,
    ): typia.Primitive<Array<AtomicUnion.Union>> => {
        const $cp0 = (input: any) => input.map((elem: any) => elem as any);
        return Array.isArray(input) ? $cp0(input) : (input as any);
    })(input),
);
