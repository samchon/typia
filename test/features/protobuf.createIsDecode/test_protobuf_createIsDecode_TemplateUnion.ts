import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_createIsDecode_TemplateUnion =
    _test_protobuf_isDecode("TemplateUnion")<TemplateUnion>(TemplateUnion)({
        isDecode: typia.protobuf.createIsDecode<TemplateUnion>(),
        encode: typia.protobuf.createEncode<TemplateUnion>(),
    });
