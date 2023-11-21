import typia from "../../../../src";
import { _test_http_headers } from "../../../internal/_test_http_headers";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_http_createHeaders_ObjectHttpUndefindable =
  _test_http_headers("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )(
    (
      input: Record<string, string | string[] | undefined>,
    ): typia.Resolved<ObjectHttpUndefindable> => {
      const $boolean = (typia.http.createHeaders as any).boolean;
      const $bigint = (typia.http.createHeaders as any).bigint;
      const $number = (typia.http.createHeaders as any).number;
      const output = {
        boolean: $boolean(input.boolean),
        bigint: $bigint(input.bigint),
        number: $number(input.number),
        string: input.string,
        constantBoolean: $boolean(input.constantboolean),
        constantBigint: $bigint(input.constantbigint),
        constantNumber: $number(input.constantnumber),
        constantString: input.constantstring,
      };
      return output as any;
    },
  );
