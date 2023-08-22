import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_validateEncode_ObjectNullable =
    _test_protobuf_validateEncode("ObjectNullable")<ObjectNullable>(
        ObjectNullable,
    )({
        validateEncode: typia.protobuf.createValidateEncode<ObjectNullable>(),
        message: typia.protobuf.message<ObjectNullable>(),
        decode: typia.protobuf.createDecode<ObjectNullable>(),
    });
