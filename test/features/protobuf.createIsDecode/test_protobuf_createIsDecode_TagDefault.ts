import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TagDefault } from "../../structures/TagDefault";

export const test_protobuf_isDecode_TagDefault = _test_protobuf_isDecode(
    "TagDefault",
)<TagDefault>(TagDefault)({
    isDecode: typia.protobuf.createIsDecode<TagDefault>(),
    encode: typia.protobuf.createEncode<TagDefault>(),
});
