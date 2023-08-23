import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_random_ObjectClosure = _test_random(
    "ObjectClosure",
)<ObjectClosure>(ObjectClosure)({
    random: () => typia.random<ObjectClosure>(),
    assert: typia.createAssert<ObjectClosure>(),
});
