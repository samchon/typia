import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_isEncode_ObjectUnionExplicitPointer =
    _test_protobuf_isEncode(
        "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
        isEncode: typia.protobuf.createIsEncode<ObjectUnionExplicitPointer>(),
        message: typia.protobuf.message<ObjectUnionExplicitPointer>(),
    });
