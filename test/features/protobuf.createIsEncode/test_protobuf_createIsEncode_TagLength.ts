import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagLength } from "../../structures/TagLength";

export const test_protobuf_isEncode_TagLength = _test_protobuf_isEncode(
    "TagLength",
)<TagLength>(TagLength)({
    isEncode: typia.protobuf.createIsEncode<TagLength>(),
    message: typia.protobuf.message<TagLength>(),
    decode: typia.protobuf.createDecode<TagLength>(),
});
