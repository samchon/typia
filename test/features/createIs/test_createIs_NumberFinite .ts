import typia from "../../../src";
import { NumberFinite  } from "../../structures/NumberFinite ";
import { _test_is } from "../internal/_test_is";

export const test_createIs_NumberFinite  = _test_is(
    "NumberFinite ",
    NumberFinite .generate,
    typia.createIs<NumberFinite >(),
    NumberFinite .SPOILERS,
);