import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createEquals_DynamicUnion = _test_equals(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createEquals<DynamicUnion>(),
);
