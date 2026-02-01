import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_json_stringify_TemplateUnion = (): void => _test_json_stringify(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)((input) => typia.json.stringify<TemplateUnion>(input));
