import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_createStringify_ToJsonAtomicUnion = _test_stringify(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input: ToJsonAtomicUnion): string => {
        const $string: any = (typia.createStringify as any).string;
        const $number: any = (typia.createStringify as any).number;
        const $throws: any = (typia.createStringify as any).throws;
        return (() =>
            `[${input
                .map((elem: any) =>
                    null !== elem.toJSON()
                        ? (() => {
                              if ("string" === typeof elem.toJSON())
                                  return $string(elem.toJSON());
                              if ("number" === typeof elem.toJSON())
                                  return $number(elem.toJSON());
                              if ("boolean" === typeof elem.toJSON())
                                  return elem.toJSON();
                              $throws({
                                  expected:
                                      "(boolean | null | number | string)",
                                  value: elem.toJSON(),
                              });
                          })()
                        : "null",
                )
                .join(",")}]`)();
    },
);
