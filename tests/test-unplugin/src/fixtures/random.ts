import typia from 'typia';
import type { IMember } from './type.js';

const random = typia.createRandom<IMember>();

random();
