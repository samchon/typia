import typia from "typia";

import { TestValidator } from "../../helpers/TestValidator";

type MyObj = {
  private: boolean | null;
};

export const test_issue_1321_private_key_in_protobuf = (): void => {
  const input: MyObj = {
    private: true,
  };
  const encoded: Uint8Array = typia.protobuf.encode<MyObj>(input);
  const decoded: MyObj = typia.protobuf.decode<MyObj>(encoded);
  TestValidator.equals("decoded")(decoded)(input);
};
