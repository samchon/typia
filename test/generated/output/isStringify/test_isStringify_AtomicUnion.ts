import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_isStringify_AtomicUnion = _test_isStringify(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) =>
        ((input: Array<AtomicUnion.Union>): string | null => {
            const is: any = (input: any): input is Array<AtomicUnion.Union> => {
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            null === elem ||
                            "string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            "boolean" === typeof elem,
                    )
                );
            };
            const stringify: any = (
                input: Array<AtomicUnion.Union>,
            ): string => {
                const $string: any = (typia.isStringify as any).string;
                const $number: any = (typia.isStringify as any).number;
                const $throws: any = (typia.isStringify as any).throws;
                return (() =>
                    `[${input
                        .map((elem: any) =>
                            null !== elem
                                ? (() => {
                                      if ("string" === typeof elem)
                                          return $string(elem);
                                      if ("number" === typeof elem)
                                          return $number(elem);
                                      if ("boolean" === typeof elem)
                                          return elem;
                                      $throws({
                                          expected:
                                              "(boolean | null | number | string)",
                                          value: elem,
                                      });
                                  })()
                                : "null",
                        )
                        .join(",")}]`)();
            };
            return is(input) ? stringify(input) : null;
        })(input),
    AtomicUnion.SPOILERS,
);
