import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TagRange } from "../../structures/TagRange";

export const test_protobuf_validateEncode_TagRange =
    _test_protobuf_validateEncode<TagRange>(TagRange)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<TagRange>(input),
        message: typia.protobuf.message<TagRange>(),
    });
