import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_protobuf_createDecode_ObjectHttpCommentTag =
    _test_protobuf_decode("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
        ObjectHttpCommentTag,
    )({
        decode: typia.protobuf.createDecode<ObjectHttpCommentTag>(),
        encode: typia.protobuf.createEncode<ObjectHttpCommentTag>(),
    });
