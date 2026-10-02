import test from "node:test";

import { test_langchain_http_controller_coercion } from "./features/test_langchain_http_controller_coercion";
import { test_langchain_http_controller_standalone } from "./features/test_langchain_http_controller_standalone";
import { test_langchain_http_controller_validation } from "./features/test_langchain_http_controller_validation";

test(
  test_langchain_http_controller_coercion.name,
  test_langchain_http_controller_coercion,
);
test(
  test_langchain_http_controller_standalone.name,
  test_langchain_http_controller_standalone,
);
test(
  test_langchain_http_controller_validation.name,
  test_langchain_http_controller_validation,
);
