import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_validateEquals_ClassClosure = _test_validateEquals(
    "ClassClosure",
)<ClassClosure>(ClassClosure)(typia.createValidateEquals<ClassClosure>());
