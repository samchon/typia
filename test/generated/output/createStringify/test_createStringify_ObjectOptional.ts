import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_createStringify_ObjectOptional = _test_stringify(
    "ObjectOptional",
    ObjectOptional.generate,
    (input: ObjectOptional): string => {
        const $string: any = (typia.createStringify as any).string;
        const $number: any = (typia.createStringify as any).number;
        const $tail: any = (typia.createStringify as any).tail;
        const $so0: any = (input: any): any =>
            `{${$tail(
                `${
                    undefined === input.id
                        ? ""
                        : `"id":${
                              undefined !== input.id
                                  ? $string(input.id)
                                  : undefined
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
    },
);
