import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_is } from "./../is/_test_is";

export const test_create_is_dynamic_constant = _test_is(
    "dynamic constant",
    DynamicConstant.generate,
    TSON.createIs<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
