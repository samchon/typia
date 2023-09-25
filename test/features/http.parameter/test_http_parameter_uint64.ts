import typia, { tags } from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_parameter_uint64 = () => {
    const value: uint64 = typia.http.parameter<uint64>("2000");
    TestValidator.equals("parameter<uint64>(uint64)")(value)(2000n);

    TestValidator.error("parameter<uint64>(int64)")(() =>
        typia.http.parameter<uint64>("-2000"),
    );
    TestValidator.error("parameter<uint64>(double)")(() =>
        typia.http.parameter<uint64>("3.14"),
    );

    TestValidator.error("parameter<uint64>(null)")(() =>
        typia.http.parameter<uint64>("null"),
    );
    TestValidator.error("parameter<uint64>(string)")(() =>
        typia.http.parameter<uint64>("one"),
    );
    TestValidator.error("parameter<uint64>(boolean)")(() =>
        typia.http.parameter<uint64>("false"),
    );
};

type uint64 = bigint & tags.Type<"uint64">;
