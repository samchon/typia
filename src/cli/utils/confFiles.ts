import process from 'node:process';
import { glob } from 'tinyglobby';
import { logger } from './logger';
import { bail } from './message';

export async function findTsConfig({ cwd }: { cwd: string } = { cwd: process.cwd() }): Promise<string> {
  const tsConfigs = await glob(['tsconfig.json', 'tsconfig.*.json'], { cwd });

  if(tsConfigs.length === 0) {
    bail('tsconfig.json not found');
  }

  if (tsConfigs.length === 1) {
    const tsconfig = tsConfigs.at(0);
    if (tsconfig != null) {
      return tsconfig;
    }
  }

  return await logger.prompt(
    'Multiple tsconfig.json files found. Please specify the one to use:', 
    {
      type: 'select',
      options: tsConfigs
    }
  );
}
