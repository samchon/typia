import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_validateEquals_TemplateAtomic =
    _test_validateEquals<TemplateAtomic>(TemplateAtomic)((input) =>
        typia.validateEquals(input),
    );
