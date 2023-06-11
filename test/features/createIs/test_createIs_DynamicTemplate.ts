import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createIs_DynamicTemplate = _test_is(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createIs<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
