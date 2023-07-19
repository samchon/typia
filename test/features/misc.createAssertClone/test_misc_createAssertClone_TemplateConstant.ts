import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_misc_assertClone_TemplateConstant =
    _test_misc_assertClone<TemplateConstant>(TemplateConstant)(
        typia.misc.createAssertClone<TemplateConstant>(),
    );
