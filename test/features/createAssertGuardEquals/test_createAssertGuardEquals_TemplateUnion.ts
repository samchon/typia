import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createAssertGuardEquals_TemplateUnion =
  _test_assertGuardEquals("TemplateUnion")<TemplateUnion>(TemplateUnion)(
    typia.createAssertGuardEquals<TemplateUnion>(),
  );
