import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_DynamicTemplate = _test_equals(
    "DynamicTemplate",
    DynamicTemplate.generate,
    TSON.createEquals<DynamicTemplate>(),
);