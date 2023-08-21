import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_is_ObjectJsonTag = _test_is("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
)((input: any): input is ObjectJsonTag => {
    const $is_custom = (typia.createIs as any).is_custom;
    return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).vulnerable &&
        $is_custom("deprecated", "string", "", (input as any).vulnerable) &&
        "string" === typeof (input as any).description &&
        "string" === typeof (input as any).title &&
        $is_custom("title", "string", "something", (input as any).title) &&
        "string" === typeof (input as any).complicate_title
    );
});
