import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_DynamicConstant = _test_equals(
    "DynamicConstant",
    DynamicConstant.generate,
    TSON.createEquals<DynamicConstant>(),
);
