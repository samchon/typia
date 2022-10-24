import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_dynamic_template = _test_stringify(
    "dynamic template",
    DynamicTemplate.generate,
    TSON.createStringify<DynamicTemplate>(),
);
