import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_encode_ArrayRecursiveUnionExplicitPointer =
    _test_protobuf_encode<ArrayRecursiveUnionExplicitPointer>(
        ArrayRecursiveUnionExplicitPointer,
    )({
        encode: (input) =>
            typia.protobuf.encode<ArrayRecursiveUnionExplicitPointer>(input),
        message: typia.protobuf.message<ArrayRecursiveUnionExplicitPointer>(),
    });
