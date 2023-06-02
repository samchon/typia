import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createStringify_DynamicEnumeration = _test_stringify(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.createStringify<DynamicEnumeration>(),
);
