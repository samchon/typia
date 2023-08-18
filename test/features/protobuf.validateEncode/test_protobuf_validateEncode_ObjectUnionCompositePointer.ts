import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_validateEncode_ObjectUnionCompositePointer =
    _test_protobuf_validateEncode<ObjectUnionCompositePointer>(
        ObjectUnionCompositePointer,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ObjectUnionCompositePointer>(input),
        message: typia.protobuf.message<ObjectUnionCompositePointer>(),
    });
