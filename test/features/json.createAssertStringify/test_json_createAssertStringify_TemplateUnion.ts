import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_json_createAssertStringify_TemplateUnion =
  _test_json_assertStringify("TemplateUnion")<TemplateUnion>(TemplateUnion)(
    typia.json.createAssertStringify<TemplateUnion>(),
  );
