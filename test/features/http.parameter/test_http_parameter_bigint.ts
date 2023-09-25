import typia from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_parameter_bigint = () => {
    const value: bigint = typia.http.parameter<bigint>("270");
    TestValidator.equals("parameter<bigint>(bigint)")(value)(270n);

    TestValidator.error("parameter<bigint>(null)")(() =>
        typia.http.parameter<number>("null"),
    );
    TestValidator.error("parameter<bigint>(string)")(() =>
        typia.http.parameter<number>("one"),
    );
    TestValidator.error("parameter<bigint>(boolean)")(() =>
        typia.http.parameter<number>("false"),
    );
};
