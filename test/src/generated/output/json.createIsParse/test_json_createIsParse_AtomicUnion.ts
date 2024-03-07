import typia from "typia";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { AtomicUnion } from "../../../structures/AtomicUnion";
export const test_json_createIsParse_AtomicUnion = _test_json_isParse(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)(
  (input: any): import("typia").Primitive<AtomicUnion> => {
    const is = (input: any): input is AtomicUnion => {
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            null === elem ||
            "string" === typeof elem ||
            ("number" === typeof elem && Number.isFinite(elem)) ||
            "boolean" === typeof elem,
        )
      );
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  },
);
