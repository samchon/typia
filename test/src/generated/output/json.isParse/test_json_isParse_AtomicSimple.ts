import typia from "typia";

import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_json_isParse_AtomicSimple = _test_json_isParse(
  "AtomicSimple",
)<AtomicSimple>(AtomicSimple)((input) =>
  ((input: any): import("typia").Primitive<AtomicSimple> => {
    const is = (input: any): input is AtomicSimple => {
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        "boolean" === typeof input[0] &&
        "number" === typeof input[1] &&
        Number.isFinite(input[1]) &&
        "string" === typeof input[2]
      );
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  })(input),
);
