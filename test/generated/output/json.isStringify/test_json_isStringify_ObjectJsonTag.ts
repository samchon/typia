import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_json_isStringify_ObjectJsonTag =
    _test_json_isStringify<ObjectJsonTag>(ObjectJsonTag)((input) =>
        ((input: ObjectJsonTag): string | null => {
            const is = (input: any): input is ObjectJsonTag => {
                const $is_custom = (typia.json.isStringify as any).is_custom;
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).vulnerable &&
                    $is_custom(
                        "deprecated",
                        "string",
                        "",
                        (input as any).vulnerable,
                    ) &&
                    "string" === typeof (input as any).description &&
                    "string" === typeof (input as any).title &&
                    $is_custom(
                        "title",
                        "string",
                        "something",
                        (input as any).title,
                    ) &&
                    "string" === typeof (input as any).complicate_title
                );
            };
            const stringify = (input: ObjectJsonTag): string => {
                const $string = (typia.json.isStringify as any).string;
                const $is_custom = (typia.json.isStringify as any).is_custom;
                return `{"vulnerable":${$string(
                    (input as any).vulnerable,
                )},"description":${$string(
                    (input as any).description,
                )},"title":${$string(
                    (input as any).title,
                )},"complicate_title":${$string(
                    (input as any).complicate_title,
                )}}`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    );
