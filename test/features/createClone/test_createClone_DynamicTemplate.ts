import typia from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_DynamicTemplate = _test_clone(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createClone<DynamicTemplate>(),
);
