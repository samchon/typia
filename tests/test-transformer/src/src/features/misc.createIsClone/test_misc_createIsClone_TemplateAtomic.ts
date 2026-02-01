import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_createIsClone_TemplateAtomic = (): void => _test_misc_isClone(
    "TemplateAtomic",
)<TemplateAtomic>(
    TemplateAtomic
)(typia.misc.createIsClone<TemplateAtomic>());
