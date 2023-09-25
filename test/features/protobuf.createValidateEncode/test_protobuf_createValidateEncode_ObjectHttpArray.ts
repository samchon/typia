import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_createValidateEncode_ObjectHttpArray =
    _test_protobuf_validateEncode("ObjectHttpArray")<ObjectHttpArray>(
        ObjectHttpArray,
    )({
        validateEncode: typia.protobuf.createValidateEncode<ObjectHttpArray>(),
        message: typia.protobuf.message<ObjectHttpArray>(),
        decode: typia.protobuf.createDecode<ObjectHttpArray>(),
    });
