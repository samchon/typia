import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_validateEncode_ObjectJsonTag =
    _test_protobuf_validateEncode("ObjectJsonTag")<ObjectJsonTag>(
        ObjectJsonTag,
    )({
        validateEncode: typia.protobuf.createValidateEncode<ObjectJsonTag>(),
        message: typia.protobuf.message<ObjectJsonTag>(),
        decode: typia.protobuf.createDecode<ObjectJsonTag>(),
    });
