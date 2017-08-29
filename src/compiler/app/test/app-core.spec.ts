import { BuildConfig } from '../../../util/interfaces';
import { mockStencilSystem } from '../../../test';
import { generatePreamble } from '../../util';

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
    beforeEach(() => {
      config.namespace = 'WillyWendLeSWeTWasaBi';
      config.publicPath = 'Projects\\Ionic\\Stencil';
    });

    it('starts with the preamble', () => {
      const preable = generatePreamble(config).trim();
      const lines = core.wrapCoreJs(config, '').split('\n');
      expect(lines[0]).toEqual(preable);
    });

    it('wraps the JS content in an IFEE', () => {
      const lines = core.wrapCoreJs(config, 'this is JavaScript code, really it is').split('\n');
      expect(lines[1]).toEqual(`(function(Context,appNamespace,publicPath){"use strict";`);
      expect(lines[2]).toEqual('this is JavaScript code, really it is');
      expect(lines[3]).toEqual(`})({},"${config.namespace}","Projects/Ionic/Stencil/willywendleswetwasabi/");`);
    });

    it('trims the JS content', () => {
    });
  });
});
