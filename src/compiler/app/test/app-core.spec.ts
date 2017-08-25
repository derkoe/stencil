import { BuildConfig } from '../../../util/interfaces';
import { mockStencilSystem } from '../../../test';

import * as core from '../app-core';

describe('app-core', () => {
  let config: BuildConfig;

  beforeEach(() => {
    config = {
      sys: mockStencilSystem()
    };
  });

  describe('generateCore', () => {

  });

  describe('generateCoreES5WithPolyfills', () => {

  });

  describe('getAppFileName', () => {
    it('returns the lower-cased namespace', () => {
      config.namespace = 'BarnAcleBobSBigBoaTs';
      expect(core.getAppFileName(config)).toEqual('barnaclebobsbigboats');
    });
  });

  describe('getAppPublicPath', () => {

  });

  describe('wrapCoreJs', () => {

  });
});
