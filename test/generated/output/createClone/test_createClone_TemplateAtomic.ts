import typia from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_TemplateAtomic = _test_clone("TemplateAtomic", TemplateAtomic.generate, (input: TemplateAtomic): typia.Primitive<TemplateAtomic> => {
    const $co0 = (input: any) => ({
        prefix: input.prefix,
        postfix: input.postfix,
        middle_string: input.middle_string,
        middle_string_empty: input.middle_string_empty,
        middle_numeric: input.middle_numeric,
        middle_boolean: input.middle_boolean,
        ipv4: input.ipv4,
        email: input.email
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
});
