import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_json_createStringify_AtomicUnion = _test_json_stringify(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input: AtomicUnion): string => {
  const $string = (typia.json.createStringify as any).string;
  const $number = (typia.json.createStringify as any).number;
  const $throws = (typia.json.createStringify as any).throws;
  return `[${input
    .map((elem: any) =>
      null !== elem
        ? (() => {
            if ("string" === typeof elem) return $string(elem);
            if ("number" === typeof elem) return $number(elem);
            if ("boolean" === typeof elem) return elem;
            $throws({
              expected: "(boolean | null | number | string)",
              value: elem,
            });
          })()
        : "null",
    )
    .join(",")}]`;
});
