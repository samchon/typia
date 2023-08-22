import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TagLength } from "../../structures/TagLength";

export const test_protobuf_validateEncode_TagLength =
    _test_protobuf_validateEncode("TagLength")<TagLength>(TagLength)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<TagLength>(input),
        message: typia.protobuf.message<TagLength>(),
        decode: typia.protobuf.createDecode<TagLength>(),
    });
