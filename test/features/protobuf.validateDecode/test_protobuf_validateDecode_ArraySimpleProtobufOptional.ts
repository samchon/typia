import typia from "../../../src";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_createValidateDecode_ArraySimpleProtobufOptional = _test_protobuf_validateDecode(
    "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
    decode: (input) => typia.protobuf.validateDecode<ArraySimpleProtobufOptional>(input),
    encode: typia.protobuf.createEncode<ArraySimpleProtobufOptional>(),
});
