import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_json_createValidateParse_TemplateUnion = (): void => _test_json_validateParse(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)(typia.json.createValidateParse<TemplateUnion>());
