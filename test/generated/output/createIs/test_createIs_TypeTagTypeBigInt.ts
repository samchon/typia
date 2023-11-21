import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";

export const test_createIs_TypeTagTypeBigInt = _test_is(
  "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)(
  (input: any): input is TypeTagTypeBigInt => {
    return (
      "object" === typeof input &&
      null !== input &&
      "bigint" === typeof (input as any).in64 &&
      "bigint" === typeof (input as any).uint64 &&
      BigInt(0) <= (input as any).uint64
    );
  },
);
