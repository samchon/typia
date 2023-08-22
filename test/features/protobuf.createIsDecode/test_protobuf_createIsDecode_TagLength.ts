import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TagLength } from "../../structures/TagLength";

export const test_protobuf_isDecode_TagLength = _test_protobuf_isDecode(
    "TagLength",
)<TagLength>(TagLength)({
    isDecode: typia.protobuf.createIsDecode<TagLength>(),
    encode: typia.protobuf.createEncode<TagLength>(),
});
