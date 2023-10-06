import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createValidate_AtomicAlias = _test_validate(
    "AtomicAlias",
)<AtomicAlias>(AtomicAlias)(typia.createValidate<AtomicAlias>());
