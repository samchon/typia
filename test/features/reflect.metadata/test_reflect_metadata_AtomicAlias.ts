import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_reflect_metadata_AtomicAlias = _test_reflect_metadata(
  "AtomicAlias",
)(typia.reflect.metadata<[AtomicAlias]>());
