import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createClone_DynamicTemplate = _test_clone(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createClone<DynamicTemplate>(),
);
