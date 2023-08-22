import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TagType } from "../../structures/TagType";

export const test_protobuf_validateEncode_TagType =
    _test_protobuf_validateEncode("TagType")<TagType>(TagType)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<TagType>(input),
        message: typia.protobuf.message<TagType>(),
        decode: typia.protobuf.createDecode<TagType>(),
    });
