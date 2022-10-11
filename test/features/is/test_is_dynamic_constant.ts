import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_is } from "./_test_is";

export const test_is_dynamic_constant = _test_is(
    "dynamic constant",
    DynamicConstant.generate,
    (input) => TSON.is(input),
    [(input) => (input["a"] = "zero" as any), (input) => (input["b"] = null!)],
);
