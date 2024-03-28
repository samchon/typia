import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_createAssertDecodeCustom_TemplateUnion =
  _test_protobuf_assertDecode(CustomGuardError)("TemplateUnion")<TemplateUnion>(
    TemplateUnion,
  )({
    decode: typia.protobuf.createAssertDecode<TemplateUnion>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<TemplateUnion>(),
  });
