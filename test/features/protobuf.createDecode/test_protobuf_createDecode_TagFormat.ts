import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TagFormat } from "../../structures/TagFormat";

export const test_protobuf_decode_TagFormat = _test_protobuf_decode(
    "TagFormat",
)<TagFormat>(TagFormat)({
    decode: typia.protobuf.createDecode<TagFormat>(),
    encode: typia.protobuf.createEncode<TagFormat>(),
});
