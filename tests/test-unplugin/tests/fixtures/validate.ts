import typia from 'typia';
import type { IMember } from './type.js';

const validate = typia.createValidate<IMember>();
validate({});
