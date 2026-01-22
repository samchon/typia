import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_functional_assertReturnAsyncCustom_MapSimpleProtobufNullable =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)(
      "MapSimpleProtobufNullable",
    )(MapSimpleProtobufNullable)(
      (
        p: (
          input: MapSimpleProtobufNullable,
        ) => Promise<MapSimpleProtobufNullable>,
      ) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
