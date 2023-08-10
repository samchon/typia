import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_json_isParse_TemplateUnion =
    _test_json_isParse<TemplateUnion>(TemplateUnion)((input) =>
        typia.json.isParse<TemplateUnion>(input),
    );
