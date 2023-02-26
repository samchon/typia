import typia from "../../../../src";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_AtomicUnion = _test_stringify(
    "AtomicUnion",
    AtomicUnion.generate,
    (input: AtomicUnion): string => {
        const $string = (typia.createStringify as any).string;
        const $number = (typia.createStringify as any).number;
        const $throws = (typia.createStringify as any).throws;
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
    },
);
