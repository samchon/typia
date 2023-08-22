import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TagPattern } from "../../structures/TagPattern";

export const test_protobuf_validateEncode_TagPattern =
    _test_protobuf_validateEncode("TagPattern")<TagPattern>(TagPattern)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<TagPattern>(input),
        message: typia.protobuf.message<TagPattern>(),
        decode: typia.protobuf.createDecode<TagPattern>(),
    });
