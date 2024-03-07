import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_MapSimpleProtobufOptional =
  _test_functional_assertReturnAsync(CustomGuardError)(
    "MapSimpleProtobufOptional",
  )(MapSimpleProtobufOptional)(
    (
      p: (
        input: MapSimpleProtobufOptional,
      ) => Promise<MapSimpleProtobufOptional>,
    ) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
