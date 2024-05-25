import { tags } from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface ObjectDate {
  classDate?: Date | null;
  date: (string & tags.Format<"date">) | null;
  datetime: (string & tags.Format<"date-time">) | null;
  time: (string & tags.Format<"time">) | null;
  duration: (string & tags.Format<"duration">) | null;
}
export namespace ObjectDate {
  export const ADDABLE = false;
  export const BINARABLE = false;
  export const PRIMITIVE = false;

  export function generate(): ObjectDate {
    return {
      classDate: new Date(),
      date: new Date().toISOString().substring(0, 10),
      datetime: new Date().toISOString(),
      time: new Date().toISOString().substring(11),
      duration: TestRandomGenerator.duration(),
    };
  }

  export const SPOILERS: Spoiler<ObjectDate>[] = [
    (input) => {
      input.classDate = {} as any;
      return ["$input.classDate"];
    },
    (input) => {
      input.date = new Date().toString();
      return ["$input.date"];
    },
    (input) => {
      input.datetime = "invalid datetime";
      return ["$input.datetime"];
    },
    (input) => {
      input.time = "123456";
      return ["$input.time"];
    },
    (input) => {
      input.duration = "30D";
      return ["$input.duration"];
    },
  ];
}
