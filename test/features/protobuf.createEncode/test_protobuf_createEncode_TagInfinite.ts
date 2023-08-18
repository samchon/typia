import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_protobuf_encode_TagInfinite =
    _test_protobuf_encode<TagInfinite>(TagInfinite)({
        encode: typia.protobuf.createEncode<TagInfinite>(),
        message: typia.protobuf.message<TagInfinite>(),
    });
