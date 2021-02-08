/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { registerSingleton } from 'vs/platform/instantiation/common/extensions';
import { ILocalPtyService } from 'vs/platform/terminal/electron-sandbox/terminal';
import { LocalPtyService } from 'vs/workbench/contrib/terminal/electron-sandbox/localPtyService';

registerSingleton(ILocalPtyService, LocalPtyService, true);
