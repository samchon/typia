import { IRandomGenerator } from "typia";

import { Spoiler } from "./Spoiler";

export interface TestStructure<T> {
  constructor: {
    name: string;
  };
  generate(): T;
  SPOILERS?: Spoiler<T>[];
  ADDABLE?: boolean;
  BINARABLE?: boolean;
  JSONABLE?: boolean;
  PRIMITIVE?: boolean;
  RANDOM?: false | Partial<IRandomGenerator>;

  /**
   * Declares the shape a resolving operation must produce from {@link generate}.
   *
   * A resolving operation such as `typia.plain.clone()` or a Protocol Buffer
   * round trip normally reproduces its input, and its oracle compares the two
   * directly. A few structures cannot be compared that way, because their
   * declared type resolves into something narrower than the value that
   * `generate()` builds: `ClassNonPublic`, for instance, hands the codec an
   * instance carrying protected and private members that the codec never sees.
   *
   * Such a structure declares the projection here, and the oracle compares
   * `RESOLVE(generate())` against the operation's output instead. The
   * projection belongs to the fixture that knows its own type, never to the
   * generic comparator: a comparator that recognized fixtures by name is what
   * silenced these classes in the first place.
   *
   * Omit it whenever the operation must give the input back unchanged.
   */
  RESOLVE?(input: T): unknown;
}
