import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_createValidateEncode_ObjectPrimitive =
    _test_protobuf_validateEncode("ObjectPrimitive")<ObjectPrimitive>(
        ObjectPrimitive,
    )({
        validateEncode: typia.protobuf.createValidateEncode<ObjectPrimitive>(),
        message: typia.protobuf.message<ObjectPrimitive>(),
        decode: typia.protobuf.createDecode<ObjectPrimitive>(),
    });
