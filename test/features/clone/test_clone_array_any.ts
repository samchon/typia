import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_clone } from "./_test_clone";

export const test_clone_array_any = _test_clone(
    "any array",
    ArrayAny.generate,
    (input) => TSON.clone(input),
);
