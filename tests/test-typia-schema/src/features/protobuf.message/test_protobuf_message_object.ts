import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies protobuf message object against the native typia.tags.Type,
 * typia.protobuf.message output.
 *
 * The case builds its input in this file and asserts contains message keyword,
 * contains int32 id, contains string name, contains string email, contains bool
 * active.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.tags.Type, typia.protobuf.message is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (contains message keyword; contains int32 id; contains string name; contains string email; contains bool active).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (contains message keyword; contains int32 id; contains string name; contains string email; contains bool active) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_protobuf_message_object is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_protobuf_message_object = (): void => {
  interface IMember {
    id: number & typia.tags.Type<"int32">;
    name: string;
    email: string;
    active: boolean;
  }

  const message: string = typia.protobuf.message<IMember>();

  TestValidator.predicate("contains message keyword", () =>
    message.includes("message IMember"),
  );
  TestValidator.predicate("contains int32 id", () =>
    message.includes("int32 id"),
  );
  TestValidator.predicate("contains string name", () =>
    message.includes("string name"),
  );
  TestValidator.predicate("contains string email", () =>
    message.includes("string email"),
  );
  TestValidator.predicate("contains bool active", () =>
    message.includes("bool active"),
  );
};
