import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_json_createValidateStringify_TemplateUnion =
  _test_json_validateStringify("TemplateUnion")<TemplateUnion>(TemplateUnion)(
    typia.json.createValidateStringify<TemplateUnion>(),
  );
