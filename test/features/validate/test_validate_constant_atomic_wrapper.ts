import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_validate } from "./_test_validate";

export const test_validate_constant_atomic_wrapper = _test_validate(
    "wrapped atomic constant",
    ConstantAtomicWrapper.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => {
    //         input[0].value = null!;
    //         return ["$input[0].value"];
    //     },
    //     (input) => {
    //         input[1].value = (() => 3) as any;
    //         return ["$input[1].value"];
    //     },
    //     (input) => {
    //         input[2].value = { value: "two" } as any;
    //         return ["$input[2].value"];
    //     },
    // ],
);
