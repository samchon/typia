import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_isStringify_ClassGetter = _test_isStringify(
    "ClassGetter",
    ClassGetter.generate,
    (input) =>
        ((input: ClassGetter.Person): string | null => {
            const is: any = (input: any): input is ClassGetter.Person => {
                const $io0: any = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    (null === input.dead || "boolean" === typeof input.dead);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const stringify: any = (input: ClassGetter.Person): string => {
                const $string: any = (typia.isStringify as any).string;
                const $so0: any = (input: any): any =>
                    `{"id":${$string(input.id)},"name":${$string(
                        input.name,
                    )},"dead":${null !== input.dead ? input.dead : "null"}}`;
                return $so0(input);
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ClassGetter.SPOILERS,
);
