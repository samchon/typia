import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_protobuf_validateEncode_ObjectGenericAlias =
    _test_protobuf_validateEncode("ObjectGenericAlias")<ObjectGenericAlias>(
        ObjectGenericAlias,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ObjectGenericAlias>(input),
        message: typia.protobuf.message<ObjectGenericAlias>(),
        decode: typia.protobuf.createDecode<ObjectGenericAlias>(),
    });
