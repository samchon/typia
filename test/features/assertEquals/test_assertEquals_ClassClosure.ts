import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_assertEquals_ClassClosure = _test_assertEquals<ClassClosure>(
    ClassClosure,
)((input) => typia.assertEquals<ClassClosure>(input));
