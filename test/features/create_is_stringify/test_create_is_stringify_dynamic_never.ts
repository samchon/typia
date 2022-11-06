import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_dynamic_never = _test_is_stringify(
    "dynamic tree",
    DynamicNever.generate,
    TSON.createIsStringify<DynamicNever>(),
    DynamicNever.SPOILERS,
);
