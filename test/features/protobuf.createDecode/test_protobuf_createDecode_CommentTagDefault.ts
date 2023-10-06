import typia from "../../../src";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_createDecode_CommentTagDefault = _test_protobuf_decode(
    "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)({
    decode: typia.protobuf.createDecode<CommentTagDefault>(),
    encode: typia.protobuf.createEncode<CommentTagDefault>(),
});
