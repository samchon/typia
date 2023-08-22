import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagFormat } from "../../structures/TagFormat";

export const test_protobuf_encode_TagFormat = _test_protobuf_encode(
    "TagFormat",
)<TagFormat>(TagFormat)({
    encode: (input) => typia.protobuf.encode<TagFormat>(input),
    message: typia.protobuf.message<TagFormat>(),
    decode: typia.protobuf.createDecode<TagFormat>(),
});
