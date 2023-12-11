import typia, { tags } from "typia";

import { protobuf_equal_to } from "../../../helpers/protobuf_equal_to";

export const test_issue_901_protobuf_encode_union_problem = () => {
  const customer: Customer = ((
    generator?: Partial<typia.IRandomGenerator>,
  ): typia.Resolved<Customer> => {
    const $generator = (typia.random as any).generator;
    const $pick = (typia.random as any).pick;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      id:
        (generator?.customs ?? $generator.customs)?.number?.([
          {
            name: 'Type<"int32">',
            kind: "type",
            value: "int32",
          },
        ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
      email:
        (generator?.customs ?? $generator.customs)?.string?.([
          {
            name: 'Format<"email">',
            kind: "format",
            value: "email",
          },
        ]) ?? (generator?.email ?? $generator.email)(),
      name:
        (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
      pet: $pick([
        () => $ro1(_recursive, _recursive ? 1 + _depth : _depth),
        () => $ro2(_recursive, _recursive ? 1 + _depth : _depth),
      ])(),
      memo: new Map(
        (generator?.array ?? $generator.array)(() => [
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
            (generator?.string ?? $generator.string)(),
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
            (generator?.string ?? $generator.string)(),
        ]),
      ),
      logins: (generator?.array ?? $generator.array)(
        () => $ro3(_recursive, _recursive ? 1 + _depth : _depth),
        (generator?.integer ?? $generator.integer)(1, 3),
      ),
    });
    const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => ({
      type: "cat",
      name:
        (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
      ribbon: (generator?.boolean ?? $generator.boolean)(),
    });
    const $ro2 = (_recursive: boolean = false, _depth: number = 0): any => ({
      type: "dog",
      name:
        (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
      hunt: (generator?.boolean ?? $generator.boolean)(),
    });
    const $ro3 = (_recursive: boolean = false, _depth: number = 0): any => ({
      success: (generator?.boolean ?? $generator.boolean)(),
      href:
        (generator?.customs ?? $generator.customs)?.string?.([
          {
            name: 'Format<"url">',
            kind: "format",
            value: "url",
          },
        ]) ?? (generator?.url ?? $generator.url)(),
      referrer:
        (generator?.customs ?? $generator.customs)?.string?.([
          {
            name: 'Format<"url">',
            kind: "format",
            value: "url",
          },
        ]) ?? (generator?.url ?? $generator.url)(),
      ip: $pick([
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([
            {
              name: 'Format<"ipv4">',
              kind: "format",
              value: "ipv4",
            },
          ]) ?? (generator?.ipv4 ?? $generator.ipv4)(),
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([
            {
              name: 'Format<"ipv6">',
              kind: "format",
              value: "ipv6",
            },
          ]) ?? (generator?.ipv6 ?? $generator.ipv6)(),
      ])(),
      time:
        (generator?.customs ?? $generator.customs)?.string?.([
          {
            name: 'Format<"date-time">',
            kind: "format",
            value: "date-time",
          },
        ]) ?? (generator?.datetime ?? $generator.datetime)(),
    });
    return $ro0();
  })();
  const encoded: Uint8Array = ((input: Customer): Uint8Array => {
    const $throws = (typia.protobuf.encode as any).throws;
    const $Sizer = (typia.protobuf.encode as any).Sizer;
    const $Writer = (typia.protobuf.encode as any).Writer;
    const encoder = (writer: any): any => {
      const $peo0 = (input: any): any => {
        // property "id";
        writer.uint32(8);
        writer.int32(input.id);
        // property "email";
        writer.uint32(18);
        writer.string(input.email);
        // property "name";
        writer.uint32(26);
        writer.string(input.name);
        // property "pet";
        if ("cat" === input.pet.type)
          (() => {
            // 4 -> Cat;
            writer.uint32(34);
            writer.fork();
            $peo1(input.pet);
            writer.ldelim();
          })();
        else if ("dog" === input.pet.type)
          (() => {
            // 5 -> Dog;
            writer.uint32(42);
            writer.fork();
            $peo2(input.pet);
            writer.ldelim();
          })();
        else
          $throws({
            expected: "(Cat | Dog)",
            value: input.pet,
          });
        // property "memo";
        for (const [key, value] of input.memo) {
          writer.uint32(50);
          writer.fork();
          writer.uint32(10);
          writer.string(key);
          writer.uint32(18);
          writer.string(value);
          writer.ldelim();
        }
        // property "logins";
        if (0 !== input.logins.length) {
          for (const elem of input.logins) {
            // 7 -> CustomerLogin;
            writer.uint32(58);
            writer.fork();
            $peo3(elem);
            writer.ldelim();
          }
        }
      };
      const $peo1 = (input: any): any => {
        // property "type";
        writer.uint32(10);
        writer.string(input.type);
        // property "name";
        writer.uint32(18);
        writer.string(input.name);
        // property "ribbon";
        writer.uint32(24);
        writer.bool(input.ribbon);
      };
      const $peo2 = (input: any): any => {
        // property "type";
        writer.uint32(10);
        writer.string(input.type);
        // property "name";
        writer.uint32(18);
        writer.string(input.name);
        // property "hunt";
        writer.uint32(24);
        writer.bool(input.hunt);
      };
      const $peo3 = (input: any): any => {
        // property "success";
        writer.uint32(8);
        writer.bool(input.success);
        // property "href";
        writer.uint32(18);
        writer.string(input.href);
        // property "referrer";
        writer.uint32(26);
        writer.string(input.referrer);
        // property "ip";
        writer.uint32(34);
        writer.string(input.ip);
        // property "time";
        writer.uint32(42);
        writer.string(input.time);
      };
      const $io1 = (input: any): boolean =>
        "cat" === input.type &&
        "string" === typeof input.name &&
        "boolean" === typeof input.ribbon;
      const $io2 = (input: any): boolean =>
        "dog" === input.type &&
        "string" === typeof input.name &&
        "boolean" === typeof input.hunt;
      const $io3 = (input: any): boolean =>
        "boolean" === typeof input.success &&
        "string" === typeof input.href &&
        /^[a-zA-Z0-9]+:\/\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
          input.href,
        ) &&
        "string" === typeof input.referrer &&
        /^[a-zA-Z0-9]+:\/\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
          input.referrer,
        ) &&
        "string" === typeof input.ip &&
        (/^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
          input.ip,
        ) ||
          /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(
            input.ip,
          )) &&
        "string" === typeof input.time &&
        !isNaN(new Date(input.time).getTime());
      const $iu0 = (input: any): any =>
        (() => {
          if ("cat" === input.type) return $io1(input);
          else if ("dog" === input.type) return $io2(input);
          else return false;
        })();
      //Customer;
      $peo0(input);
      return writer;
    };
    const sizer = encoder(new $Sizer());
    const writer = encoder(new $Writer(sizer));
    return writer.buffer();
  })(customer);
  const decoded: Customer = ((input: Uint8Array): typia.Resolved<Customer> => {
    const $Reader = (typia.protobuf.decode as any).Reader;
    const $pdo0 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {
        id: undefined as any,
        email: "" as any,
        name: "" as any,
        pet: undefined as any,
        memo: new Map() as any,
        logins: [] as any,
      } as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // int32;
            output.id = reader.int32();
            break;
          case 2:
            // string;
            output.email = reader.string();
            break;
          case 3:
            // string;
            output.name = reader.string();
            break;
          case 4:
            // Cat;
            output.pet = $pdo1(reader, reader.uint32());
            break;
          case 5:
            // Dog;
            output.pet = $pdo2(reader, reader.uint32());
            break;
          case 6:
            // type: Map<string, string>;
            (() => {
              const piece = reader.uint32() + reader.index();
              const entry = {
                key: "" as any,
                value: "" as any,
              } as any;
              while (reader.index() < piece) {
                const kind = reader.uint32();
                switch (kind >>> 3) {
                  case 1:
                    // string;
                    entry.key = reader.string();
                    break;
                  case 2:
                    // string;
                    entry.value = reader.string();
                    break;
                  default:
                    reader.skipType(kind & 7);
                    break;
                }
              }
              output.memo.set(entry.key, entry.value);
            })();
            break;
          case 7:
            // type: Array<CustomerLogin>;
            output.logins.push($pdo3(reader, reader.uint32()));
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return output;
    };
    const $pdo1 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {
        type: undefined as any,
        name: "" as any,
        ribbon: undefined as any,
      } as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // string;
            output.type = reader.string();
            break;
          case 2:
            // string;
            output.name = reader.string();
            break;
          case 3:
            // bool;
            output.ribbon = reader.bool();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return output;
    };
    const $pdo2 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {
        type: undefined as any,
        name: "" as any,
        hunt: undefined as any,
      } as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // string;
            output.type = reader.string();
            break;
          case 2:
            // string;
            output.name = reader.string();
            break;
          case 3:
            // bool;
            output.hunt = reader.bool();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return output;
    };
    const $pdo3 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {
        success: undefined as any,
        href: "" as any,
        referrer: "" as any,
        ip: "" as any,
        time: "" as any,
      } as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // bool;
            output.success = reader.bool();
            break;
          case 2:
            // string;
            output.href = reader.string();
            break;
          case 3:
            // string;
            output.referrer = reader.string();
            break;
          case 4:
            // string;
            output.ip = reader.string();
            break;
          case 5:
            // string;
            output.time = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return output;
    };
    const reader = new $Reader(input);
    return $pdo0(reader);
  })(encoded);
  if (false === protobuf_equal_to("equal")(customer, decoded))
    throw new Error(
      "Bug on typia.protobuf.encode(): failed to encode the union type.",
    );
};
interface Customer {
  id: number & tags.Type<"int32">;
  email: string & tags.Format<"email">;
  name: string;
  pet: Cat | Dog;
  memo: Map<string, string>;
  logins: Array<CustomerLogin> & tags.MinItems<1>;
}
interface Cat {
  type: "cat";
  name: string;
  ribbon: boolean;
}
interface Dog {
  type: "dog";
  name: string;
  hunt: boolean;
}
interface CustomerLogin {
  success: boolean;
  href: string & tags.Format<"url">;
  referrer: string & tags.Format<"url">;
  ip: string & (tags.Format<"ipv4"> | tags.Format<"ipv6">);
  time: string & tags.Format<"date-time">;
}
