import typia from "typia";

import { _test_http_validateFormData } from "../../internal/_test_http_validateFormData";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_validateFormData_ObjectHttpAtomic =
  _test_http_validateFormData("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )((input) => typia.http.validateFormData<ObjectHttpAtomic>(input));
