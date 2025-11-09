import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_createAssertEncodeCustom_ArrayHierarchicalPointer =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
      encode: typia.protobuf.createAssertEncode<ArrayHierarchicalPointer>(
        (p) => new CustomGuardError(p),
      ),
      decode: typia.protobuf.createDecode<ArrayHierarchicalPointer>(),
      message: typia.protobuf.message<ArrayHierarchicalPointer>(),
    });
