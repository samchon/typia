import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_encode_TemplateUnion =
    _test_protobuf_encode<TemplateUnion>(TemplateUnion)({
        encode: typia.protobuf.createEncode<TemplateUnion>(),
        message: typia.protobuf.message<TemplateUnion>(),
    });
