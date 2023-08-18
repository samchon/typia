import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagPattern } from "../../structures/TagPattern";

export const test_protobuf_isEncode_TagPattern =
    _test_protobuf_isEncode<TagPattern>(TagPattern)({
        isEncode: (input) => typia.protobuf.isEncode<TagPattern>(input),
        message: typia.protobuf.message<TagPattern>(),
    });
