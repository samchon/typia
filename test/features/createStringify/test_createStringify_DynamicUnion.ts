import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createStringify_DynamicUnion = _test_stringify(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createStringify<DynamicUnion>(),
);
