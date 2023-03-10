import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createStringify_DynamicTemplate = _test_stringify(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createStringify<DynamicTemplate>(),
);
