import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_json_stringify_ConstantConstEnumeration =
    _test_json_stringify<ConstantConstEnumeration>(ConstantConstEnumeration)(
        (input: ConstantConstEnumeration): string => {
            const $string = (typia.json.createStringify as any).string;
            const $number = (typia.json.createStringify as any).number;
            const $throws = (typia.json.createStringify as any).throws;
            return `[${input
                .map((elem: any) =>
                    (() => {
                        if ("string" === typeof elem) return $string(elem);
                        if ("number" === typeof elem) return $number(elem);
                        if ("string" === typeof elem) return '"' + elem + '"';
                        $throws({
                            expected: '("Four" | "Three" | 0 | 1 | 2)',
                            value: elem,
                        });
                    })(),
                )
                .join(",")}]`;
        },
    );
