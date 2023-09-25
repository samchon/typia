import typia, { tags } from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_parameter_uint32 = () => {
    const value: uint32 = typia.http.parameter<uint32>("1000");
    TestValidator.equals("parameter<uint32>(uint32)")(value)(1000);

    TestValidator.error("parameter<uint32>(int32)")(() =>
        typia.http.parameter<uint32>("-1000"),
    );
    TestValidator.error("parameter<uint32>(double)")(() =>
        typia.http.parameter<uint32>("3.14"),
    );

    TestValidator.error("parameter<uint32>(null)")(() =>
        typia.http.parameter<uint32>("null"),
    );
    TestValidator.error("parameter<uint32>(string)")(() =>
        typia.http.parameter<uint32>("one"),
    );
    TestValidator.error("parameter<uint32>(boolean)")(() =>
        typia.http.parameter<uint32>("false"),
    );
};

type uint32 = number & tags.Type<"uint32">;
