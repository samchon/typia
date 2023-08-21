import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_validateEncode_ObjectUnionExplicitPointer =
    _test_protobuf_validateEncode(
        "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
        validateEncode:
            typia.protobuf.createValidateEncode<ObjectUnionExplicitPointer>(),
        message: typia.protobuf.message<ObjectUnionExplicitPointer>(),
    });
