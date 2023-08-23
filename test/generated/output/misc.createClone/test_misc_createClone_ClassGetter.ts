import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_misc_clone_ClassGetter = _test_misc_clone(
    "ClassGetter",
)<ClassGetter>(ClassGetter)(
    (input: ClassGetter): typia.Resolved<ClassGetter> => {
        const $co0 = (input: any): any => ({
            id: input.id as any,
            name: input.name as any,
            dead: input.dead as any,
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    },
);
