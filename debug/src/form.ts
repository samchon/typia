import typia from "typia";

import { ObjectHttpFormData } from "./internal/ObjectHttpFormData";
import { create_form_data } from "./internal/create_form_data";

const data: ObjectHttpFormData = ObjectHttpFormData.generate();
const assert = (form: FormData) =>
  typia.http.assertFormData<ObjectHttpFormData>(form);
const is = (elem: ObjectHttpFormData): boolean => {
  const form: FormData = create_form_data(elem);
  try {
    assert(form);
    return true;
  } catch {
    return false;
  }
};

console.log(is(data));

for (const s of ObjectHttpFormData.SPOILERS) {
  const elem: ObjectHttpFormData = ObjectHttpFormData.generate();
  const fields = s(elem);
  console.log(fields, is(elem));
}
