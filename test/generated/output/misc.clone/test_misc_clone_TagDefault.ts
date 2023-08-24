import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { TagDefault } from "../../../structures/TagDefault";

export const test_misc_clone_TagDefault = _test_misc_clone(
    "TagDefault",
)<TagDefault>(TagDefault)((input) =>
    ((input: TagDefault): typia.Resolved<TagDefault> => {
        const $co0 = (input: any): any => ({
            boolean: input.boolean as any,
            number: input.number as any,
            string: input.string as any,
            text: input.text as any,
            template: input.template as any,
            boolean_and_number_and_string:
                input.boolean_and_number_and_string as any,
            union_but_boolean: input.union_but_boolean as any,
            union_but_number: input.union_but_number as any,
            union_but_string: input.union_but_string as any,
            vulnerable_range: input.vulnerable_range as any,
            vulnerable_template: input.vulnerable_template as any,
            boolean_and_number_and_template:
                input.boolean_and_number_and_template as any,
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    })(input),
);
