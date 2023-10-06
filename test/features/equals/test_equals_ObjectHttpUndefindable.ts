import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_equals_ObjectHttpUndefindable = _test_equals(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
    typia.equals<ObjectHttpUndefindable>(input),
);
