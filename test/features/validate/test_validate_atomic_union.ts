import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_validate } from "./_test_validate";

export const test_validate_atomic_union = _test_validate(
    "union atomic",
    AtomicUnion.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input[0] = [] as any;
            return ["$input[0]"];
        },
        (input) => {
            input[1] = {} as any;
            return ["$input[1]"];
        },
        (input) => {
            input[2] = undefined!;
            return ["$input[2]"];
        },
    ],
);
