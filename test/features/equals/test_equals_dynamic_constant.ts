import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_equals } from "./_test_equals";

export const test_equals_dynamic_constant = _test_equals(
    "dynamic constant",
    DynamicConstant.generate,
    (input) => TSON.equals(input),
);
