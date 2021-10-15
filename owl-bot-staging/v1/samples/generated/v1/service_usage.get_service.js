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
  // [START serviceusage_v1_generated_ServiceUsage_GetService_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Name of the consumer and service to get the `ConsumerState` for.
   *  An example name would be:
   *  `projects/123/services/serviceusage.googleapis.com` where `123` is the
   *  project number.
   */
  // const name = 'abc123'

  // Imports the Serviceusage library
  const {ServiceUsageClient} = require('@google-cloud/service-usage').v1;

  // Instantiates a client
  const serviceusageClient = new ServiceUsageClient();

  async function getService() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await serviceusageClient.getService(request);
    console.log(response);
  }

  getService();
  // [END serviceusage_v1_generated_ServiceUsage_GetService_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
