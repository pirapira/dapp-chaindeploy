// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import abi from '@parity/shared/lib/contracts/abi/dappreg';

import { compiler, source as sourceUrl, output as byteCode } from './code/dappreg';

const id = 'dappreg'; // 7bbc4f1a27628781b96213e781a1b8eec6982c1db8fac739af6e4c5a55862c03
const deployParams = [];

export {
  abi,
  byteCode,
  compiler,
  deployParams,
  id,
  sourceUrl
};
