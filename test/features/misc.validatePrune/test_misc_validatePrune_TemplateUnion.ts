import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_validatePrune_TemplateUnion =
    _test_misc_validatePrune<TemplateUnion>(TemplateUnion)((input) =>
        typia.misc.validatePrune(input),
    );
