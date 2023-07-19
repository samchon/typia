import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_json_isStringify_ObjectTuple =
    _test_json_isStringify<ObjectTuple>(ObjectTuple)((input) =>
        ((
            input: [ObjectTuple.ISection, ObjectTuple.ICitizen],
        ): string | null => {
            const is = (
                input: any,
            ): input is [ObjectTuple.ISection, ObjectTuple.ICitizen] => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.code &&
                    "string" === typeof input.name;
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.mobile &&
                    "string" === typeof input.name;
                return (
                    Array.isArray(input) &&
                    input.length === 2 &&
                    "object" === typeof input[0] &&
                    null !== input[0] &&
                    $io0(input[0]) &&
                    "object" === typeof input[1] &&
                    null !== input[1] &&
                    $io1(input[1])
                );
            };
            const stringify = (
                input: [ObjectTuple.ISection, ObjectTuple.ICitizen],
            ): string => {
                const $string = (typia.json.isStringify as any).string;
                return `[${`{"id":${$string(
                    (input[0] as any).id,
                )},"code":${$string((input[0] as any).code)},"name":${$string(
                    (input[0] as any).name,
                )}}`},${`{"id":${$string(
                    (input[1] as any).id,
                )},"mobile":${$string(
                    (input[1] as any).mobile,
                )},"name":${$string((input[1] as any).name)}}`}]`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    );
