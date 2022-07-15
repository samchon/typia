import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_validate } from "./_test_validate";

export const test_validate_atomic_simple = _test_validate(
    "atomic",
    AtomicSimple.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input[0] = 0 as any;
            return ["$input[0]"];
        },
        (input) => {
            input[1] = "one" as any;
            return ["$input[1]"];
        },
        (input) => {
            input[2] = 2 as any;
            return ["$input[2]"];
        },
    ],
);
