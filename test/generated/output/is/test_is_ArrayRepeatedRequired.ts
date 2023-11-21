import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_is_ArrayRepeatedRequired = _test_is(
  "ArrayRepeatedRequired",
)<ArrayRepeatedRequired>(ArrayRepeatedRequired)((input) =>
  ((input: any): input is ArrayRepeatedRequired => {
    const $ia0 = (input: any): any =>
      input.every(
        (elem: any) =>
          null !== elem &&
          undefined !== elem &&
          ("string" === typeof elem ||
            ("number" === typeof elem && Number.isFinite(elem)) ||
            (Array.isArray(elem) && ($ia0(elem) || false))),
      );
    return (
      null !== input &&
      undefined !== input &&
      ("string" === typeof input ||
        ("number" === typeof input && Number.isFinite(input)) ||
        (Array.isArray(input) && ($ia0(input) || false)))
    );
  })(input),
);
