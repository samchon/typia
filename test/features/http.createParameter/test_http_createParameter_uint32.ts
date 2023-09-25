import typia, { tags } from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_createParameter_uint32 = () => {
    const decoder = typia.http.createParameter<uint32>();
    const value: uint32 = decoder("1000");
    TestValidator.equals("parameter<uint32>(uint32)")(value)(1000);

    TestValidator.error("parameter<uint32>(int32)")(() => decoder("-1000"));
    TestValidator.error("parameter<uint32>(double)")(() => decoder("3.14"));

    TestValidator.error("parameter<uint32>(null)")(() => decoder("null"));
    TestValidator.error("parameter<uint32>(string)")(() => decoder("one"));
    TestValidator.error("parameter<uint32>(boolean)")(() => decoder("false"));
};

type uint32 = number & tags.Type<"uint32">;
