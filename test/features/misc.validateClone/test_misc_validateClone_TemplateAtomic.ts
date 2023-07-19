import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_validateClone_TemplateAtomic =
    _test_misc_validateClone<TemplateAtomic>(TemplateAtomic)((input) =>
        typia.misc.validateClone(input),
    );
