import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_DynamicUnion = _test_equals(
    "DynamicUnion",
    DynamicUnion.generate,
    TSON.createEquals<DynamicUnion>(),
);