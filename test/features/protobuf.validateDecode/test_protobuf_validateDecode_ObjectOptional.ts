import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_validateDecode_ObjectOptional =
    _test_protobuf_validateDecode("ObjectOptional")<ObjectOptional>(
        ObjectOptional,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<ObjectOptional>(input),
        encode: typia.protobuf.createEncode<ObjectOptional>(),
    });
