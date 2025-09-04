import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ObjectHierarchical = ObjectHierarchical.ICustomer;
export namespace ObjectHierarchical {
  export const BINARABLE = false;

  export interface ICustomer {
    id: number;
    channel: IChannel;
    member: IMember | null;
    account: IAccount | null;
    href: string;
    referrer: string;
    ip: [number, number, number, number];
    created_at: ITimestamp;
  }
  export interface IChannel {
    id: number;
    code: string;
    name: string;
    sequence: number;
    exclusive: boolean;
    priority: number;
    created_at: ITimestamp;
  }
  export interface IAccount {
    id: number;
    code: string;
    created_at: ITimestamp;
  }
  export interface IMember {
    id: number;
    account: IAccount;
    enterprise: IEnterprise | null;
    emails: string[];
    created_at: ITimestamp;
    authorized: boolean;
  }
  export interface IEnterprise {
    id: number;
    account: IAccount;
    name: string;
    grade: number;
    created_at: ITimestamp;
  }
  export interface ITimestamp {
    time: number;
    zone: number;
  }

  export function generate(
    authorized: boolean = true,
    employed: boolean = true,
  ): ObjectHierarchical {
    const account = authorized ? () => generate_account() : () => null;
    const enterprise: IEnterprise | null = employed
      ? {
          id: TestRandomGenerator.integer(),
          account: generate_account(),
          name: TestRandomGenerator.string(),
          grade: TestRandomGenerator.integer(),
          created_at: generate_timestamp(),
        }
      : null;
    return {
      id: TestRandomGenerator.integer(),
      channel: {
        id: TestRandomGenerator.integer(),
        code: TestRandomGenerator.string(),
        name: TestRandomGenerator.string(),
        sequence: TestRandomGenerator.integer(),
        exclusive: TestRandomGenerator.boolean(),
        priority: TestRandomGenerator.integer(),
        created_at: generate_timestamp(),
      },
      account: account(),
      member: account()
        ? {
            id: TestRandomGenerator.integer(),
            account: account()!,
            emails: ["samchon.github@gmail.com", "samchon@archisketch.com"],
            created_at: generate_timestamp(),
            authorized: true,
            enterprise,
          }
        : null,
      href: "https://github.com/samchon/typia/blob/master/benchmark/data/recursive.ts",
      referrer: "https://github.com/samchon/typia",
      ip: [127, 0, 0, 1],
      created_at: generate_timestamp(),
    };
  }

  export function trail(): ObjectHierarchical {
    const data: ObjectHierarchical = ObjectHierarchical.generate();
    data.created_at.time = null!;
    return data;
  }

  const generate_timestamp: () => ITimestamp = () => ({
    time: Date.now(),
    zone: new Date().getTimezoneOffset(),
  });

  const generate_account: () => IAccount = () => ({
    id: TestRandomGenerator.integer(),
    code: TestRandomGenerator.string(),
    created_at: generate_timestamp(),
  });

  export const SPOILERS: Spoiler<ObjectHierarchical>[] = [
    (input) => {
      input.id = null!;
      return ["$input.id"];
    },
    (input) => {
      input.channel = {} as any;
      return [
        "$input.channel.id",
        "$input.channel.code",
        "$input.channel.name",
        "$input.channel.sequence",
        "$input.channel.exclusive",
        "$input.channel.priority",
        "$input.channel.created_at",
      ];
    },
    (input) => {
      input.channel.id = undefined!;
      return ["$input.channel.id"];
    },
    (input) => {
      input.channel.code = 0 as any;
      return ["$input.channel.code"];
    },
    (input) => {
      input.channel.name = {} as any;
      return ["$input.channel.name"];
    },
    (input) => {
      input.channel.sequence = {} as any;
      return ["$input.channel.sequence"];
    },
    (input) => {
      input.member = {} as any;
      return [
        "$input.member.id",
        "$input.member.account",
        "$input.member.emails",
        "$input.member.enterprise",
        "$input.member.created_at",
        "$input.member.authorized",
      ];
    },
    (input) => {
      if (input.member !== null) {
        input.member.id = undefined!;
        return ["$input.member.id"];
      } else {
        input.member = undefined!;
        return ["$input.member"];
      }
    },
    (input) => {
      if (input.member !== null) {
        input.member.account = {} as any;
        return [
          "$input.member.account.id",
          "$input.member.account.code",
          "$input.member.account.created_at",
        ];
      } else {
        input.member = undefined!;
        return ["$input.member"];
      }
    },
  ];
}
