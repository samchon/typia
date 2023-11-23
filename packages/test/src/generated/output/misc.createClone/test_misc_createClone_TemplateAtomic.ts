import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_misc_createClone_TemplateAtomic = _test_misc_clone(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)(
  (input: TemplateAtomic): typia.Resolved<TemplateAtomic> => {
    const $co0 = (input: any): any => ({
      prefix: input.prefix as any,
      postfix: input.postfix as any,
      middle_string: input.middle_string as any,
      middle_string_empty: input.middle_string_empty as any,
      middle_numeric: input.middle_numeric as any,
      middle_boolean: input.middle_boolean as any,
      ipv4: input.ipv4 as any,
      email: input.email as any,
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  },
);
