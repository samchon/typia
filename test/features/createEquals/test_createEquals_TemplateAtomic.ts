import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_equals_TemplateAtomic = _test_equals<TemplateAtomic>(
    TemplateAtomic,
)(typia.createEquals<TemplateAtomic>());
