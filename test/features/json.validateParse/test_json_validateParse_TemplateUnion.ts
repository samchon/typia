import typia from "../../../src";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_json_validateParse_TemplateUnion = _test_json_validateParse(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)((input) => typia.json.validateParse<TemplateUnion>(input));
