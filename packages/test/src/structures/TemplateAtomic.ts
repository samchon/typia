import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface TemplateAtomic {
  prefix: `prefix_${string}`;
  postfix: `${string}_postfix`;
  middle_string: `the_${string}_value`;
  middle_string_empty: `the_${string}_value`;
  middle_numeric: `the_${number}_value`;
  middle_boolean: `the_${boolean}_value`;
  ipv4: `${number}.${number}.${number}.${number}`;
  email: `${string}@${string}.${string}`;
}
export namespace TemplateAtomic {
  export function generate(): TemplateAtomic {
    return {
      prefix: `prefix_${TestRandomGenerator.string()}`,
      postfix: `${TestRandomGenerator.string()}_postfix`,
      middle_string: `the_${TestRandomGenerator.string()}_value`,
      middle_string_empty: `the__value`,
      middle_numeric: `the_${Math.random() * 100}_value`,
      middle_boolean: `the_${Math.random() > 0.5}_value`,
      ipv4: `127.0.0.1`,
      email: "samchon@github.com",
    };
  }

  export const SPOILERS: Spoiler<TemplateAtomic>[] = [
    (input) => {
      input.prefix = "prefix-something-wrong" as any;
      return ["$input.prefix"];
    },
    (input) => {
      input.postfix = "something-wrong-postfix" as any;
      return ["$input.postfix"];
    },
    (input) => {
      input.middle_string = "the-middle-value" as any;
      return ["$input.middle_string"];
    },
    (input) => {
      input.middle_string_empty = "the--value" as any;
      return ["$input.middle_string_empty"];
    },
    (input) => {
      input.middle_numeric = "the-0-value" as any;
      return ["$input.middle_numeric"];
    },
    (input) => {
      input.middle_boolean = "the-false-value" as any;
      return ["$input.middle_boolean"];
    },
    (input) => {
      input.ipv4 = "a.b.c.d" as any;
      return ["$input.ipv4"];
    },
    (input) => {
      input.email = "samchon_github.com" as any;
      return ["$input.email"];
    },
  ];
}
