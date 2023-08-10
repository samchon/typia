import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_assert_ClassClosure = _test_assert<ClassClosure>(
    ClassClosure,
)((input) => typia.assert<ClassClosure>(input));
