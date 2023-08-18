import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagRange } from "../../structures/TagRange";

export const test_protobuf_isEncode_TagRange =
    _test_protobuf_isEncode<TagRange>(TagRange)({
        isEncode: (input) => typia.protobuf.isEncode<TagRange>(input),
        message: typia.protobuf.message<TagRange>(),
    });
