import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_is_ObjectJsonTag = _test_is("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
)((input: any): input is ObjectJsonTag => {
    return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).vulnerable &&
        "string" === typeof (input as any).description &&
        "string" === typeof (input as any).title &&
        "string" === typeof (input as any).complicate_title
    );
});
