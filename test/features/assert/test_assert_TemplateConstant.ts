import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_assert_TemplateConstant = _test_assert(
  "TemplateConstant",
)<TemplateConstant>(TemplateConstant)((input) =>
  typia.assert<TemplateConstant>(input),
);
