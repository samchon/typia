import { Spoiler } from "../helpers/Spoiler";

/**
 * Test structure for enum $ref generation.
 * This tests that TypeScript enums are generated as reusable schema components
 * with $ref references instead of inline enum definitions.
 */
export interface ConstantEnumerationRef {
  status: ConstantEnumerationRef.Status;
  direction: ConstantEnumerationRef.Direction;
  mixed: ConstantEnumerationRef.MixedEnum;
}
export namespace ConstantEnumerationRef {
  export enum Status {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
  }

  export enum Direction {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3,
  }

  export enum MixedEnum {
    Zero = 0,
    One = 1,
    StringValue = "STRING",
  }

  export function generate(): ConstantEnumerationRef {
    return {
      status: Status.ACTIVE,
      direction: Direction.UP,
      mixed: MixedEnum.StringValue,
    };
  }

  export const SPOILERS: Spoiler<ConstantEnumerationRef>[] = [
    (input) => {
      input.status = "INVALID" as Status;
      return ["$input.status"];
    },
    (input) => {
      input.direction = 5 as Direction;
      return ["$input.direction"];
    },
  ];

  export const BINARABLE = false;
}
