import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_validate } from "./_test_validate";

export const test_validate_constant_atomic = _test_validate(
    "constant atomic",
    ConstantAtomicSimple.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input[0] = true as false;
            return ["$input[0]"];
        },
        (input) => {
            input[1] = false as true;
            return ["$input[1]"];
        },
        (input) => {
            input[2] = 3 as 2;
            return ["$input[2]"];
        },
        (input) => {
            input[3] = "two" as "three";
            return ["$input[3]"];
        },
    ],
);
