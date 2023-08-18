import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_encode_ObjectUnionCompositePointer =
    _test_protobuf_encode<ObjectUnionCompositePointer>(
        ObjectUnionCompositePointer,
    )({
        encode: (input) =>
            typia.protobuf.encode<ObjectUnionCompositePointer>(input),
        message: typia.protobuf.message<ObjectUnionCompositePointer>(),
    });
