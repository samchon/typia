import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_json_createStringify_TemplateUnion = (): void => _test_json_stringify(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)(typia.json.createStringify<TemplateUnion>());
