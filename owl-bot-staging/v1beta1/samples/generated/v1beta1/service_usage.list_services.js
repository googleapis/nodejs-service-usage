// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main() {
  // [START serviceusage_list_services_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Parent to search for services on.
   *  An example name would be:
   *  `projects/123`
   *  where `123` is the project number (not project ID).
   */
  // const parent = 'abc123'
  /**
   *  Requested size of the next page of data.
   *  Requested page size cannot exceed 200.
   *   If not set, the default page size is 50.
   */
  // const pageSize = 1234
  /**
   *  Token identifying which result to start with, which is returned by a
   *  previous list call.
   */
  // const pageToken = 'abc123'
  /**
   *  Only list services that conform to the given filter.
   *  The allowed filter strings are `state:ENABLED` and `state:DISABLED`.
   */
  // const filter = 'abc123'

  // Imports the Serviceusage library
  const {ServiceUsageClient} = require('@google-cloud/service-usage').v1beta1;

  // Instantiates a client
  const serviceusageClient = new ServiceUsageClient();

  async function listServices() {
    // Construct request
    const request = {
    };

    // Run request
    const iterable = await serviceusageClient.listServicesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listServices();
  // [END serviceusage_list_services_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
