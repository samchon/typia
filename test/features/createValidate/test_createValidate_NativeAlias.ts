import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_createValidate_NativeAlias = _test_validate(
  "NativeAlias",
)<NativeAlias>(NativeAlias)(typia.createValidate<NativeAlias>());
