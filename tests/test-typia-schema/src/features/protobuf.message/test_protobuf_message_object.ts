import { TestValidator } from "@nestia/e2e";
import typia from "typia";

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
