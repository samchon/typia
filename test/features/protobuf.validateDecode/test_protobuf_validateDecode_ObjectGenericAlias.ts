import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_protobuf_createValidateDecode_ObjectGenericAlias =
    _test_protobuf_validateDecode("ObjectGenericAlias")<ObjectGenericAlias>(
        ObjectGenericAlias,
    )({
        decode: (input) =>
            typia.protobuf.validateDecode<ObjectGenericAlias>(input),
        encode: typia.protobuf.createEncode<ObjectGenericAlias>(),
    });
