import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_json_isStringify_ClassGetter =
    _test_json_isStringify<ClassGetter>(ClassGetter)((input) =>
        ((input: ClassGetter.Person): string | null => {
            const is = (input: any): input is ClassGetter.Person => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    (null === input.dead || "boolean" === typeof input.dead);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const stringify = (input: ClassGetter.Person): string => {
                const $string = (typia.json.isStringify as any).string;
                const $so0 = (input: any): any =>
                    `{"id":${$string(input.id)},"name":${$string(
                        input.name,
                    )},"dead":${null !== input.dead ? input.dead : "null"}}`;
                return $so0(input);
            };
            return is(input) ? stringify(input) : null;
        })(input),
    );
