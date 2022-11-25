import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_dynamic_never = _test_stringify(
    "dynamic tree",
    DynamicNever.generate,
    (input) => TSON.stringify(input),
);
