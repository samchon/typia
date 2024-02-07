import typia from "typia";

export const test_issue_951_dynamic_key_check_true = () => {
  typia.createIs<MyInterface>();
};

interface MyInterface {
  name: string;
  volumes: {
    system?: number;
    messages?: {
      [messageId: string]: number;
    };
  };
}
