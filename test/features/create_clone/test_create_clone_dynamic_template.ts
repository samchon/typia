import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_dynamic_template = _test_clone(
    "dynamic template",
    DynamicTemplate.generate,
    TSON.createClone<DynamicTemplate>(),
);
