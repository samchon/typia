import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_validate } from "./_test_validate";

export const test_validate_atomic_alias = _test_validate(
    "generic alias",
    AtomicAlias.generate,
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
