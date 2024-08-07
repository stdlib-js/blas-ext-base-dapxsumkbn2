/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#ifndef STDLIB_BLAS_EXT_BASE_DAPXSUMKBN2_H
#define STDLIB_BLAS_EXT_BASE_DAPXSUMKBN2_H

#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Adds a scalar constant to each double-precision floating-point strided array element and computes the sum using a second-order iterative Kahan–Babuška algorithm.
*/
double stdlib_strided_dapxsumkbn2( const int64_t N, const double alpha, const double *X, const int64_t stride );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_BLAS_EXT_BASE_DAPXSUMKBN2_H
