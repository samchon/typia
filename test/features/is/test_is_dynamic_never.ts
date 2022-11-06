import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_is } from "./_test_is";

export const test_is_dynamic_never = _test_is(
    "dynamic tree",
    DynamicNever.generate,
    (input) => TSON.is(input),
    DynamicNever.SPOILERS,
);
