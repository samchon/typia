import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createAssert_TemplateUnion = _test_assert(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)(typia.createAssert<TemplateUnion>());
