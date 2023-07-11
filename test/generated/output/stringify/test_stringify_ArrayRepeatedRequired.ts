import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_stringify_ArrayRepeatedRequired = _test_stringify(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) =>
        ((input: string | number | Array<ArrayRepeatedRequired>): string => {
            const $ia0 = (input: any): any =>
                input.every(
                    (elem: any) =>
                        null !== elem &&
                        undefined !== elem &&
                        ("string" === typeof elem ||
                            "number" === typeof elem ||
                            (Array.isArray(elem) && ($ia0(elem) || false))),
                );
            const $string = (typia.stringify as any).string;
            const $number = (typia.stringify as any).number;
            const $throws = (typia.stringify as any).throws;
            const $sa0 = (input: any): any =>
                `[${input
                    .map((elem: any) =>
                        (() => {
                            if ("string" === typeof elem) return $string(elem);
                            if ("number" === typeof elem) return $number(elem);
                            if (Array.isArray(elem)) return $sa0(elem);
                            $throws({
                                expected:
                                    "(Array<ArrayRepeatedRequired> | number | string)",
                                value: elem,
                            });
                        })(),
                    )
                    .join(",")}]`;
            return (() => {
                if ("string" === typeof input) return $string(input);
                if ("number" === typeof input) return $number(input).toString();
                if (Array.isArray(input)) return $sa0(input);
                $throws({
                    expected:
                        "(Array<ArrayRepeatedRequired> | number | string)",
                    value: input,
                });
            })();
        })(input),
);
