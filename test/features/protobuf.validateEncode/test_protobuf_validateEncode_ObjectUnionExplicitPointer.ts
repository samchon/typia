import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_createValidateEncode_ObjectUnionExplicitPointer =
    _test_protobuf_validateEncode(
        "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
        encode: (input) =>
            typia.protobuf.validateEncode<ObjectUnionExplicitPointer>(input),
        decode: typia.protobuf.createDecode<ObjectUnionExplicitPointer>(),
        message: typia.protobuf.message<ObjectUnionExplicitPointer>(),
    });
