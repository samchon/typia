import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies protobuf message array against the native typia.tags.Type,
 * typia.protobuf.message output.
 *
 * The case builds its input in this file and asserts contains message keyword,
 * contains repeated double prices, contains repeated string tags.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.tags.Type, typia.protobuf.message is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (contains message keyword; contains repeated double prices; contains repeated string tags).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (contains message keyword; contains repeated double prices; contains repeated string tags) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_protobuf_message_array is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_protobuf_message_array = (): void => {
  interface IProduct {
    name: string;
    prices: (number & typia.tags.Type<"double">)[];
    tags: string[];
  }

  const message: string = typia.protobuf.message<IProduct>();

  TestValidator.predicate("contains message keyword", () =>
    message.includes("message IProduct"),
  );
  TestValidator.predicate("contains repeated double prices", () =>
    message.includes("repeated double prices"),
  );
  TestValidator.predicate("contains repeated string tags", () =>
    message.includes("repeated string tags"),
  );
};
