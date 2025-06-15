/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { InstantiationType, registerSingleton } from '../../../../platform/instantiation/common/extensions.js';
import { BrowserTitleService } from '../../../browser/parts/titlebar/titlebarPart.js';
import { ITitleService } from '../browser/titleService.js';

registerSingleton(ITitleService, BrowserTitleService, InstantiationType.Eager);
