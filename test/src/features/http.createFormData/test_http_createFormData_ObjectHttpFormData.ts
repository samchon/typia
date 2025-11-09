import typia from "typia";

import { _test_http_formData } from "../../internal/_test_http_formData";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_http_createFormData_ObjectHttpFormData = (): void => _test_http_formData(
    "ObjectHttpFormData",
)<ObjectHttpFormData>(
    ObjectHttpFormData
)(typia.http.createFormData<ObjectHttpFormData>());
