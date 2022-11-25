import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_DynamicEnumeration = _test_stringify(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    TSON.createStringify<DynamicEnumeration>(),
);