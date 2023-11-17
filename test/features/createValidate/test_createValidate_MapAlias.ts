import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { MapAlias } from "../../structures/MapAlias";

export const test_createValidate_MapAlias = _test_validate(
  "MapAlias",
)<MapAlias>(MapAlias)(typia.createValidate<MapAlias>());
