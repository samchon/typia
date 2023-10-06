import typia from "../../../../src";
import { _test_http_query } from "../../../internal/_test_http_query";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_http_query_ObjectHttpUndefindable = _test_http_query(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
    ((
        input: string | URLSearchParams,
    ): typia.Resolved<ObjectHttpUndefindable> => {
        const $params = (typia.http.query as any).params;
        const $boolean = (typia.http.query as any).boolean;
        const $bigint = (typia.http.query as any).bigint;
        const $number = (typia.http.query as any).number;
        const $string = (typia.http.query as any).string;
        input = $params(input) as URLSearchParams;
        const output = {
            boolean: $boolean(input.get("boolean")) ?? undefined,
            bigint: $bigint(input.get("bigint")) ?? undefined,
            number: $number(input.get("number")) ?? undefined,
            string: $string(input.get("string")) ?? undefined,
            constantBoolean:
                $boolean(input.get("constantBoolean")) ?? undefined,
            constantBigint: $bigint(input.get("constantBigint")) ?? undefined,
            constantNumber: $number(input.get("constantNumber")) ?? undefined,
            constantString: $string(input.get("constantString")) ?? undefined,
        };
        return output as any;
    })(input),
);
