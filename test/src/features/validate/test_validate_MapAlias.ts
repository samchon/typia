import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { MapAlias } from "../../structures/MapAlias";

export const test_validate_MapAlias = (): void =>
  _test_validate("MapAlias")<MapAlias>(MapAlias)((input) =>
    typia.validate<MapAlias>(input),
  );
