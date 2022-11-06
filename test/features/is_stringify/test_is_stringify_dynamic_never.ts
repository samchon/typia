import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_dynamic_never = _test_is_stringify(
    "dynamic tree",
    DynamicNever.generate,
    (input) => TSON.isStringify(input),
    DynamicNever.SPOILERS,
);
