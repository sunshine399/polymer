// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {PropertyAccessors} from './property-accessors.js';

import {dedupingMixin} from '../utils/mixin.js';

export {DirMixin};


/**
 * Element class mixin that allows elements to use the `:dir` CSS Selector to
 * have text direction specific styling.
 *
 * With this mixin, any stylesheet provided in the template will transform
 * `:dir` into `:host([dir])` and sync direction with the page via the
 * element's `dir` attribute.
 *
 * Elements can opt out of the global page text direction by setting the `dir`
 * attribute directly in `ready()` or in HTML.
 *
 * Caveats:
 * - Applications must set `<html dir="ltr">` or `<html dir="rtl">` to sync
 *   direction
 * - Automatic left-to-right or right-to-left styling is sync'd with the
 *   `<html>` element only.
 * - Changing `dir` at runtime is supported.
 * - Opting out of the global direction styling is permanent
 */
declare function DirMixin<T extends new (...args: any[]) => {}>(base: T): T & DirMixinConstructor & PropertyAccessorsConstructor & PropertiesChangedConstructor;

import {PropertyAccessorsConstructor} from './property-accessors.js';

import {PropertiesChangedConstructor, PropertiesChanged} from './properties-changed.js';

interface DirMixinConstructor {
  new(...args: any[]): DirMixin;

  /**
   * @param cssText .
   * @param baseURI .
   * @returns .
   */
  _processStyleText(cssText: string, baseURI: string): string;

  /**
   * Replace `:dir` in the given CSS text
   *
   * @param text CSS text to replace DIR
   * @returns Modified CSS
   */
  _replaceDirInCssText(text: string): string;
}

export {DirMixinConstructor};

interface DirMixin extends PropertyAccessors, PropertiesChanged {
  ready(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
}