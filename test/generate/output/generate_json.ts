import typia, { tags } from "typia";
import * as __typia_transform__isFormatEmail from "typia/lib/internal/_isFormatEmail.js";
import * as __typia_transform__isFormatUuid from "typia/lib/internal/_isFormatUuid.js";
import * as __typia_transform__isTypeUint32 from "typia/lib/internal/_isTypeUint32.js";
import * as __typia_transform__jsonStringifyNumber from "typia/lib/internal/_jsonStringifyNumber.js";
import * as __typia_transform__jsonStringifyString from "typia/lib/internal/_jsonStringifyString.js";

interface ICitizen {
  id: string & tags.Format<"uuid">;
  name: string & tags.Pattern<"^[A-Z][a-z]+$">;
  email: string & tags.Format<"email">;
  age: number & tags.Type<"uint32"> & tags.ExclusiveMaximum<100>;
  motto: string;
  birthdate: Date;
  died_at: null | Date;
  parent: ICitizen | null;
  children: ICitizen[];
}
export const createStringify = (() => {
  const _so0 = (input: any): any =>
    `{"id":${__typia_transform__jsonStringifyString._jsonStringifyString(input.id)},"name":${__typia_transform__jsonStringifyString._jsonStringifyString(input.name)},"email":${__typia_transform__jsonStringifyString._jsonStringifyString(input.email)},"age":${__typia_transform__jsonStringifyNumber._jsonStringifyNumber(input.age)},"motto":${__typia_transform__jsonStringifyString._jsonStringifyString(input.motto)},"birthdate":${__typia_transform__jsonStringifyString._jsonStringifyString(input.birthdate.toJSON())},"died_at":${null !== input.died_at ? __typia_transform__jsonStringifyString._jsonStringifyString(input.died_at.toJSON()) : "null"},"parent":${null !== input.parent ? _so0(input.parent) : "null"},"children":${`[${input.children.map((elem: any) => _so0(elem)).join(",")}]`}}`;
  const _io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    __typia_transform__isFormatEmail._isFormatEmail(input.email) &&
    "number" === typeof input.age &&
    __typia_transform__isTypeUint32._isTypeUint32(input.age) &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        _io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && _io0(elem),
    );
  return (input: ICitizen): string => _so0(input);
})();
