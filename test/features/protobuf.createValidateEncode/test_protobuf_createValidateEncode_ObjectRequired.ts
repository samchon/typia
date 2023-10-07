import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_createValidateEncode_ObjectRequired =
    _test_protobuf_validateEncode("ObjectRequired")<ObjectRequired>(
        ObjectRequired,
    )({
        encode: typia.protobuf.createValidateEncode<ObjectRequired>(),
        decode: typia.protobuf.createDecode<ObjectRequired>(),
        message: typia.protobuf.message<ObjectRequired>(),
    });
