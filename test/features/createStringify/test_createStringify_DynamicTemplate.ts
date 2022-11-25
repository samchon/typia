import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_DynamicTemplate = _test_stringify(
    "DynamicTemplate",
    DynamicTemplate.generate,
    TSON.createStringify<DynamicTemplate>(),
);
