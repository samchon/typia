import typia from "typia";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { TupleRestArray } from "../../../structures/TupleRestArray";
export const test_json_isParse_TupleRestArray = _test_json_isParse(
  "TupleRestArray",
)<TupleRestArray>(TupleRestArray)((input) =>
  ((input: any): import("typia").Primitive<TupleRestArray> => {
    const is = (input: any): input is TupleRestArray => {
      return (
        Array.isArray(input) &&
        "boolean" === typeof input[0] &&
        "number" === typeof input[1] &&
        Number.isFinite(input[1]) &&
        Array.isArray(input.slice(2)) &&
        input
          .slice(2)
          .every(
            (elem: any) =>
              Array.isArray(elem) &&
              elem.every((elem: any) => "string" === typeof elem),
          )
      );
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  })(input),
);
