import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_validateParse_TemplateAtomic =
    _test_json_validateParse<TemplateAtomic>(TemplateAtomic)(
        typia.json.createValidateParse<TemplateAtomic>(),
    );
