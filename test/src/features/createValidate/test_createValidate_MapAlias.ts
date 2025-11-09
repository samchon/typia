import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { MapAlias } from "../../structures/MapAlias";

export const test_createValidate_MapAlias = (): void =>
  _test_validate("MapAlias")<MapAlias>(MapAlias)(
    typia.createValidate<MapAlias>(),
  );
