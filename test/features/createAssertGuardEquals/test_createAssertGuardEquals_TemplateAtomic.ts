import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createAssertGuardEquals_TemplateAtomic =
  _test_assertGuardEquals("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)(
    typia.createAssertGuardEquals<TemplateAtomic>(),
  );
