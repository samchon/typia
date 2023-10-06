import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_json_createStringify_ObjectOptional = _test_json_stringify(
    "ObjectOptional",
)<ObjectOptional>(ObjectOptional)((input: ObjectOptional): string => {
    const $string = (typia.json.createStringify as any).string;
    const $number = (typia.json.createStringify as any).number;
    const $tail = (typia.json.createStringify as any).tail;
    const $so0 = (input: any): any =>
        `{${$tail(
            `${
                undefined === input.id
                    ? ""
                    : `"id":${
                          undefined !== input.id ? $string(input.id) : undefined
                      },`
            }${
                undefined === input.name
                    ? ""
                    : `"name":${
                          undefined !== input.name
                              ? $string(input.name)
                              : undefined
                      },`
            }${
                undefined === input.email
                    ? ""
                    : `"email":${
                          undefined !== input.email
                              ? $string(input.email)
                              : undefined
                      },`
            }${
                undefined === input.sequence
                    ? ""
                    : `"sequence":${
                          undefined !== input.sequence
                              ? $number(input.sequence)
                              : undefined
                      }`
            }`,
        )}}`;
    return $so0(input);
});
