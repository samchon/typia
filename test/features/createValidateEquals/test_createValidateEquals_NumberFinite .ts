import typia from "../../../src";
import { NumberFinite  } from "../../structures/NumberFinite ";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_NumberFinite  = _test_validateEquals(
    "NumberFinite ",
    NumberFinite .generate,
    typia.createValidateEquals<NumberFinite >(),
);