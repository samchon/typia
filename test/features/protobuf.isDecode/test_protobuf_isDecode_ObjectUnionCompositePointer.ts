import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_isDecode_ObjectUnionCompositePointer =
    _test_protobuf_isDecode(
        "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
        isDecode: (input) =>
            typia.protobuf.isDecode<ObjectUnionCompositePointer>(input),
        encode: typia.protobuf.createEncode<ObjectUnionCompositePointer>(),
    });
