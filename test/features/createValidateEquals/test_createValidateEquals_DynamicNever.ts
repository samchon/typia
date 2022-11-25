import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_DynamicNever = _test_validateEquals(
    "DynamicNever",
    DynamicNever.generate,
    TSON.createValidateEquals<DynamicNever>(),
);