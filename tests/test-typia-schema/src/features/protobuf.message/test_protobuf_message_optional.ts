import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_protobuf_message_optional = (): void => {
  interface IConfig {
    name: string;
    timeout?: number & typia.tags.Type<"int32">;
    debug?: boolean;
  }

  const message: string = typia.protobuf.message<IConfig>();

  TestValidator.predicate("contains message keyword", () =>
    message.includes("message IConfig"),
  );
  TestValidator.predicate("contains optional timeout", () =>
    message.includes("optional int32 timeout"),
  );
  TestValidator.predicate("contains optional debug", () =>
    message.includes("optional bool debug"),
  );
};
