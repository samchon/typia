import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TagArray } from "../../structures/TagArray";

export const test_protobuf_validateEncode_TagArray =
    _test_protobuf_validateEncode("TagArray")<TagArray>(TagArray)({
        validateEncode: typia.protobuf.createValidateEncode<TagArray>(),
        message: typia.protobuf.message<TagArray>(),
        decode: typia.protobuf.createDecode<TagArray>(),
    });
