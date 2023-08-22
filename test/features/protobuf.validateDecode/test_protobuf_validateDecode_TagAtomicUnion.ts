import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_protobuf_validateDecode_TagAtomicUnion =
    _test_protobuf_validateDecode("TagAtomicUnion")<TagAtomicUnion>(
        TagAtomicUnion,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<TagAtomicUnion>(input),
        encode: typia.protobuf.createEncode<TagAtomicUnion>(),
    });
