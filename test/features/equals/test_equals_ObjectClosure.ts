import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_equals_ObjectClosure = _test_equals(
    "ObjectClosure",
)<ObjectClosure>(ObjectClosure)((input) => typia.equals<ObjectClosure>(input));
