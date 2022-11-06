import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_dynamic_undefined = _test_stringify(
    "dynamic tree",
    DynamicUndefined.generate,
    (input) => TSON.stringify(input),
);
