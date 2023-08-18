import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_isEncode_TemplateUnion =
    _test_protobuf_isEncode<TemplateUnion>(TemplateUnion)({
        isEncode: (input) => typia.protobuf.isEncode<TemplateUnion>(input),
        message: typia.protobuf.message<TemplateUnion>(),
    });
