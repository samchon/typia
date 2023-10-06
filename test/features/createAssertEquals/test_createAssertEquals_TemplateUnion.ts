import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createAssertEquals_TemplateUnion = _test_assertEquals(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)(typia.createAssertEquals<TemplateUnion>());
