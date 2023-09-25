import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_protobuf_createIsEncode_ObjectGenericAlias =
    _test_protobuf_isEncode("ObjectGenericAlias")<ObjectGenericAlias>(
        ObjectGenericAlias,
    )({
        isEncode: typia.protobuf.createIsEncode<ObjectGenericAlias>(),
        message: typia.protobuf.message<ObjectGenericAlias>(),
        decode: typia.protobuf.createDecode<ObjectGenericAlias>(),
    });
