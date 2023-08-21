import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_clone_TemplateUnion = _test_misc_clone(
    "TemplateUnion",
)<TemplateUnion>(TemplateUnion)(typia.misc.createClone<TemplateUnion>());
