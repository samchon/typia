import typia, { tags } from "typia";

import { protobuf_equal_to } from "../../helpers/protobuf_equal_to";

export const test_issue_901_protobuf_encode_union_problem = () => {
  const customer: Customer = typia.random<Customer>();
  const encoded: Uint8Array = typia.protobuf.encode<Customer>(customer);
  const decoded: Customer = typia.protobuf.decode<Customer>(encoded);

  if (false === protobuf_equal_to("equal")(customer, decoded))
    throw new Error(
      "Bug on typia.protobuf.encode(): failed to encode the union type.",
    );
};

interface Customer {
  id: number & tags.Type<"int32">;
  email: string & tags.Format<"email">;
  name: string;
  pet: Cat | Dog;
  memo: Map<string, string>;
  logins: Array<CustomerLogin> & tags.MinItems<1>;
}
interface Cat {
  type: "cat";
  name: string;
  ribbon: boolean;
}
interface Dog {
  type: "dog";
  name: string;
  hunt: boolean;
}
interface CustomerLogin {
  success: boolean;
  href: string & tags.Format<"url">;
  referrer: string & tags.Format<"url">;
  ip: string & (tags.Format<"ipv4"> | tags.Format<"ipv6">);
  time: string & tags.Format<"date-time">;
}
