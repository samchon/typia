import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_isClone_ClassGetter = _test_isClone(
    "ClassGetter",
    ClassGetter.generate,
    (input) =>
        ((input: any): typia.Primitive<ClassGetter.Person> | null => {
            const is: any = (input: any): input is ClassGetter.Person => {
                const $io0: any = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    (null === input.dead || "boolean" === typeof input.dead);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const clone: any = (
                input: ClassGetter.Person,
            ): typia.Primitive<ClassGetter.Person> => {
                const $co0: any = (input: any): any => ({
                    id: input.id as any,
                    name: input.name as any,
                    dead: input.dead as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output: any = clone(input);
            return output;
        })(input),
    ClassGetter.SPOILERS,
);
