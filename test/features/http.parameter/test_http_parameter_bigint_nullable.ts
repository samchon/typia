import typia from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_parameter_bigint_nullable = () => {
    const value: bigint | null = typia.http.parameter<bigint | null>("270");

    TestValidator.equals("parameter<bigint>(bigint)")(value)(270n);
    TestValidator.equals("parameter<bigint | null>(null)")(
        typia.http.parameter<bigint | null>("null"),
    );

    TestValidator.error("parameter<bigint>(string)")(() =>
        typia.http.parameter<bigint | null>("one"),
    );
    TestValidator.error("parameter<bigint>(boolean)")(() =>
        typia.http.parameter<bigint | null>("false"),
    );
};
