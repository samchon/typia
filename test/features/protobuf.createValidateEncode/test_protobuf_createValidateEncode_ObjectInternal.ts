import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_protobuf_validateEncode_ObjectInternal =
    _test_protobuf_validateEncode("ObjectInternal")<ObjectInternal>(
        ObjectInternal,
    )({
        validateEncode: typia.protobuf.createValidateEncode<ObjectInternal>(),
        message: typia.protobuf.message<ObjectInternal>(),
        decode: typia.protobuf.createDecode<ObjectInternal>(),
    });
