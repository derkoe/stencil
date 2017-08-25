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
    it('concatinates public path and namespace', () => {
      config.namespace = 'WillyWendLeSWeTWasaBi';
      config.publicPath = 'Projects/Ionic/Stencil';
      expect(core.getAppPublicPath(config)).toEqual('Projects/Ionic/Stencil/willywendleswetwasabi/');
    });

    it('handles windows paths', () => {
      config.namespace = 'WillyWendLeSWeTWasaBi';
      config.publicPath = 'Projects\\Ionic\\Stencil';
      expect(core.getAppPublicPath(config)).toEqual('Projects/Ionic/Stencil/willywendleswetwasabi/');
    });
  });

  describe('wrapCoreJs', () => {

  });
});
