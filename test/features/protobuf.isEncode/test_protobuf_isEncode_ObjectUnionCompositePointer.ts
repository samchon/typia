import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_isEncode_ObjectUnionCompositePointer =
    _test_protobuf_isEncode<ObjectUnionCompositePointer>(
        ObjectUnionCompositePointer,
    )({
        isEncode: (input) =>
            typia.protobuf.isEncode<ObjectUnionCompositePointer>(input),
        message: typia.protobuf.message<ObjectUnionCompositePointer>(),
    });
