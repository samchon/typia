import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_json_isParse_ObjectJsonTag =
    _test_json_isParse<ObjectJsonTag>(ObjectJsonTag)((input) =>
        ((input: any): typia.Primitive<ObjectJsonTag> => {
            const is = (input: any): input is ObjectJsonTag => {
                const $is_custom = (typia.json.isParse as any).is_custom;
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
            input = JSON.parse(input);
            return is(input) ? (input as any) : null;
        })(input),
    );
