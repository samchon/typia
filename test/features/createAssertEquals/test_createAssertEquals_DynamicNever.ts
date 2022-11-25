import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_DynamicNever = _test_assertEquals(
    "DynamicNever",
    DynamicNever.generate,
    TSON.createAssertEquals<DynamicNever>(),
);