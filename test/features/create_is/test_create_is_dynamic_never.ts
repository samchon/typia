import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_is } from "./../is/_test_is";

export const test_create_is_dynamic_never = _test_is(
    "dynamic tree",
    DynamicNever.generate,
    TSON.createIs<DynamicNever>(),
    DynamicNever.SPOILERS,
);
