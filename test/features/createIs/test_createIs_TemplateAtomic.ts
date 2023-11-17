import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createIs_TemplateAtomic = _test_is(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)(typia.createIs<TemplateAtomic>());
