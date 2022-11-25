import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_DynamicNever = _test_validateEquals(
    "DynamicNever",
    DynamicNever.generate,
    (input) => TSON.validateEquals(input),
);