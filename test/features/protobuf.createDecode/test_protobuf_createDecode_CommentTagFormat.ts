import typia from "../../../src";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_createDecode_CommentTagFormat = _test_protobuf_decode(
    "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)({
    decode: typia.protobuf.createDecode<CommentTagFormat>(),
    encode: typia.protobuf.createEncode<CommentTagFormat>(),
});
