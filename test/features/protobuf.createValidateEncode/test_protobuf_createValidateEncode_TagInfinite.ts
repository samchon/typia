import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_protobuf_validateEncode_TagInfinite =
    _test_protobuf_validateEncode("TagInfinite")<TagInfinite>(TagInfinite)({
        validateEncode: typia.protobuf.createValidateEncode<TagInfinite>(),
        message: typia.protobuf.message<TagInfinite>(),
    });
