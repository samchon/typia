import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_createIs_ObjectHttpUndefindable = _test_is(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
    typia.createIs<ObjectHttpUndefindable>(),
);
