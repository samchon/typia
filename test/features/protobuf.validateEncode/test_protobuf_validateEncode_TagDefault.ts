import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TagDefault } from "../../structures/TagDefault";

export const test_protobuf_validateEncode_TagDefault =
    _test_protobuf_validateEncode("TagDefault")<TagDefault>(TagDefault)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<TagDefault>(input),
        message: typia.protobuf.message<TagDefault>(),
    });
