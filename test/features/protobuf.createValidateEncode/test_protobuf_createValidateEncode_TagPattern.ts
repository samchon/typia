import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TagPattern } from "../../structures/TagPattern";

export const test_protobuf_validateEncode_TagPattern =
    _test_protobuf_validateEncode("TagPattern")<TagPattern>(TagPattern)({
        validateEncode: typia.protobuf.createValidateEncode<TagPattern>(),
        message: typia.protobuf.message<TagPattern>(),
    });
